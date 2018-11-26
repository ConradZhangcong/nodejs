const Koa = require('koa');
const router = require('koa-router')();
const views = require('koa-views');

const app = new Koa();

// app.use(views('views', {map: {html: 'ejs'}}));
app.use(views(__dirname + '/views', {
    extension: 'ejs'
}));

// 配置公共信息
app.use(async (ctx, next) => {
    ctx.state.userInfo = '张三';
    await next();
});

router.get('/', async (ctx, next) => {
    let title = 'hello ejs';
    let content = '<h2>这是一个h2</h2>';
    let num = 123;
    await ctx.render('index', {
        title: title,
        content: content,
        num: num
    });
});

router.get('/news', async (ctx) => {
    let arr = ['111', '222', '333'];
    await ctx.render('news', {
        list: arr
    });
});

app.use(router.routes())
    .use(router.allowedMethods());

app.listen(8520);
