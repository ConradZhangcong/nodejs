const fs = require('fs');

const rs = fs.createReadStream('./25_readstream.js');

rs.pipe(process.stdout);

