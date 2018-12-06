'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {

    // 调用extend里面扩展的application
    this.app.foo();

    // 调用extend里面扩展的ctx
    console.log(this.ctx.getHost());


    await this.ctx.render('index');
  }
}

module.exports = HomeController;