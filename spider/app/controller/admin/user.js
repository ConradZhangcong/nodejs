'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    this.ctx.body = '后台---用户管理列表';
  }

  async add() {
    this.ctx.body = '后台---新增用户';
  }

  async edit() {
    this.ctx.body = '后台---编辑用户';
  }
}

module.exports = UserController;