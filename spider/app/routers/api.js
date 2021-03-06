'use strict';

/**
 * api路由
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const {
    router,
    controller
  } = app;

  router.get('/api/user', controller.api.user.index);
  router.get('/api/product', controller.api.product.index);

};