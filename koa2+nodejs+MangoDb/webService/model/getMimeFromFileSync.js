const fs = require('fs');

module.exports = extname => {
    // 改成同步的方法
    const data = fs.readFileSync('./mime.json');
    // data.toString() 把Buffer类型转换成字符串
    const mime = JSON.parse(data.toString());
    return mime[extname] || 'text/html';
};
