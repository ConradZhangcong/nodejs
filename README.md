# learn Node.js

------

学习资源:

## [Node.js入门到企业Web开发中的应用(慕课网)](https://coding.imooc.com/class/146.html)

------

### CommonJs

> * 每一个文件是一个模块,有自己的作用域.
> * 在模块内部 `modules` 变量代表模块本身.
> * `modules.exports` 属性代表模块对外接口.

### require特性

> * `module` 被加载的时候执行,加载后**缓存**
> * 一旦出现某个模块被**循环加载**,就只输出已经执行的部分,还未执行的部分不会输出.

### global

> * `CommonJs`
> * `Buffer` `process` `console`
> * `timer`

### API

> * `path` 和路径有关的一切
> * `Buffer` `process` `console`
> * `timer`

### ./

> * 在 `require` 方法中总是相对当前文件所在文件夹
> * 在其他地方和 `process.cwd()` 一样 相对于node启动文件夹

### Buffer

> * `Buffer` 用于处理二进制数据流
> * 实例类似整数数组,大小固定
> * C++代码在V8堆外分配物理内存

### fs

> * 同步方法,任何异常会被抛出,用try/catch来处理异常,或异常向上冒泡
> * 实例类似整数数组,大小固定

### 高亮一段代码

```javascript

```