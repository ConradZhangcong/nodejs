/**
 * 返回promise对象
 */
/*async function getData() {
    return '这是一个数据';
}

console.log(getData());

const p = getData();

p.then((res) => {
    console.log(res);
});*/

/**
 * async await
 * @returns {Promise<string>}
 */
/*async function getData() {
    console.log(2);
    return '这是一个数据';
}

async function test() {
    console.log(1);
    let d = await getData();
    console.log(d);
    console.log(3);
}

test(); // 1 2 3*/

/**
 *
 * @returns {Promise<any>}
 */

/*function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let username = '张三';
            resolve(username);
        }, 1000);
    })
}

const p = getData();
p.then((data) => {
    console.log(data);
});*/

function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let username = '张三';
            resolve(username);
        }, 1000);
    })
}

async function test() {
    let data = await getData();
    console.log(data);
    console.log(1);
}

test();
