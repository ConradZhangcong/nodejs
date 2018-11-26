const Koa = require('koa');
const router = require('koa-router')(); // 引入实例化路由

const app = new Koa();

/**
 * 错误处理中间件
 */
router.get('/', async (ctx) => {
    ctx.body = '首页';
}).get('/news', async (ctx, next) => {
    console.log('这是一个新闻');
    ctx.body = '这是一个新闻';
}).get('/newsContent/:id/:type', async (ctx) => {
    console.log(ctx.params);
    ctx.body = '新闻详情';
});

app.use(async (ctx, next) => {
    console.log('这是一个中间件');
    await next();
    if (ctx.status === 404) {
        console.log('这是一个中间件404');
        ctx.body = '这是一个404页面';
    } else {
        console.log(ctx.url);
    }
});

app.use(router.routes())
    .use(router.allowedMethods());

app.listen(8520);
