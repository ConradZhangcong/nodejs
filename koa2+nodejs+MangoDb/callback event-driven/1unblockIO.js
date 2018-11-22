const fs = require('fs');

/**
 * 非阻塞IO 输出132
 */
// console.log('1');
// fs.readFile('test.json', (err, data) => {
//     if (err) {
//         console.log(err);
//         return false;
//     }
//     console.log('2');
//     console.log(data);
// });
// console.log('3');

let getMime = () => {
    fs.readFile('test.json', (err, data) => {
        if (err) {
            console.log(err);
            return false;
        }
        return data.toString();
    })
};

console.log(getMime()); // undefined
