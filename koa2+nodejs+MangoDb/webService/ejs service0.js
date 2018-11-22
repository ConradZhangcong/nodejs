const http = require('http');
const url = require('url');
const router = require('./model/router');

http.createServer((req, res) => {
    let pathname = (url.parse(req.url)).pathname;
    if (pathname === '/login') {
        res.end('login');
    } else if (pathname === '/register') {
        res.end('register');
    } else if (pathname === '/order') {
        res.end('order');
    } else {
        res.end('index');
    }
}).listen(8520);
