const path = require('path');
const Koa = require('koa');
const router = require('koa-router')();
const render = require('koa-art-template');
const session = require('koa-session');

const app = new Koa();

// 配置koa-art-templete模板引擎
render(app, {
    root: path.join(__dirname, 'views'),
    extname: '.html',
    debug: process.env.NODE_ENV !== 'production'
});


app.keys = ['some secret hurr']; //cookie的签名

const CONFIG = {
    key: 'koa:sess', // (string) cookie key (default is koa:sess)
    maxAge: 86400000, // 过期时间
    autoCommit: true, //(boolean) automatically commit headers (default true)
    overwrite: true, // (boolean) can overwrite or not (default true)
    httpOnly: true, // (boolean) httpOnly or not (default true)
    signed: true, // (boolean) signed or not (default true)
    rolling: false, // 每次访问时设置session (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false)
    renew: true, // 即将过期时 (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)
};

app.use(session(CONFIG, app));

router.get('/', async (ctx) => {
    console.log(ctx.session.username);
    ctx.render('index');
});

router.get('/login', async (ctx) => {
    ctx.session.username = '张三';
    ctx.body = '登录成功';
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(8520);
