const Koa = require('koa');
const router = require('koa-router')(); // 引入实例化路由

const app = new Koa();

/**
 * 洋葱执行流程
 */
app.use(async (ctx, next) => {
    console.log('1:这是一个中间件1');
    await next();
    console.log('5:匹配路由完成以后又会返回来执行中间件1');
});

app.use(async (ctx, next) => {
    console.log('2:这是一个中间件2');
    await next();
    console.log('4:匹配路由完成以后又会返回来执行中间件2');
});

router.get('/', async (ctx) => {
    ctx.body = '首页';
}).get('/news', async (ctx, next) => {
    console.log('3:这是一个新闻路由');
    ctx.body = '这是一个新闻';
}).g;

app.use(router.routes())
    .use(router.allowedMethods());

app.listen(8520);
