const url = require('url');

function changeRes(res) {
    res.send = (data) => {
        res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
        res.end(data);
    }
}

const Server = () => {
    const G = this; // 全部变量
    this._get = {};
    this._post = {};

    const app = (req, res) => {
        changeRes(res);
        let pathname = url.parse(req.url).pathname; // 获取路由
        let method = req.method.toLowerCase(); // 获取请求方式
        if (!pathname.endsWith('/')) pathname = pathname + '/';
        if (G['_' + method][pathname]) {
            if (method === 'post') {
                let postStr = '';
                req.on('data', (chunk) => {
                    postStr += chunk;
                });
                req.on('end', (err) => {
                    req.body = postStr; // 拿到post的值
                    console.log(postStr);
                    G['_' + method][pathname](req, res);
                })
            } else {
                G['_' + method][pathname](req, res); //执行注册的方法
            }
        } else {
            res.end('no router');
        }
    };
    app.get = (string, callback) => {
        if (!string.startsWith('/')) string = '/' + string;
        if (!string.endsWith('/')) string = string + '/';
        G._get[string] = callback;
    };
    app.post = (string, callback) => {
        if (!string.startsWith('/')) string = '/' + string;
        if (!string.endsWith('/')) string = string + '/';
        G._post[string] = callback;
    };
    return app;
};

module.exports = Server();
