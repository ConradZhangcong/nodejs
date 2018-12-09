'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async index() {
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