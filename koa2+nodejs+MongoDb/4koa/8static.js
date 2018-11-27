const Koa = require('koa');
const router = require('koa-router')();
const views = require('koa-views');
const bodyParser = require('koa-bodyparser');
const static = require('koa-static');

const app = new Koa();

app.use(views('post', {
    extension: 'ejs'
}));

// 配置静态资源
app.use(static('static'));

// 配置post bodyParser的中间件
app.use(bodyParser());

router.get('/', async (ctx) => {
    await ctx.render('index');
}).post('/doAdd', async (ctx) => {
    console.log(ctx.request.body);
    ctx.body = ctx.request.body;
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(8520);
