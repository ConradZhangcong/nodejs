'use strict';

const Controller = require('egg').Controller;

class ArticleController extends Controller {
  async index() {
    this.ctx.body = '后台---文章管理列表';
  }

  async add() {
    this.ctx.body = '后台---新增文章';
  }

  async edit() {
    this.ctx.body = '后台---编辑文章';
  }
}

module.exports = ArticleController;