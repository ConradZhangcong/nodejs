'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const {
    router,
    controller
  } = app;

  // 传参到中间件
  const test = app.middleware.test({
    title: 'this is touter js'
  });

  let adminAuth = app.middleware.adminAuth();


  // 前台路由
  router.get('/', test, controller.default.home.index);
  router.get('/', controller.default.home.index);
  router.post('/add', controller.default.home.add);

  router.get('/news', controller.default.news.index);
  router.get('/newscontent', controller.default.news.content);
  router.get('/loginOut', controller.default.news.loginOut);

  router.get('/shop', controller.default.shop.index);

  // 后台路由
  router.get('/admin/user', controller.admin.user.index);
  router.get('/admin/user/add', controller.admin.user.add);
  router.get('/admin/user/edit', controller.admin.user.edit);

  router.get('/admin/article', controller.admin.article.index);
  router.get('/admin/article/add', controller.admin.article.add);
  router.get('/admin/article/edit', controller.admin.article.edit);

  router.get('/admin/product', controller.admin.product.index);
  router.get('/admin/product/add', controller.admin.product.add);
  router.get('/admin/product/edit', controller.admin.product.edit);

  // api路由
  router.get('/api/user', controller.api.user.index);
  router.get('/api/product', controller.api.product.index);

};