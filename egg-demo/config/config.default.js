'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1543928896767_4790';

  // add your config here
  config.middleware = [];

  config.view = {
    mapping: {
      '.html': 'ejs',
    },
  };

  config.api = 'http://www.baidu.com';

  return config;
};