# Koa2+Nodejs+MangoDb入门


## CommonJs

> 我们可以把公共的功能抽离成为一个单独的 js 文件作为一个模块，默认情况下面这 个模块里面的方法或者属性，外面是没法访问的。如果要让外部可以访问模块里面的方法或 者属性，就必须在模块里面通过`exports`或者`module.exports`暴露属性或者方法

> 在需要使用这些模块的文件中，通过 require 的方式引入这个模块。这个时候就可以 使用模块里面暴露的属性和方法

> require文件时 如果根目录不存在 去node_modules找xxx文件夹 xxx文件夹下的package.json 找到package.json下的入口文件main.js
