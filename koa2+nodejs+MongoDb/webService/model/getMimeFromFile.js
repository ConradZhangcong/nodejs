const fs = require('fs');

module.exports = extname => {
    fs.readFile('./mime.json', (err, data) => {
        if (err) {
            console.log('mime.json 文件不存在');
            return false;
        }
        const mime = JSON.parse(data.toString());
        // console.log(mime[extname]);
        return mime[extname] || 'text/html';
    })
};
