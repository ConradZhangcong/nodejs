'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    let list = await this.service.news.getNewsList();

    let user = await this.service.user.getUserInfo();

    let syncUser = await this.service.syncUser.echo();
    
    await this.ctx.render('home', {
      list: list,
      user: user
    })
  }
  async news() {
    this.ctx.body = '你好news';
  }
}

module.exports = HomeController;