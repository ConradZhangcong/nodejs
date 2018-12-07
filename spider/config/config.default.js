'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1544107542729_8060';

  // add your config here
  config.middleware = ['printdate', 'forbidip', 'auth', 'compress', 'jsonp'];

  config.compress = {
    enable: false,
    threshold: 1024
  }

  config.auth = {
    // match: '/news',
    match(ctx) {
      return ctx.request.url == '/' ? true : false
    },
    title: 'this is a auth'
  }

  //配置session
  config.session = {
    key: 'SESSION_ID',
    maxAge: 100000,
    httpOnly: true,
    encrypt: true,
    renew: true
  }

  // 给中间件传入参数
  config.forbidip = {
    forbidips: [
      // '127.0.0.1',
    ]
  }

  // 配置ejs模板引擎
  config.view = {
    mapping: {
      '.html': 'ejs',
    },
  };

  // 配置公共的api
  config.api = 'http://www.phonegap100.com/';

  return config;
};