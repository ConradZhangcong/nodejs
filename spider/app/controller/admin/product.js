'use strict';

const Controller = require('egg').Controller;

class ProductController extends Controller {
  async index() {
    this.ctx.body = '后台---商品管理列表';
  }

  async add() {
    this.ctx.body = '后台---新增商品';
  }

  async edit() {
    this.ctx.body = '后台---编辑商品';
  }
}

module.exports = ProductController;
