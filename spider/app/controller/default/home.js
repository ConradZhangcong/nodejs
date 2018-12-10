'use strict';

const BaseController = require('../../core/base');

class HomeController extends BaseController {
  async index() {

    // 调用extend里面扩展的application
    this.app.foo();

    // 调用extend里面扩展的ctx
    this.ctx.session.host = this.ctx.getHost()

    // 设置session的过期时间
    // this.ctx.session.maxAge = 10000;

    await this.ctx.render('login');
  }

  async add() {
    let params = this.ctx.request.body;
    let paramsStr = JSON.stringify(this.ctx.request.body);
    /**
     * cookie加密以后可以设置中文cookie
     * ctx.cookies.set(key, value, options)
     * {Number} maxAge: 设置这个键值对在浏览器的最长保存时间。是一个从服务器当前时刻开始的毫秒数。
     * {Date} expires: 设置这个键值对的失效时间，如果设置了 maxAge，expires 将会被覆盖。如果 maxAge 和 expires 都没设置，Cookie 将会在浏览器的会话失效（一般是关闭浏览器时）的时候失效。
     * {String} path: 设置键值对生效的 URL 路径，默认设置在根路径上（/），也就是当前域名下的所有 URL 都可以访问这个 Cookie。
     * {String} domain: 设置键值对生效的域名，默认没有配置，可以配置成只在指定域名才能访问。
     * {Boolean} httpOnly: 设置键值对是否可以被 js 访问，默认为 true，不允许被 js 访问。
     * {Boolean} secure: 设置键值对只在 HTTPS 连接上传输，框架会帮我们判断当前是否在 HTTPS 连接上自动设置 secure 的值。除了这些属性之外，框架另外扩展了 3 个参数的支持：
     * {Boolean} overwrite: 设置 key 相同的键值对如何处理，如果设置为 true，则后设置的值会覆盖前面设置的，否则将会发送两个 set-cookie 响应头。
     * {Boolean} signed: 设置是否对 Cookie 进行签名，如果设置为 true，则设置键值对的时候会同时对这个键值对的值进行签名，后面取的时候做校验，可以防止前端对这个值进行篡改。默认为 true。
     * {Boolean} encrypt: 设置是否对 Cookie 进行加密，如果设置为 true，则在发送 Cookie 前会对这个键值对的值进行加密，客户端无法读取到 Cookie 的明文值。默认为 false。
     */
    this.ctx.cookies.set('userInfo', paramsStr, {
      maxAge: 1000 * 3600 * 6, //cookie存储6小时
      httpOnly: true,
      singed: true,
      encrypt: true
    });

    await this.success('/');
    // await this.ctx.render('loginSuccess', {
    //   userInfo: params
    // });
  }
}

module.exports = HomeController;