# 基础知识

## 原始类型

::: tip javascript原始类型有6中,原始类型既只保存原始值，没有函数可以调用
:::

## 六种原始类型

* string
* number
* boolean
* null
* undefined
* symbol

::: warning 为什么说原始类型没有函数可以调用,但是`'1'.toString()`又可以在浏览器中正确执行?

因为`'1'.toString()`中字符串`'1'`在此时会被封装成对应字符串对象，相当于`new String('1').toString()`,因为`new String('1')`
实例化一个对象，而这个对象上是有`toString()`方法的
:::

## null到底是什么类型

* `null`不是一个空引用, 而是一个原始值; 它只是期望此处将引用一个对象, 注意是"期望".
* `typeof null`结果是`object`, 这是个历史遗留bug.
* 在ECMA6中, 曾经有提案为历史平反, 将`type null`的值纠正为`null`, 但最后提案被拒了.
* 理由是历史遗留代码太多, 不想得罪人, 不如继续将错就错当和事老

## 对象类型

::: tip 在javascript中, 除了原始类型，其他的都是对象类型，对象类型储存的是地址，而原始类型储存的是值.
:::

```js
let a = []
let b = a
a.push(1)
console.log(b) // 输出:1
```

以上代码中,创建一个对象类型a(数组),将a的栈储存地址赋值给了变量b，此时修改a的值，打印出b的值也同步发生了改变,因为他们在内存中使用的同一个地址，改变其中任意变量的值，都会影响其他变量的值

## 对象当做函数参数

```js
function Person(person) {
    person.age = 24
    person = {
        name: '韩梅梅',
        age: 18
    }
    return person
}

let lilei = {
    name: '李雷',
    age: 18
}
let user = new Person(lilei)
console.log(lilei.age) //输出: 24
console.log(user.age)  //输出: 18
```

**代码分析**

1. 在`Person`函数中，`person`传递的是对象`lilei`的指针(指向地址)
2. 在`Person`函数内部，改变`person`的属性值，会同步反应到对象`lilei`上,此时`lilei.age`属性发生改变，既值为24
3. 在`Person`函数内部，将`person`重新分配一个新的内存地址，此时该`person`和形参`person`没有任何关联了，并返回这个最新`person`对象

## typeof 和 instanceof

## typeof

* 对于基本类型，除 `null` 以外，均可以返回正确的结果; 对于 `null` 则返回 object 类型
* 对于引用类型，除 `function` 以外，一律返回 `object` 类型; 对于 `function` 返回 `function` 类型

```js
typeof 10010;           // 输出: number
typeof 'lilei';         // 输出: string
typeof true;            // 输出: boolean
typeof undefined;       // 输出: undefined
typeof Symbol();        // 输出: symbol
typeof {};              // 输出: object
typeof new Array();     // 输出: object

// 如果对象是函数类型 -> function
typeof new Function();  // 输出: function
```

## instanceof

* `instanceof` 是用来判断 `A` 是否为 `B` 的实例，表达式为：`A instanceof B`，如果 A 是 B 的实例，则返回 `true`,否则返回 `false`。

```js
function _instanceof(A, B) {
    let _A = A.__proto__
    let _B = B.prototype
    // _A的内部属性__proto__指向_B的原型对象
    if (_A === _B) {
        return true
    }
    return false
}

function Person() {
}

function Student() {
}

let p1 = new Person()

_instanceof(p1, Person)  // 输出：true
_instanceof(p1, Student) // 输出：false

    // ----分割线----
    ([]) instanceof Array; //true
({}) instanceof Object;//true
new Date() instanceof Date;//true
```

::: tip instanceof 只能用来判断两个对象是否属于实例关系， 而不能判断一个对象实例具体属于哪种类型
:::

## == 和 ===

::: tip
`===` 严格相等:左右两边不仅值要相等，类型也要相等，例如`'1'===1`的结果是`false`，因为一边是`string`，另一边是`number`。

`==`  不严格相等:
:::

* 两边的类型是否相同，相同的话就比较值的大小，例如`1==2`，返回`false`
* 类型不相同会进行类型转换
* 判断的是否是`null`和`undefined`，是的话就返回`true`
* 判断的类型是否是`String`和`Number`，是的话，把`String`类型转换成`Number`，再进行比较
* 判断其中一方是否是`Boolean`，是的话就把`Boolean`转换成`Number`，再进行比较
* 如果其中一方为`Object`，且另一方为`String`、`Number`或者`Symbol`，会将`Object`转换成原始类型后，再进行比较

## 对象转原始类型

对象转原始类型，会调用内置的[ToPrimitive]函数，对于该函数而言，其逻辑如下：

1. 是否已经是原始类型，是则直接返回
2. 调用`valueOf()`，如果转换为原始类型，则返回
3. 调用`toString()`，如果转换为原始类型，则返回
4. 也可以重写`Symbol.toPrimitive()`方法，优先级别最高
5. 如果都没有返回原始类型，会报错

```js
let obj = {
    value: 0,
    valueOf() {
        return 1;
    },
    toString() {
        return '2'
    },
    [Symbol.toPrimitive]() {
        return 3
    }
}
console.log(obj + 1); // 输出:4
```

```js
// 面试题：如何使 a==1 && a==2 && a==3 为 'true'
let a = {
    value: 0,
    valueOf() {
        this.value++;
        return this.value
    }
}
console.log(a == 1 && a == 2 && a == 3) // 输出:true
```

**代码分析**：

1. 重写对象`a`的`valueOf()`方法，使`value`属性每次调用时自增
2. 当判断`a==1`时，第一次调用`valueOf()`方法，此时`value`等于1，判断`1==1`
3. 判断`a==2`时，第二次调用`valueOf()`方法，此时`value`等于2，判断`2==2`
4. 判断`a==3`时，第三次调用`valueOf()`方法，此时`value`等于3，判断`3==3`
5. `true && true && true`, 所以打印`true`

## new操作中发生了什么

* 创建一个空对象
* 将构造函数的作用域赋给新对象（因此this就指向了这个新对象）
* 执行构造函数中的代码(为这个新对象添加属性)
* 最后返回 this 指向的新对象，也就是实例(如果没有手动返回其他的对象)

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
