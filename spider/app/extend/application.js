/**
 * 外部可以通过this.app.foo()调用这个方法
 */
module.exports = {
  foo(param) {
    return this.config.api;
  }
}