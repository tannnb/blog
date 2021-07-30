# 基础知识





## this指向解析

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

## 闭包

闭包就是能够读取其他函数内部变量的函数，或者子函数在外调用， 子函数所在的父函数的作用域不会被释放

* 函数中返回函数
* 将函数作为参数传递
* 回调函数
* 非典型闭包IIFE(立即执行函数表达式)

```js
// 函数中返回函数
var name = '李雷'

function getName() {
    var name = '韩梅梅'
    return function () {
        console.log(name)
    }
}

var currentName = getName()
currentName() // 韩梅梅
```

```js
//将函数作为参数传递: 无论通过何种手段将内部的函数传递到词法作用域之外(外层函数外部)，它都会对原始作用域进行引用，无论在何处执行这个函数都会产生闭包
var name = '李雷'

function person() {
    var name = '韩梅梅'

    function print() {
        console.log(name)
    }

    getName(print)
}

function getName(fn) {
    fn()
}

person() // 韩梅梅
```

```js
// 回调函数:定时器，事件监听，ajax请求，跨域窗口通信或者一部中，只要使用回调函数，实际都是在使用闭包
setTimeout(function () {
    console.log('setTimeout')
}, 1000)

document.addEventListener('click', function (event) {
    console.log(event)
})

// postMessage:在子窗口中监听父窗口messaghe
childWindow.addEventListener('message', function (event) {
    console.log(event.origin) // 父窗口url
    console.log(event.source) // 父窗口对象
    console.log(event.data)   // 父窗口传递过来的数据
})
```

```js
//IIFE：立即执行函数表达式，创建了一个闭包。
var name = '李雷';
(function person() {
    console.log(name)
})()
// ()()之前必须加 `;` 防止自执行函数前面有其他代码导致JS解析器认为是一个整体
```

## 原型，原型链

