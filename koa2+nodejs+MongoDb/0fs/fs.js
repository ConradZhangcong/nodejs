const fs = require('fs');

// 检测是目录还是文件
// fs.stat('html', (err, stats)=>{
//     if(err){
//         console.log(err);
//         return false;
//     }
//     console.log('文件:' + stats.isFile());
//     console.log('目录:' + stats.isDirectory());
// });

// 创建目录
// fs.mkdir('css', err => {
//     if (err) {
//         console.log(err);
//         return false;
//     }
//     console.log('success');
// });

// 读取目录
// fs.readdir('html', (err, data) => {
//     if (err) {
//         console.log(err);
//         return false;
//     }
//     console.log(data);
// });

// 读取文件
// fs.readFile('fs.js', (err, data) => {
//     if (err) {
//         console.log(err);
//         return false;
//     }
//     console.log(data.toString());
// })

// 创建写入文件
// fs.writeFile('t.txt', '你好nodejs 覆盖', 'utf8', err => {
//     if (err) {
//         console.log(err);
//         return false;
//     }
//     console.log('写入成功');
// });

// appendFile 追加文件
// fs.appendFile('t1.txt', '这是写入的内容\n', (err)=>{
//     if (err) {
//         console.log(err);
//         return false;
//     }
//     console.log('写入成功');
// });

// rename 重命名
// fs.rename('html/index.js', 'html/css/basic.css', err => {
//     if (err) {
//         console.log(err);
//         return false;
//     }
//     console.log('剪切成功');
// });

// rmdir 删除目录
// fs.rmdir('t', err => {
//     if (err) {
//         console.log(err);
//         return false;
//     }
//     console.log('删除目录成功');
// });

// unlink 删除文件
fs.unlink('index.css', err => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log('删除文件成功');
});
