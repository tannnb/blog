# 类的创建和继承

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
