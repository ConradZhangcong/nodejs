const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router
    .get('/', async (ctx, next) => {
        ctx.body = 'Hello Koa';
    })
    .get('/news', async (ctx, next) => {
        ctx.body = '这是一个新闻页面';
    });

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(8520);
