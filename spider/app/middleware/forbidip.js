/**
 * 屏蔽一段时间内重复请求的ip地址
 * @param {*} options
 * @param {*} app 
 */
module.exports = (options, app) => {
  return async function forbidId(ctx, next) {
    let forbidips = options.forbidips; // 需要屏蔽的ip

    let clientIp = ctx.request.ip; // 客户端的ip

    let hasIp = forbidips.some(function (val) {
      if(val = clientIp) return true;
    })

    if(hasIp){
      ctx.status = 403;
      ctx.body = '您的ip已经被屏蔽';
    }else{
      await next();
    }
  }
}