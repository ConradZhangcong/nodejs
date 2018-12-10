module.exports = {
  schedule: {
    interval: '30m',
    type: 'all'
  },

  async task(ctx) {
    let result = ctx.service.news.getStaticNews();
    // console.log(result);
  }
}