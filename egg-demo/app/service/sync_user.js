'use strict';

const Service = require('egg').Service;

class Sync_userService extends Service {
  async echo() {
    console.log('111');
  }
}

module.exports = Sync_userService;
