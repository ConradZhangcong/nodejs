const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {

    res.writeHead(200, {"Content-Type": "text/html;charset='utf-8'"});

    let pathname = req.url;
    //默认加载首页
    if (pathname === '/') {
        pathname = 'index.html'
    }
    //过滤请求
    if (pathname !== '/favicon.ico') {
        console.log(pathname);
        fs.readFile('static/' + pathname, (err, res) => {
            if (err) {
                console.log('404');
                return false;
            }

            res.end();
        });

    }


    res.write('hello nodejs');

    res.end();
}).listen(8520);
