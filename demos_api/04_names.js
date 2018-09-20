const {basename, dirname, extname} = require('path');

const filePath = 'D:/learn/nodejs/demos_api/04_names.js';

console.log(basename(filePath)); //文件名
console.log(dirname(filePath)); // 所在文件夹
console.log(extname(filePath)); // 扩展名
