const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
    let pathname = req.url;
    //默认加载首页
    if (pathname === '/') {
        pathname = 'index.html'
    }
    //过滤请求
    if (pathname !== '/favicon.ico') {
        fs.readFile('static/' + pathname, (err, data) => {
            if (err) {
                console.log('404');
                return false;
            } else {
                res.writeHead(200, {"Content-Type": "text/html;charset='utf-8'"});
                res.write(data);
                res.end();
            }
        });

    }
}).listen(8520);
