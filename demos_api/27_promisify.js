const fs = require('fs');
const promisify = require('util').promisify;

const read = promisify(fs.readFile);

/**
 * 解决回调地狱
 */
// read('./27_promisify.js').then(data => {
//   console.log(data.toString());
// }).catch(ex => {
//   console.log(ex);
// })

async function test() {
  try {
    const content = await read('./27_promisify.js');

    console.log(content.toString());
  } catch (ex) {
    console.log(ex);
  }
}

test();