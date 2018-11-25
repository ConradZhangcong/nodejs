const http = require('http');
const url = require('url');
const model = require('./model/model.js');

http.createServer((req, res) => {
    res.writeHeader(200, {'Content-Type': 'text/html;charset=utf-8'});
    const pathname = url.parse(req.url).pathname.replace('/', '');
    // console.log(pathname);
    if (pathname !== 'favicon.ico') {
        try {
            model[pathname](req, res);
        } catch (err) {
            model['home'](req, res);
        }
    }
}).listen(8520);
