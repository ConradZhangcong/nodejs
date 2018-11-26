const Koa = require('koa');
const router = require('koa-router')(); // 引入实例化路由

const app = new Koa();

router.get('/', async (ctx) => {
    ctx.body = '首页';
});
router.get('/news', async (ctx) => {
    /**
     * 获取get传值
     * query 返回格式化好的参数对象
     * querystring 返回请求字符串
     */
    console.log(ctx.query); // { id: '1' }
    console.log(ctx.querystring); // id=1
    console.log(ctx.req);
    ctx.body = '新闻页';
});
// 动态路由
router.get('/newsContent/:id/:type', async (ctx) => {
    console.log(ctx.params);
    ctx.body = '新闻详情';
});

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(8520);
