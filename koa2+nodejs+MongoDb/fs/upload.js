const fs = require('fs');

/**
 * 判断目录upload是否存在 如果不存在则创建目录
 */
fs.stat('upload', (err, stats) => {
    if (err) { // 不存在目录 需要创建
        fs.mkdir('upload', error => {
            if (error) {
                console.log(error);
                return false;
            }
            console.log('创建成功');
        });
    } else { // 存在目录
        if (stats.isDirectory()) console.log('存在input目录');
    }
});
