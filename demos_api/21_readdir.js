const fs = require('fs');

/**
 * 查看文件夹内文件
 */
fs.readdir('./', (err, files) => {
  if (err) throw err;

  console.log(files);
})