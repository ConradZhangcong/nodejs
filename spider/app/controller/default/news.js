'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async index() {
    /**
     * 路由外部重定向
     */
    // this.ctx.status = 301; // 改变状态码为301(永久重定向)
    // this.ctx.redirect('/shop'); // 临时重定向 302


    let list = await this.service.news.getNewsList();
    let result = this.ctx.cookies.get('userInfo', {
      encrypt: true
    });
    let userInfo = JSON.parse(result);
    let host = this.ctx.session.host;
    await this.ctx.render('news', {
      list: list,
      userInfo: userInfo,
      host: host
    })
  }

  async content() {
    let aid = this.ctx.query.aid;
    let list = await this.service.news.getNewsContent(aid);

    await this.ctx.render('newscontent', {
      list: list[0]
    })
  }

  async loginOut() {
    // 清理cookie
    this.ctx.cookies.set('userInfo', null)
    this.ctx.redirect('/')
  }
}

module.exports = NewsController;