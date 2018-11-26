const Koa = require('koa');
const router = require('koa-router')(); // 引入实例化路由

const app = new Koa();
/**
 * 路由器中间件
 */
router.get('/', async (ctx) => {
    ctx.body = '首页';
}).get('/news', async (ctx, next) => {
    console.log('这是一个新闻');
    await next();
}).get('/news', async (ctx) => {
    ctx.body='这是一个新闻';
}).get('/newsContent/:id/:type', async (ctx) => {
    console.log(ctx.params);
    ctx.body = '新闻详情';
});

app.use(router.routes())
    .use(router.allowedMethods());

app.listen(8520);
