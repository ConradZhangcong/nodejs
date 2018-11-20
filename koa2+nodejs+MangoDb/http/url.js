let http = require('http');
let url = require('url');
/**
 * supervisor url.js
 */
http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type": "text/html;charset='utf-8'"});

    // 输入http://localhost:8520/news?id=200&name=zhangsan 获取id name
    if (req.url !== '/favicon.ico') {
        let query = url.parse(req.url, true);
        console.log('id:' + query.query.id);
        console.log('name:' + query.query.name);
        console.log('aid:' + query.query.aid);
    }
    res.write('hello nodejs');
    res.end();
}).listen(8520);
