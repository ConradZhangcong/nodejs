const path = require('path');
const Koa = require('koa');
const router = require('koa-router')();
const render = require('koa-art-template');

const app = new Koa();

// 配置koa-art-templete模板引擎
render(app, {
    root: path.join(__dirname, 'views'),
    extname: '.html',
    debug: process.env.NODE_ENV !== 'production'
});

router.get('/', async (ctx) => {
    let name = '张三';
    ctx.cookies.set('userInfo', 'zhangsan', {
        maxAge: 60 * 60 * 1000
        // expires: '2018-11-28',
        // path: '/news', // 配置可以访问的页面
        // domain: '.baidu.com', // 默认是当前域下面所有页面都可以使用
        // httpOnly: true, // true 只有服务器 false 服务端和客户端
    });
    await ctx.render('index');
});

router.get('/news', async (ctx) => {
    let userInfo = ctx.cookies.get('userInfo');
    console.log(userInfo);
    let app = {
        name: 'zhangsan'
    };
    await ctx.render('news', {
        list: app
    })
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(8520);
