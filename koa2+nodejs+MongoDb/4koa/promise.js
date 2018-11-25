/**
 *
 * @param resolve
 * @param reject
 */
// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let num = Math.random();
//         if (num < 0.5) {
//             resolve('num);
//         } else {
//             reject();
//         }
//     }, 1000);
// });
//
// p.then((res) => {
//     console.log('true: ' + res);
// }).catch((err) => {
//     console.log('false: ' + err)
// });


/**
 *
 * @param resolve
 * @param reject
 */
function getData(resolve, reject) {
    setTimeout(() => {
        let num = Math.random();
        if (num < 0.5) {
            resolve(num);
        } else {
            reject(num);
        }
    }, 1000);
}

let p = new Promise(getData);

p.then((result) => {
    console.log('true: ' + result);
}).catch((error) => {
    console.log('false: ' + error);
});
