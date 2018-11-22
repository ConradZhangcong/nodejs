const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const events = require('events');
const EventEmitter = new events.EventEmitter();
const mimeModel = require('./model/getMimeFromEvent');

http.createServer(function (req, res) {
    let pathname = url.parse(req.url).pathname;
    // 默认加载首页
    if (pathname === '/') {
        pathname = 'index.html'
    }
    // 获取文件的后缀名
    let extname = path.extname(pathname);
    // 过滤请求
    if (pathname !== '/favicon.ico') {
        fs.readFile('static/' + pathname, (err, data) => {
            if (err) {
                // 找不到页面时 返回404
                fs.readFile('static/404.html', (err404, data404) => {
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
                mimeModel(extname, EventEmitter); // 根据后缀名 获取文件类型
                EventEmitter.on('to_mime', (mime) => {
                    res.writeHead(200, {"Content-Type": mime + ";charset='utf-8'"});
                    res.end(data);
                });
            }
        });
    }
}).listen(8520);
