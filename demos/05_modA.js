module.exports.test = 'A';

const modA = require('./05_modB');
console.log('modA: ', modB.test);

module.exports.test = 'AA';
