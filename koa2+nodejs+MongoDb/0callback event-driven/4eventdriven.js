const fs = require('fs');
const events = require('events');
const EventEmitter = new events.EventEmitter;

let getMime = (callback) => {
    fs.readFile('test.json', (err, data) => {
        if (err) {
            console.log(err);
            return false;
        }
        EventEmitter.emit('on_finish', data);
    })
};

getMime(); // 执行方法

// 监听广播数据
EventEmitter.on('on_finish', (data) => {
    console.log(data.toString());
});
