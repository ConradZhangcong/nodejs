module.exports = (options, app) => {
  return async function auth(ctx, next) {
    console.log(options);
    console.log('在路由里面使用中间件:' + new Date());
    await next();
  }
}