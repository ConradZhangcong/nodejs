/**
 * readStream
 */
// const fs = require('fs');
//
// const readStream = fs.createReadStream('input.txt');
// let str = ''; // 保存数据
// let count = 0;
//
// readStream.on('data', chunk => {
//     str += chunk;
//     count++;
// });
//
// readStream.on('end', chunk => {
//     console.log('str:' + str);
//     console.log('count:' + count);
// });
//
// readStream.on('error', err => {
//     console.log(err)
// });

/**
 * writeStream
 */
// const fs = require('fs');
// const data = '我是从数据库获取的字符串\n';
//
// const writeStream = fs.createWriteStream('output.txt');
//
// for (let i = 0; i < 100; i++) {
//     writeStream.write(data, 'utf8');
// }
//
// writeStream.end(); //标记写入完成
//
// writeStream.on('finish', () => {
//     console.log('写入完成');
// });
//
//
// writeStream.on('error', () => {
//     console.log('写入失败');
// });

/**
 * 读取写入流管道pipe
 */
const fs = require('fs');
const readStream = fs.createReadStream('input.txt');
const writeStream = fs.createWriteStream('output.txt');

readStream.pipe(writeStream);

console.log('程序执行完毕');
