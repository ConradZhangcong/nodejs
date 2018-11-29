/**
 * 用户的增删改查
 */
const router = require('koa-router')();

//配置路由
router.get('/', async (ctx) => {
    await ctx.render('admin/focus/index');
});

router.get('add', async (ctx) => {
    await ctx.render('admin/focus/add');
});

router.get('edit', async (ctx) => {
    await ctx.render('admin/focus/edit');
});

router.get('delete', async (ctx) => {
    ctx.body = '后台管理--删除用户'
});

module.exports = router.routes();

