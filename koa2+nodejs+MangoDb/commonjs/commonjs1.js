let http = require('http');
let config = require('./config');

let app = http.createServer(function (req, res) {
    res.writeHeader(200, {'Content-Type': 'text/html;charset=utf-8'});
    res.write('hello nodejs');
    console.log(config.str);
    res.end();
});

app.listen(8520, '127.0.0.1');
