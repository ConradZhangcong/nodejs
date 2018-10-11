const fs = require('fs');

/**
 * 删除文件夹
 */
fs.rmdir('./test', err => {
  if (err) throw err;
})