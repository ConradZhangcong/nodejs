const http = require('http');
const url = require('url');
const G = {};

const app = (req, res) => {
    let pathname = url.parse(req.url).pathname;
    if (!pathname.endsWith('/')) pathname = pathname + '/';
    if (G[pathname]) {
        G[pathname](req, res); //执行注册的方法
    } else {
        res.end('no router');
    }
};

// 定义app.get方法
app.get = (string, callback) => {
    if (!string.startsWith('/')) string = '/' + string;
    if (!string.endsWith('/')) string = string + '/';
    G[string] = callback;
    console.log(G);
};

http.createServer(app).listen(8520);

// 注册login这个路由的方法
app.get('login', (req, res) => {
    res.end('login');
});

app.get('register', (req, res) => {
    res.end('register');
});

