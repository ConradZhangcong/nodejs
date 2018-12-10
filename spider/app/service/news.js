'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
  async getNewsList() {
    // 通过抓取接口返回数据
    const api = this.config.api + 'appapi.php?a=getPortalList&catid=20&page=1';
    let response = await this.ctx.curl(api);
    let data = JSON.parse(response.data); // 把buffer类型转换成对象
    return data.result;
  }

  async getNewsContent(aid) {
    const api = this.config.api + 'appapi.php?a=getPortalArticle&aid=' + aid;
    let response = await this.ctx.curl(api);
    let data = JSON.parse(response.data); // 把buffer类型转换成对象
    return data.result;
  }

  async getStaticNews() {
    const result = {
      name: 'conrad',
      age: 20
    }
    return result;
  }
}

module.exports = NewsService;