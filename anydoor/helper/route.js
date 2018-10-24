const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');
const promisify = require('util').promisify;
const stat = promisify(fs.stat);
const readdir = promisify(fs.readdir);
const config = require('../config/defaultConfig');
const mine = require('./mine');
const compress = require('./compress');
const range = require('./range');

const tplPath = path.join(__dirname, '../template/dir.tpl')
const source = fs.readFileSync(tplPath);
const template = Handlebars.compile(source.toString());

module.exports = async function (req, res, filePath) {
  try {
    const stats = await stat(filePath);
    // 文件
    if (stats.isFile()) {
      const contentType = mine(filePath);
      res.statusCode = 200;
      res.setHeader = ("Content-type", contentType);
      // 范围
      let rs;
      const {code, start, end} = range(stats.size, req, res);
      if (code == 200) {
        res.statusCode = 200;
        rs = fs.createReadStream(filePath);
      } else {
        res.statusCode = 206;
        rs = fs.createReadStream(filePath, {
          start,
          end
        });
      }
      // 压缩
      if (filePath.match(config.compress)) {
        rs = compress(rs, req, res);
      }
      rs.pipe(res);
      // 文件夹
    } else if (stats.isDirectory()) {
      const files = await readdir(filePath);
      res.statusCode = 200;
      res.setHeader = ("Content-type", "text/html");
      const dir = path.relative(config.root, filePath);
      const data = {
        title: path.basename(filePath),
        dir: dir ? `/${dir}` : '',
        files: files.map(file => {
          return {
            file,
            icon: mine(file)
          }
        }),
      };
      res.end(template(data));
    }
  } catch (ex) {
    console.error(ex);
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end(`${filePath} is not a directory or file\n ${ex.toString()}`);
  }
}