module.exports = {
  getHost() {
    // this 就是 app 对象，在其中可以调用 app 上的其他方法，或访问属性
    return this.request.host;
  }
}