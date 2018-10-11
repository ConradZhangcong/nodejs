const fs = require('fs');

/**
 * 监听文件夹下文件变化
 */
fs.watch('./', {
  recursive: true
}, (eventType, filename) => {

  console.log(eventType, filename);
})