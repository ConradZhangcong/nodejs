/**
 * 执行任何代码
 * 修改请求和相应对象
 * 终结请求-响应循环
 * 调用堆栈中的下一个中间件
 * next()
 */
const Koa = require('koa');
const router = require('koa-router')();

const app = new Koa();

/**
 * 应用级中间件
 * 匹配路由前的操作
 */
app.use(async (ctx, next) => {
    ctx.body = '这是一个中间件';
    console.log(new Date());
    await next(); // 路由匹配完成以后继续向下匹配
});

router.get('/', async (ctx) => {
    ctx.body = '首页';
}).get('/news', async (ctx) => {
    ctx.body = '新闻页';
});

app
    .use(router.routes())
    .use(router.allowedMethods);

app.listen(8520);
