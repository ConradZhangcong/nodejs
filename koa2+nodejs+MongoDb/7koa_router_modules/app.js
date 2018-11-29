const path = require('path');
const Koa = require('koa');
const router = require('koa-router')();
const render = require('koa-art-template');

const admin = require('./routes/admin');
const api = require('./routes/api');
const index = require('./routes/index');

const app = new Koa();

render(app, {
    root: path.join(__dirname, 'views'),
    extname: '.html',
    debug: process.env.NODE_ENV !== '!production'
});

//配置路由
router.use(index);

// 配置层级路由
router.use('/admin', admin);

// api
router.use('/api', api);

// 启动路由
app.use(router.routes())
    .use(router.allowedMethods());

app.listen(8520);
