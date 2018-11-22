const http = require('http');
const url = require('url');
const ejs = require('ejs');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
    let pathname = (url.parse(req.url)).pathname;
    if (pathname === '/login') {
        let msg = '你好 我是后台数据';
        let list = [
            '111',
            '222',
            '333'
        ];
        // 把数据库的数据渲染到模板上
        ejs.renderFile('views/login.ejs', {
            msg: msg,
            list: list
        }, (err, data) => {
            res.end(data);
        });
    } else if (pathname === '/register') {
        let msg = '这是注册页面,也是注册的路由';
        let h = '<h2>这是一个h2</h2>'
        ejs.renderFile('views/register.ejs', {
            msg: msg,
            h: h
        }, (err, data) => {
            res.end(data);
        });
        res.end('register');
    } else if (pathname === '/order') {
        res.end('order');
    } else {
        res.end('index');
    }
}).listen(8520);
