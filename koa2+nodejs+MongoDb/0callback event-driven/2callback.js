const fs = require('fs');

let getMime = (callback) => {
    fs.readFile('test.json', (err, data) => {
        if (err) {
            console.log(err);
            return false;
        }
        callback(data.toString());
    })
};

getMime(res => {
    console.log(res);
});
