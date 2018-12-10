const cheerio = require('cheerio');

module.exports = (app) => {
  return {
    schedule: {
      interval: '20s',
      type: 'all'
    },

    async task(ctx) {
      let url = 'https://news.baidu.com/'
      let result = await ctx.service.spider.requestUrl(url);
      let htmlDate = result.data.toString();
      // 检测网站是否被篡改 或者是否挂掉
      const $ = cheerio.load(htmlDate, {
        decodeEntities: false
      });
      let title = $('title').html();
      if (title !== '百度新闻——全球最大的中文新闻平台') {
        console.log('网站挂掉了 或者被修改了')
      } else {
        console.log('正常')
      }

      $('.hotnews a').each(function(){
        console.log($(this).html());
      })
    }
  }
}