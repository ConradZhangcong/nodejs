const http = require('http');
const url = require('url');
const ejs = require('ejs');
const fs = require('fs');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
    let method = req.method.toLowerCase(); // 获取请求方式
    let pathname = (url.parse(req.url, true)).pathname; // 获取请求路径
    if (pathname === '/login') { // 显示登录页面
        ejs.renderFile('views/form.ejs', {}, (err, data) => {
            res.end(data)
        });
    } else if (pathname === '/dologin' && method === 'get') { // 执行登录的操作
        console.log(url.parse(req.url, true).query); // get请求获取数据
        res.end('dologin get');
    } else if (pathname === '/dologin' && method === 'post') { // 执行登录的操作
        let postStr = '';
        req.on('data', (chunk) => {
            postStr += chunk;
        });
        req.on('end', (err) => {
            console.log(postStr);
            fs.appendFile('login.txt', postStr + '\n', (err) => {
                if (err) {
                    console.log(err);
                    return false;
                }
                console.log('写入数据成功');
            });
            res.end("<script>alert('登录成功');history.back();</script>>")
        });
    } else {
        ejs.renderFile('views/index.ejs', {}, (err, data) => {
            res.end(data);
        });
    }
}).listen(8520);
