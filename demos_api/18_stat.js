const fs = require('fs');

/**
 * 判断文件是否存在
 */
fs.stat('18_stat.js', (err, stats) => {
  if (err) {
    console.log('文件不存在');
    return;
  }

  console.log(stats.isFile());
  console.log(stats.isDirectory());

  console.log(stats);
})