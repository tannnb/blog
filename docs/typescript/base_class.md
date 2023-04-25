# 类

## 类的定义

在 TypeScript 中，我们可以通过`Class`关键字来定义一个类

```ts
class Person {
    // 注：如果初始属性没赋值就需要加上! (非空断言)
    name!: string;

    constructor(name: string) {
        this.name = name
    }

    getName(): string {
        return this.name
    }
}

let p = new Person('张三')
```

为了图省事我们也可以把属性定义直接写到构造函数的参数里面去(不建议这样写,因为会让代码增加阅读难度)

```ts
class Person {
    constructor(public name: string) {
        this.name = name
    }

...
}
```

## 存取器

在 TypeScript 中，我们可以通过存取器来改变一个类中属性的读取和赋值行为

```ts
class User {
    name!: string;

    constructor(name: string) {
        this.name = name
    }

    get name(): string {
        return this.name
    }

    set name(newName): boolean {
        this.name = newName
        return true
    }
}

let p = User('张三')
p.name = '法外狂徒'
console.log(p.name) // 法外狂徒
```

:::details 原理:使用 Object.defineProperty 在类的原型上面拦截了属性对应的 get 和 set 方法

```ts
var User = /** @class **/ (function () {
    function User(newName) {
        this.name = newName
    }

    Object.defineProperty(User.prototype, 'name', {
        enumerable: false,
        configurable: true,
        get: function () {
            return this.name;
        },
        set: function (newValue) {
            this.name = newValue
            return true
        }
    })
    return User;
})();
```

:::

## readonly 只读属性

`readonly`修饰的变量只能在构造函数中初始化

TS 的类型系统同样也允许将 `interface`、`type`、`class` 上的属性标识为`readonly` (readonly实际上只是在编译阶段进行代码检查)。

```ts
class Animal {
    public readonly name!: string;

    constructor(name: string) {
        this.name = name
    }

    setName(newName): boolean {
        this.name = newName // ts编译不通过,this.name申明了只能可读
        return true
    }
}
```

## 继承

子类继承父类后子类的实例就拥有了父类中的属性和方法，可以增强代码的可复用性

将子类公用的方法抽象出来放在父类中，自己的特殊逻辑放在子类中重写父类的逻辑 `super` 可以调用父类上的方法和属性

在 TypeScript 中，我们可以通过 `extends` 关键字来实现继承

```ts
class Person {
    // 默认为public 可以省略
    public name: string
    public age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    getName(): string {
        return this.name
    }
    setName(name: string): boolean {
        this.name = name
        return true
    }
}

class Student extends Person {
    id: number
    constructor(name: string, age: number, id: number) {
        super(name, age);
        this.id = id
    }
    getId(): number {
        return this.id
    }
}

let p = new Student('张三', 22, 107)
```

## 类中的修饰符
* `public` 表明该数据成员、成员函数是对所有用户开放的，所有用户都可以直接进行调用
* `protected` 只能是class自己使用，以及继承它的类都能访问
* `private` 表示私有，私有的意思就是除了class自己之外，任何人都不可以直接使用

```ts
class Person {
    public name: string
    protected age: number
    private car: string

    constructor(name: string, age: number, car: string) {
        this.name = name
        this.age = age
        this.car = car
    }

    getName(): string {
        return this.name
    }

    setName(name: string): boolean {
        this.name = name
        return true
    }
}

class Child extends Person {
    constructor(name:string,age:number,car:string) {
        super(name,age,car);
    }
    getInfo():string {
        return `${this.name}-${this.age}-${this.car}` // car是私有属性不能被外界访问
    }
}

```
## 静态属性&静态方法
类的`静态属性`和`静态方法`是直接定义在类本身上面的 所以也只能通过<b>直接调用类的方法和属性来访问</b>
```ts
class Person {
    public name:string
    static rename:string = '法外狂徒'
    static getRename():string {
        return this.rename
    }
    constructor(name:string) {
        this.name = name
    }
}
let p = new Person('张三')
Person.rename // 法外狂徒
Person.getRename() // 法外狂徒
```
## 抽象类和抽象方法
#### 抽象类，无法被实例化，只能被继承并且无法创建抽象类的实例，使用 `abstract` 关键字来定义抽象类和抽象方法
子类可以对抽象类进行不同的实现，抽象方法只能出现在抽象类中并且抽象方法不能在抽象类中被具体实现，只能在抽象类的子类中实现（必须要实现）

使用场景：

我们一般用抽象类和抽象方法抽离出事物的共性，以后所有继承的子类必须按照规范去实现自己的具体逻辑，这样可以增加代码的可维护性和复用性
```ts
abstract class Animal {
    name!:string
    abstract speak():void
}
class Cat extends Animal {
    speak() {
        return 'speak...'
    }
}
let animal = new Animation() // Error: 无法直接创建抽象类的实例
let cat = new Cat()
cat.speak()
```
:::warning 重写(override)和重载(overload)的区别
重写是指子类重写继承自父类中的方法；重载是指为同一个函数提供多个类型定义
:::
:::details 重写与重载demo
```ts
class Animal {
    speak(word:string):string {
        return `动物: ${word}`
    }
}
class Cat extends Animal {
    // cat继承至Animal类，并且重写了父类中的speak方法
    speak(word: string): string {
        return `hello：${word}`
    }
}
let cat = new Cat('二哈')

// -----分割线-----

function double(value:number):number;
function double(value:string):string;
function double(value:any):unknown {
    if(typeof value === 'number') {
        return value * 2
    }
    return value
}
double(2)   // 4
double('2') // '2'
```
:::

:::warning 什么是多态
在父类中定义一个方法，在子类中有多个实现，在程序运行的时候，根据不同的对象执行不同的操作，实现运行时的绑定
:::
:::details 多态demo
```ts
abstract class Animal {
    abstract sleep():void
}

class Dog extends Animal {
    sleep() {
        return 'dog sleep'
    }
}
class Cat extends Animal {
    sleep() {
        return 'Cat sleep'
    }
}

let dog = new Dog()
let car = new Cat()

let animals:Animal[] = [dog,car];
animals.forEach(animal => animal.sleep())
```
:::
