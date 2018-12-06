'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
  async getNewsList() {

    console.log('---')
    console.log(this.config.api)

    let user = await this.service.user.getUserInfo();

    console.log(user);
    // 获取新闻数据
    let list = ['111', '222', '333'];
    return list;
  }
}

module.exports = NewsService;