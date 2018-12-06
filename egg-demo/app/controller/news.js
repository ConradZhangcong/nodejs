'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async index() {
    let msg = '123';
    let list = await this.service.news.getNewsList();
    await this.ctx.render('news', {
      msg,
      list
    });
  }

  async content() {
    //获取get传值  this.ctx.query
    let query = this.ctx.query;
    console.log(query);
    this.ctx.body = '新闻页面';
  }

  async newslist() {
    //获取动态路由传值
    let params = this.ctx.params
    console.log(params);
    this.ctx.body = '新闻列表';
  }
}

module.exports = NewsController;