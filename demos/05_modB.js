module.exports.test = 'B';

const modB = require('./05_modA');
console.log('modB: ', modA.test);

module.exports.test = 'BB';
