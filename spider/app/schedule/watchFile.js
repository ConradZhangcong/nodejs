const Subscription = require('egg').Subscription;

class WatchFile extends Subscription {
  // 通过 schedule 属性来设置定时任务的执行间隔等配置
  static get schedule() {
    return {
      interval: '30m', // 1 分钟间隔
      type: 'all', // 指定所有的 worker(进程) 都需要执行
    };
  }

  // subscribe 是真正定时任务执行时被运行的函数
  async subscribe() {
    let result = this.ctx.service.news.getStaticNews()
    // console.log(result);
  }
}

module.exports = WatchFile;