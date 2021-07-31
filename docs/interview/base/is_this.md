# this指向解析

1. 独立函数调用，例如`getUserInfo()`，此时`this`指向全局对象`window`
2. 对象调用，例如`stu.getStudentName()`，此时`this`指向调用的对象`stu`
3. `call()`、`apply()`和`bind()`改变上下文的方法，`this`指向取决于这些方法的第一个参数，当第一个参数为`null`时，`this`指向全局对象`window`
4. 箭头函数没有`this`，箭头函数里面的`this`只取决于包裹箭头函数的第一个普通函数的`this`
5. `new`构造函数调用，`this`永远指向构造函数返回的实例上，优先级最高。

```js
var name = '未命名'
let getName = function () {
    return this.name
}
let Student = function (name) {
    this.name = name
}
Student.prototype.getName = function () {
    return this.name
}
let lilei = {
    name: '李雷',
    getName: getName
}
let hanmeimei = {
    name: '韩梅梅'
}

getName()        // 输出: 未命名
lilei.getName()  // 输出: 李雷
lilei.getName.apply(hanmeimei)  // 输出: 韩梅梅
let p = new Student('王富贵')
p.getName()   // 输出: 王富贵
```
