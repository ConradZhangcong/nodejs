const fs = require('fs');
const path = require('path');
const url = require('url');

//获取文件类型的私有方法
let getMime = (extname, callback) => {
    fs.readFile('./mime.json', (err, data) => {
        if (err) {
            console.log('mime.json 文件不存在');
            return false;
        }
        const mime = JSON.parse(data.toString());
        // console.log(mime[extname]);
        let result = mime[extname] || 'text/html';
        callback(result);
    })
};


exports.static = (req, res, staticpath) => {
    let pathname = url.parse(req.url).pathname;
    // 默认加载首页
    if (pathname === '/') {
        pathname = 'index.html'
    }
    // 获取文件的后缀名
    let extname = path.extname(pathname);
    // 过滤请求
    if (pathname !== '/favicon.ico') {
        fs.readFile(staticpath + '/' + pathname, (err, data) => {
            if (err) {
                // 找不到页面时 返回404
                fs.readFile(staticpath + '/404.html', (err404, data404) => {
                    if (err404) {
                        console.log(err404);
                        return false;
                    }
                    res.writeHead(200, {"Content-Type": "text/html;charset='utf-8'"});
                    res.write(data404);
                    res.end();
                });
                return false;
            } else {
                getMime(extname, (mime)=>{
                    res.writeHead(200, {"Content-Type": mime + ";charset='utf-8'"});
                    res.end(data);
                }); // 根据后缀名 获取文件类型
            }
        });
    }
};
