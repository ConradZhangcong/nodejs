module.exports = (options, app) => {
  return async function auth(ctx, next) {
    if (ctx.session && ctx.session.userInfo) { // 如果session存在表示已经登陆 继续访问
      await next();
    } else { // 如果session不存在 跳转到首页
      if (ctx.request.url == '/') {
        await next();
      } else {
        ctx.redirect('/');
      }
    }
  }
}