参考如下链接：
[JavaScript深入之从原型到原型链](https://github.com/mqyqingfeng/blog/issues/2)

## 浅拷贝、深拷贝

* 浅拷贝
* 1.利用Object.assign()
* 2.利用...扩展运算符

```js
var person = {
    name: '李雷',
    age: 20,
    school: {
        name: '希望小学'
    }
}
var lilei = Object.assign({}, person)
lilei.age = 21
lilei.school.name = '新希望小学'
console.log(person) // school.name:'新希望小学'
console.log(lilei)  // school.name:'新希望小学'，age：21

// -------分割线---------

var person = {name: '李雷', age: 20}
var newObj = {...person}
```

* 深拷贝
* 1.使用JSON.parse()和JSON.stringify()两个函数
* 2.实现自己的简易深拷贝方法
* 3.lodash第三方库实现深拷贝

```js
// 使用JSON.parse()和JSON.stringify()
// 会忽略属性值为undefined,Symbol的属性，不会序列化函数(忽略函数)
var person = {
    name: '李雷',
    age: 18,
    sex: undefined,
    isSymbol: Symbol(),
    getName() {
        console.log(this.name)
    }
}
var newObj = JSON.parse(JSON.stringify(person));


// 简易深拷贝
function deepClone(obj) {
    function isObject(arg) {
        return (typeof arg === 'object' || typeof arg === 'function') && arg !== null
    }

    if (!isObject(obj)) {
        throw new Error('is not the object')
    }
    var isArray = Array.isArray(obj)
    var newObj = isArray ? [...obj] : {...obj}
    Reflect.ownKeys(newObj).forEach(key => {
        newObj[key] = isObject(newObj[key]) ? deepClone(newObj[key]) : newObj[key];
    })
    return newObj;
}

var person = {
    name: '李雷',
    age: 18,
    job: {
        number: 1,
    },
    sex: undefined,
    isSymbol: Symbol(),
    getName() {
        console.log(this.name)
    }
}

var p1 = deepClone(person)
person.job.number = 2
console.log(person.job) // {number:2}
console.log(p1.job)     // {number:1}


// -------分割线---------
// lodash第三方库实现深拷贝
import _ from 'lodash'

_.cloneDeep(person)

```

## 类的创建和继承

* 原型链实现继承
* 借用构造函数实现继承
* 组合继承
* 寄生组合继承
* 类继承

```js
// 原型链继承: 重写子类的原型,并将它指向父类; 这种方式创建出来的实例即是子类的实例,又是父类的实例。
// 1.不能向父类构造函数传递参数。
// 2.父类上的引用类型属性会被所有实例共享，只要其中一个实例改变，会影响其他实例的值
function Animal() {
    this.colors = ['red', 'yellow']
}

function Dog(name) {
    this.name = name
}

Dog.prototype = new Animal()

let dog1 = new Dog('旺财')
let dog2 = new Dog('小强')
dog2.colors.push('blue')

console.log(dog1) // ['red','yellow','blue'] 
console.log(dog2) // ['red','yellow','blue'] 

console.log(dog1 instanceof Dog)       // true
console.log(dog2 instanceof Animal)    // true
```

```js
// 构造函数实现继承:借用构造函数实现继承，通过在子类中使用`call`方法,实现父类构造函数并向父类构造函数传参
// 1.无法继承父类原型对象上的属性和方法
function Animal(name) {
    this.name = name
    this.colors = ['red', 'yellow']
}

Animal.prototype.eat = function () {
    console.log('名称:' + this.name, '行为:eat')
}

function Dog(name) {
    Animal.call(this, name)
}

let dog1 = new Dog('旺财') // Dog{name: "旺财", colors: Array(2)}
let dog2 = new Dog('小强')

dog2.colors.push('blue')

console.log(dog1.colors); // ["red", "yellow"]
console.log(dog2.colors); // ["red", "yellow", "blue"]


console.log(dog1 instanceof Dog);    // true
console.log(dog2 instanceof Animal); // false

dog1.eat(); // error
```

```js
// 组合继承: 组合原型链继承和借用构造函数继承两种方法。
// 父类构造函数会被调用多次。
function Animal(name) {
    this.name = name
    this.colors = ['red', 'yellow']
}

Animal.prototype.eat = function () {
    console.log('名称:' + this.name, '行为:eat')
}

function Dog(name) {
    Animal.call(this, name)
}

// 会多次调用new Animal()
Dog.prototype = new Animal() // 第一次初始化Animal
let dog1 = new Dog('旺财')   // 第二次初始化Animal
let dog2 = new Dog('小强')   // 第三次初始化Animal

dog2.colors.push('blue')

console.log(dog1.name); //旺财
console.log(dog2.colors); // ["red", "yellow", "blue"]

dog1.eat(); // 名称:旺财 行为:eat
```

```js
// 寄生组合继承:寄生组合继承是在组合继承的基础上，采用Object.create()方法来改造实现
function Animal(name) {
    this.name = name
    this.colors = ['red', 'yellow']
}

Animal.prototype.eat = function () {
    console.log('名称:' + this.name, '行为:eat')
}

function Dog(name) {
    Animal.call(this, name)
}

Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.constructor = Dog

let dog1 = new Dog('旺财')
let dog2 = new Dog('小强')

dog2.colors.push('blue')

console.log(dog1.name); //旺财
console.log(dog2.colors); // ["red", "yellow", "blue"]

dog1.eat(); // 名称:旺财 行为:eat
```

```js
// 类继承
class Animal {
    constructor(name) {
        this.name = name
        this.colors = ['red', 'yellow']
    }

    eat() {
        console.log('名称:' + this.name, '行为:eat')
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name)
    }
}

let dog1 = new Dog('旺财')
let dog2 = new Dog('小强')

dog2.colors.push('blue')

console.log(dog1.name); //旺财
console.log(dog2.colors); // ["red", "yellow", "blue"]

dog1.eat(); // 名称:旺财 行为:eat
```

## 仿写getQueryString

```js
function getQueryString(url) {
    let index = url.indexOf('?')
    if (!url || index === -1) {
        return undefined
    }
    let str = ''
    let urlArr = url.substring(index + 1).split('&')
    let result = {}
    for (let i = 0; i < urlArr.length; i++) {
        let item = urlArr[i].split('=')
        result[item[0]] = item[1]
    }
    return result
}

let url = 'http://www.baidu.com?id=1&query=百度搜索&callback=callbackJSON'
const {id, query, callback} = getQueryString(url)
```

## 仿写call,apply,bind

```js
// call
Function.prototype.myCall = function (context) {
    context = context ? Object(context) : window;
    console.fn = this

    // 执行函数
    let args = [...arguments].slice(1)
    let result = context.fn(...args)
    // 删除函数
    delete context.fn
    return result
}
// apply
Function.prototype.myApply = function (context, array) {
    context = context ? Object(context) : window;
    console.fn = this
    let result;
    if (!array) {
        result = context.fn()
    } else {
        result = context.fn(...arr)
    }
    return result
}
// bind
Function.prototype.myBind = function (context) {
    if (typeof this !== "function") {
        throw TypeError('** is not function')
    }
    const self = this;
    const args = [...arguments].slice(1)
    return function F() {
        return self.apply(context, args.concat(...arguments))
    }
}

function foo() {
    console.log(this.age);
}

var obj = {age: 1}
var newFunc = foo.myBind(obj);
newFunc(); // 输出1
```

## 仿写扁平数据结构转Tree

```js
function arrayToTree(data, pid = 0) {
    return data.reduce((result, item) => {
        if (item.pid === pid) {
            result.push({
                item,
                ...{children: arrayToTree(data, item.id)}
            })
        }
        return result
    }, [])
}
```

## 仿写debounce,throttling

```js
// immediate:是否立即执行
function debounce(func, wait, immediate) {
    let timeID;
    return function () {
        let context = this;
        let arg = arguments;
        let later = function () {
            timeID = null;
            if (!immediate) {
                func.apply(context, args)
            }
        }
        let callNow = immediate && !timeID;
        clearTimeout(timeID);
        timeID = setTimeout(later, wait)
        if (callNow) {
            func.apply(context, arg)
        }
    }
}

function throttle(func, wait = 500) {
    let timeID;
    let startTime = 0;
    return function (...args) {
        let context = this;
        let currentTime = +new Date();
        if (currentTime - startTime > wait) {
            func.apply(context, args)
            startTime = currentTime
        }
    }
}
```

## 仿写Promise

```js
class Promise {
    constructor(executor) {
        this.state = PENDING
        this.value = undefined
        this.reason = undefined
        this.onResolbedCallbacks = []     // 保存异步成功回调
        this.onRejectedCallbacks = []     // 保存异步失败回调
        
        const resolve = value => {
            if(this.state === PENDING) {
                this.state = FULFILLED
                this.value = value
                this.resolvedCallbacks.forEach(fn => fn())
            }
        }
        const reject = reson => {
            if(this.state === PENDING) {
                this.state = REJECTED
                this.reason = value
                this.rejectedCallbacks.forEach(fn => fn())
            }
        }

        // 执行器 (executor) 接收两个参数，分别是 resolve, reject
        try {
            executor(resolve, reject)
        } catch (error) {
            reject(error)
        }
    }
    
    then(onFulfilled, onRejected) {
        const promise2 = new Promise((resolve, reject) => {
            if(this.state === FULFILLED) {
                try {
                    resolve(onFulfilled(this.value))
                }catch(error) {
                    reject(error)
                }
            }
            if(this.state === REJECTED) {
                try {
                    resolve(onRejected(this.reason))
                }catch (error) {
                    reject(error)
                }
            }
            // 当 Promise 状态为等待状态 (pending) 时，将 onFulfilled 和 onRejected 存入对应的回调队列
            if(this.state === PENDING) {
               try {
                   this.resolvedCallbacks.push(() => {
                       onFulfilled(this.value)
                   })
               }catch(error) {
                   reject(e)
               }

               try {
                    this.rejectedCallbacks.push(() => {
                        onRejected(this.reason)
                    })
                } catch (error) {
                    reject(error)
                }
            }
        })
        return promise2
    }
    catch(cb) {
        return this.then(null, cb)
    }
}

```

## 仿写柯里化
```js
function curryArg (...args) {
      let sum = args.reduce((target, next) => target + next, 0)
      function next (...sArgs) {
        sum = sArgs.reduce((target, next) => target + next, sum)
        return next
      }
      next.toString = function () {
        return sum
      }
      return next
    }
```

## 仿写数据响应式原理
```js
// defineProperty方案
function Observe(obj) {
    if(typeof obj !== 'object' || obj === null) {
        return
    }
    Object.keys(obj).forEach(key => {
        defineReactive(obj, key, obj[key])
    })
}
function defineReactive(target,key,val) {
    Observe(val)
    Object.defineProperty(target,key,{
        enumerable: true,   // 可枚举
        configurable: true, // 可删除
        get() {
            return val
        },
        set(newVal) {
            val = newVal
        }
    })
}

// proxy方案
function Observe(obj) {
    if(typeof obj !== 'object' || obj === null) {
        return
    }
    const handle = {
        get(target,key) {
            const value = target[key]
            if (typeof value === 'object' && value !== null) {
                return new Proxy(value, handle )
            }
            return Reflect.get(target, key)
        },
        set(target,key,value) {
            return Reflect.set(target, key, value)
        }
    }
    return new Proxy(obj, handle)
}

const obj = {
    name: 'AAA',
    age: 23,
    job: {
        name: 'FE',
        salary: 1000
    }
}
const proxyObj = observe(obj)
const name = proxyObj.name
proxyObj.name = 'BBB'
const jobName = proxyObj.job.name
proxyObj.job.name = 'fe'

```

## 仿写发布订阅模式
```js
class Subject {
    constructor() {
        this.listeners = Object.create(null)
    }

    // 注册事件
    $on(event, listener) {
        if (!event || !listener) {
            return
        }
        if (this.listeners[event]) {
            this.listeners[event].push(listener)
        } else {
            this.listeners[event] = [listener]
        }
    }

    // 发布事件
    $emit(event, ...args) {
        if (!this.hasBind(event)) {
            return console.log(`${event} 没有绑定`)
        }
        this.listeners[event].forEach(listener => listener.call(this, ...args))
    }

    // 取消订阅
    $off(event, listener) {
        if (!this.hasBind(event)) {
            return console.log(`${event} 不存在`)
        }
        if (!listener) {
            delete this.listeners[event]
            return
        }
        this.listeners[event] = this.listeners[event].filter(item => item !== listener)
    }

    // 注册一次
    $once(event, listener) {
        let self = this

        function one() {
            listener.apply(this, arguments)
            self.$off(event)
        }
        this.$on(event, one)
    }

    hasBind(event) {
        return this.listeners[event] && this.listeners[event].length
    }
}

let event = new Subject()
event.$on('click',() => {console.log('执行click_1')})
event.$on('click',() => {console.log('执行click_2')})
event.$emit('click') // 执行click_1  执行click_2
event.$off('click')
event.$once('click',(cb) => {console.log('执行once:', cb)})
event.$emit('click',100)   //  执行once: 100
```
