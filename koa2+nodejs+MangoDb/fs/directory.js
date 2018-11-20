const fs = require('fs');

let filesArr = [];
fs.readdir('html', (err, files) => {
    if (err) {
        console.log(err)
    } else {
        console.log(files);
        //递归
        (function getFile(index) {
            // 归
            if (index === files.length) {
                console.log(filesArr);
                return false;
            }
            // fs.stat() 是异步的
            fs.stat('html/'+files[index], (error, stats) => {
                if (stats.isDirectory()) {
                    filesArr.push(files[index]);
                }
                getFile(index + 1);
            })
        })(0)

    }
});
