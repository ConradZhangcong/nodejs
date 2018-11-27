const path = require('path');
const Koa = require('koa');
const router = require('koa-router')();
const render = require('koa-art-template');

const app = new Koa();

// 配置koa-art-templete模板引擎
render(app, {
    root: path.join(__dirname, 'art'),
    extname: '.html',
    debug: process.env.NODE_ENV !== 'production'
});

router.get('/', async (ctx) => {
    await ctx.render('index');
});

router.get('/news', async (ctx) => {
    let app = {
        name: 'zhangsa',
        h: '<h2>这是一个h2</h2>',
        num: 20,
        data: [111, 222, 3333, 4444]
    };
    await ctx.render('news', {
        list: app
    })
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(8520);
