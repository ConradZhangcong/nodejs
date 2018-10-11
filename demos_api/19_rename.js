const fs = require('fs');

/**
 * 重命名文件
 */
fs.rename('./text', 'test.txt', err => {
  if (err) throw err;

  console.log('重命名成功');
})