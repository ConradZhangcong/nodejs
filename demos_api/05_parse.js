const {parse, format} = require('path');

const filePath = 'D:/learn/nodejs/demos_api/05_parse.js';

const ret = parse(filePath);

console.log(ret);

console.log(format(ret));
