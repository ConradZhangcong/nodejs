/**
 * 新闻的增删改查
 */
const router = require('koa-router')();

//配置路由
router.get('/', async (ctx) => {
    ctx.body = '后台管理--新闻首页'
});

router.get('/add', async (ctx) => {
    ctx.body = '后台管理--增加新闻'
});

router.get('/edit', async (ctx) => {
    ctx.body = '后台管理--编辑新闻'
});

router.get('/delete', async (ctx) => {
    ctx.body = '后台管理--删除新闻'
});

module.exports = router.routes();

