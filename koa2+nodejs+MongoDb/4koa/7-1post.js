const Koa = require('koa');
const router = require('koa-router')();
const views = require('koa-views');
const common = require('./module/common')

const app = new Koa();

app.use(views('post', {
    extension: 'ejs'
}));

router.get('/', async (ctx) => {
    await ctx.render('index');
}).post('/doAdd', async (ctx) => {
    // 原生nodejs在表单中获取数据
    let data = await common.getPostData(ctx);
    console.log(data);
    ctx.body = data;
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(8520);
