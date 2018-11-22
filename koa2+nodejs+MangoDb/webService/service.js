const http = require('http');
const router = require('./model/router');

http.createServer(function (req, res) {
    router.static(req, res, 'static');
}).listen(8520);
