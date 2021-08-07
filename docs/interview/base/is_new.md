# new操作符具体干了什么

## 一、前言
在JavaScript中，new操作符用于创建一个给定构造函数的实例对象

例子:
```js
function Person(name,age) {
    this.name = name
    this.age = age
}
Person.prototype.getName = function () {
    return this.name
}
const p = new Person('李雷', 20)
console.log(p)           // {name:'李雷',age:20}
console.log(p.getName()) // 李雷

// 解析:
// new 通过构造函数Person 创建出来的实例可以访问到构造函数中的属性以及构造函数原型链中的属性

```
:::warning
在构造函数中显示加上返回值，并且返回值是一个原始类型,这个时候返回值是没有作用的

如果返回值是一个对象，那么这个返回值会被正常使用
:::

## 二、流程
new关键字主要做了以下的工作？
* 创建一个新的对象`obj`
  
* 将对象与构建函数通过原型链连接起来
  
* 将构建函数中的`this`绑定到新建的对象`obj`上
  
* 根据构建函数返回类型作判断，如果是原始值则被忽略，如果是返回对象，需要正常处理

<div style="text-align: left;width: 600px">
  <img src="../../images/base/is_new_01.png" />
</div>

## 三、模拟new操作符
```js
function Mynew() {
    let obj = {}
    let args = Array.from(arguments)
    obj.__proto__ = args[0].prototype
    let result = func.apply(args[0], args.slice(1))
    return result instanceof Object ? result : obj
}

function Person(name,age) {
    this.name = name
    this.age = age
}
Person.prototype.getName = function () {
    return this.name
}
let p = Mynew(Person,'李雷', 20)
console.log(p.getName())  // 李雷
```
