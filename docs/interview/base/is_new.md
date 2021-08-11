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
* 创建一个空对象，这个对象讲会作为执行构造函数执行之后返回对象的实例
  
* 将空对象的`__proto__`指向构造函数的`prototype`。
  
* 将这个空对象赋值给构造函数内部的`this`，并执行构造函数。
  
* 根据构造函数的逻辑，返回第一步创建的对象或者构造函数显示的返回值。


## 三、仿写new关键词方法
```js
function Mynew(...agrs) {
    // 1. 获取构造函数
    const constructor = args.shift()
    
    // 2. 创建空对象并设置原型
    const obj = Object.create(constructor.prototype)
    
    // 3.绑定this并执行构造函数
    const result = constructor.apply(obj,args)
    
    // 4. 返回构造函数显示返回的值或新对象
    return isObject(result) ? result : obj
}

function isObject (obj) {
    return obj !== null && typeof obj === 'object'
}

function Person(name) {
    this.name = name
}

let p = Mynew(Person,'李雷')
console.log(p instanceof Person) // true
console.log(p.name)  // 李雷
```
