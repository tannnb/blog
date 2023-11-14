# typeof 与 instanceof 区别


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
instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上
```js

let Person = function() {}
let person = new Person()
person instanceof Person // true

let str = new String('李雷')
str instanceof String // true

let name = '李雷'
name instanceof String // false
```
* `instanceof` 是用来判断 `A` 是否为 `B` 的实例，表达式为：`A instanceof B`，如果 A 是 B 的实例，则返回 `true`,否则返回 `false`。


## 实现原理
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

::: tip
instanceof 只能用来判断两个对象是否属于实例关系， 而不能判断一个对象实例具体属于哪种类型
:::

