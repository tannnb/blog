# this指向解析

## 一、前言
函数的 this 关键字在 JS 中的表现略有不同，此外，在严格模式和非严格模式之间也会有一些差别，在绝大多数情况下，函数的调用方式决定了 this 的值（运行时绑定）

this 关键字是函数运行时自动生成的一个内部对象，只能在函数内部使用，总指向调用它的对象

举个栗子:
```js
function baz() {
    // 当前调用栈是：baz
    // 因此，当前调用位置是全局作用域
    
    console.log( "baz" );
    bar(); // <-- bar的调用位置
}

function bar() {
    // 当前调用栈是：baz --> bar
    // 因此，当前调用位置在baz中
    
    console.log( "bar" );
    foo(); // <-- foo的调用位置
}

function foo() {
    // 当前调用栈是：baz --> bar --> foo
    // 因此，当前调用位置在bar中
    
    console.log( "foo" );
}

baz(); // <-- baz的调用位置
```
注意: `this`在函数执行过程中，`this`一旦被确定了，就不可以再更改
```js
let a = 10;
let obj = { a: 20 }

function fn() {
  this = obj; // 修改this，运行后会报错
  console.log(this.a);
}

fn();
```

## 二、绑定规则
根据不同的使用场合，this有不同的值，主要分为下面几种情况：

* 默认绑定
* 隐式绑定
* new绑定
* 显示绑定

### 默认绑定

```js
// 全局环境中定义person函数，内部使用this关键字
var name = '李雷';
function person() {
    return this.name;
}
console.log(person());  // 李雷
```
上述代码输出`李雷`，原因是调用函数的对象在游览器中为window，因此this指向window，所以输出`李雷`

注意： 严格模式下，不能将全局对象用于默认绑定，this会绑定到undefined，只有函数运行在非严格模式下，默认绑定才能绑定到全局对象


### 隐式绑定
```js
// 函数还可以作为某个对象的方法调用，这时this就指这个上级对象
function print() {
  console.log(this.x);
}

var obj = {};
obj.x = 1;
obj.print = print;

obj.print(); // 1
```

```js
// 该函数中包含多个对象，尽管这个函数是被最外层的对象所调用，this指向的也只是它上一级的对象
var Person = {
    age:18,
    name:{
        callback:function(){
            // this: {callback: ƒ}
            console.log(this.sex); //undefined
        }
    }
}
Person.name.callback();
```
分析: 上述代码，this的上一级对象为name，name内部并没有sex变量的定义，所以输出undefined

```js
var Person = {
    age:10,
    name:{
        sex:'男',
        callback:function(){
            console.log(this.sex); //undefined
            console.log(this); //window
        }
    }
}
let p = Person.name.callback;
p();
```
分析: 此时this指向的是window，this永远指向的是最后调用它的对象，虽然callback是对象name的方法，但是callback赋值给p时候并没有执行，所以最终指向window

### new绑定
```js
// 通过构建函数new关键字生成一个实例对象，此时this指向这个实例对象
function person() {
　this.name = '李雷';
}

var p = new person();
p.name // 李雷
```
分析: 之所以输出为`李雷`，是因为new关键字改变了this的指向

特殊情况
```js
// 1. new过程遇到return一个对象，此时this指向为返回的对象
function Person() {  
    this.name = '李雷';  
    return {};  
}
let p = new Person();  
console.log(p.name); //undefined

// 2. 返回一个简单类型或者null的时候，则this指向实例对象
function Person() {
    this.name = '李雷';
    return 1;
    // return null;  
}
let p = new Person();
console.log(p.name); //李雷
```

### 显示修改
`apply`、`call`、`bind`是函数的一个方法，作用是改变函数的调用对象。它的第一个参数就表示改变后的调用这个函数的对象。因此，这时this指的就是这第一个参数
```js
let name = '李雷';
function print() {
　console.log(this.name);
}

var obj = {};
obj.name = '韩梅梅';
obj.print = print;
obj.print.apply(obj) // 韩梅梅
```

## 三、箭头函数
ES6 的语法中还提供了箭头函语法，让我们在代码书写时就能确定 this 的指向（编译时绑定）

```js
const person = {
  getThis: () => {
    console.log(this);
  }
};

// window 因为 JavaScript 没有块作用域，所以在定义 getThis 的时候，里面的 this 就绑到 window 上去了
person.getThis(); 
const globalThis = person.getThis;
globalThis(); // window 浏览器中的 global 对象
```

```js
// 1. 绑定事件监听
const button = document.getElementById('btn');
button.addEventListener('click', ()=> {
    console.log(this === window) // true
    this.innerHTML = 'clicked button'
})
// 上述可以看到，我们其实是想要this为点击的button，但此时this指向了window


// 2. 在原型上添加方法时候，此时this指向window
Person.prototype.getName = () => {
    console.log(this === window) //true
    return this.name
}
const person = new Person('博尔特');
person.getName()
```


## 四、案例

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
