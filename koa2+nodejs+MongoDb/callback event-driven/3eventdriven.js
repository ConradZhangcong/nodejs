// 广播和接收广播
const events = require('events');
const EventEmitter = new events.EventEmitter();
// console.log(events);

// 监听to_mime的广播
EventEmitter.on('to_mime', (data) => {
    console.log('to_mime: ' + data);
});

// 监听to_parent的广播
EventEmitter.on('to_parent', (data) => {
    console.log('to_parent: ' + data);
    EventEmitter.emit('to_mime', '给mime发送的数据');
});

setTimeout(() => {
    console.log('开始广播...');
    // 广播to_parent事件
    EventEmitter.emit('to_parent', '发送的数据');
}, 1000);
