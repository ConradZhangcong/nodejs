const fs = require('fs');

/**
 * 读文件
 */
fs.readFile('./16_readFile.js', 'utf8', (err, data) => {
  if (err) throw err;

  console.log(data);
})

const data = fs.readFileSync('./00_path.js', 'utf8');

console.log(data);
