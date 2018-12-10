'use strict';

const Service = require('egg').Service;

class SpiderService extends Service {
  async requestUrl(url) {
    let result = await this.ctx.curl(url)
    return result;
  }
}

module.exports = SpiderService;