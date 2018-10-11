const fs = require('fs');

/**
 * 写文件
 */
const content = Buffer.from('this is a test.');

fs.writeFile('./text', content, err => {
  if (err) throw err;

  console.log('done!');
})