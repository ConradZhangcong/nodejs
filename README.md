# learn Node.js

------

学习资源:

## [Node.js入门到企业Web开发中的应用](https://coding.imooc.com/class/146.html)

------

### CommonJs

> * 每一个文件是一个模块,有自己的作用域.
> * 在模块内部 `modules` 变量代表模块本身.
> * `modules.exports` 属性代表模块对外接口.

### require特性

> * `module` 被加载的时候执行,加载后缓存
> * 一旦出现某个模块被循环加载,就只输出已经执行的部分,还未执行的部分不会输出.

### 1. 制作一份待办事宜 [Todo 列表](https://www.zybuluo.com/mdeditor?url=https://www.zybuluo.com/static/editor/md-help.markdown#13-待办事宜-todo-列表)

-[ ] 支持以 PDF 格式导出文稿
-[ ] 改进 Cmd 渲染算法，使用局部渲染技术提高渲染效率
-[x] 新增 Todo 列表功能
-[x] 修复 LaTex 公式渲染问题
-[x] 新增 LaTex 公式编号功能

### 3. 高亮一段代码[^code]

```python
@requires_authorization
class SomeClass:
    pass

if __name__ == '__main__':
    # A comment
    print 'hello world'
```