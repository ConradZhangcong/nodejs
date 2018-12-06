'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async index() {
    let list = await this.service.news.getNewsList();

    await this.ctx.render('news', {
      list: list
    })
  }

  async content() {
    let aid = this.ctx.query.aid;
    let list = await this.service.news.getNewsContent(aid);

    await this.ctx.render('newscontent', {
      list: list[0]
    })
  }
}

module.exports = NewsController;