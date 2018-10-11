const fs = require('fs');

/**
 * 创建文件夹
 */
fs.mkdir('test', err => {
  if (err) throw err;
})