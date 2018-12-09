'use strict';

/**
 * 前台路由
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

  // router.get('/', test, controller.default.home.index);
  router.get('/', controller.default.home.index);
  router.post('/add', controller.default.home.add);

  router.get('/news', controller.default.news.index);
  router.get('/newscontent', controller.default.news.content);
  router.get('/loginOut', controller.default.news.loginOut);

  router.get('/shop', controller.default.shop.index);

  router.redirect('/news', '/shop', 302); // 重定向  有利于seo优化

};