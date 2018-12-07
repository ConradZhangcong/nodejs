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

  // router.get('/', test, controller.home.index);
  router.get('/', controller.home.index);
  router.post('/add', controller.home.add);

  router.get('/news', controller.news.index);
  router.get('/newscontent', controller.news.content);
  router.get('/loginOut', controller.news.loginOut);

  router.get('/shop', controller.shop.index);
};