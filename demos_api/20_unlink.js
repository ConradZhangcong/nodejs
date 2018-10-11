const fs = require('fs');

/**
 * 删除文件
 */
fs.unlink('./test', err => {
  if (err) throw err
  
  console.log('删除成功');
})