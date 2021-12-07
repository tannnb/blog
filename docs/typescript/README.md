---
sidebar: auto
---

## 概念

`TypeScript`是`JavaScript`的一个超集，主要提供了类型系统和对ES6的支持。
:::tip 优势

* 能在开发过程中更快的发现潜在问题。
* 对编辑器更友好的代码提示功能。
* 代码语义更清晰易懂
  :::

## 安装和编译

#### Node.js

你首先需要在官网[Node.js](https://nodejs.org/zh-cn/) (opens new window)按照你电脑的操作系统下载对应的Node版本进行安装。

#### Typescript

```shell 
$ npm install -g typescript  // 全局安装
# yarn global add typescript

# 安装完毕后，查看版本号
$ tsc -v
```

创建一个空文件夹，并且生成初始化文件:`tsc --init`生成`tsconfig.js`配置文件，并写下基础ts代码,进行编译

```ts
const price: number = 100
console.log(price)
```

执行`tsc index.ts`,可以看到会生成一个`index.js`同名文件,并且命令行输出了所打印信息
:::tip 不需要编译成js的前提下，可以直接执行 ts 代码吗？ 需要使用`ts-node`库来提供支持:

* npm install ts-node

* ts-node index.ts

此时命令行输出了所打印信息
:::
::: warning 每次改动都要手动去执行编译，这样很麻烦，有没有可以实时监听并编译？ 执行watch即可每次文件变动ts会自动编译成js： tsc --watch index.ts
:::

## 原始数据类型

JavaScript分为<b>原始数据类型</b>和<b>对象类型</b>，原始数据类型包括：`number`、`string`、`boolean`、`null`、`undefined`和`symbol`

```ts
const price: number = 100;

const type: string = 'success';

const isCheck: boolean = true;

const isNull: null = null

const isUndefined: undefined = undefined
```

## Enum 类型

枚举可以很好的描述一些特定业务场景,比如错误码，类型码等等

```ts
// 1.普通枚举初始值默认为 0 其余的成员会会按顺序自动增长(可以理解为数组下标)
enum Colors {
    RED,
    YELLOW,
    BLUE
}

const color: Colors = Colors.YELLOW
consol.log(color) // 1


// 2.设置初始值
enum Colors {
    RED = 10,
    YELLOW,
    BLUE
}

const color: Colors = Colors.YELLOW
consol.log(color) // 11


// 3. 字符串枚举(注:每个成员都要进行申明)
enum Colors {
    RED = '红',
    YELLOW = '黄',
    BLUE = '蓝'
}

const color: Colors = Colors.YELLOW
consol.log(color) // 黄


// 4.常量枚举 它是使用 const 关键字修饰的枚举，常量枚举与普通枚举的区别是，整个枚举会在编译阶段被删除
enum Colors {
    RED,
    YELLOW,
    BLUE
}

const color: Colors[] = [Colors.RED, Colors.YELLOW, Colors.BLUE]
// 编译之后如下类型: var color = [0 /* RED */, 1 /* PINK */, 2 /* BLUE */];
```

## 数组类型(array)

数组中的类型定义也有一定的规则：类型+方括号表示

```ts
// 常见写法
const price_1: number[] = [1, 2, 3] // 只允许储存number类型
const price_2: string[] = ['1', '2', '3'] // 只允许储存string类型

// 泛型的写法:
const price_1: Array<number> = [1, 2, 3]
const price_2: Array<string> = ['1', '2', '3']

// 数组中也可以使用联合类型：
const price: (number | string)[] = [1, '2', '3']
```

数组中不仅可以存储基础数据类型，还可以存储对象类型，如果需要存储对象类型，可以用如下方式进行定义:

```ts
const objectArr: ({ id: number, name: string })[] = [
    {id: 1, name: '张三'}
]

// 为了方便编写代码，可以使用类型别名来管理上方类型
type user = { id: number, name: string }
const objectArr: user[] = [{id: 1, name: '张三'}]

```

## 元组类型(tuple)

在`ts`的基础类型中，元组(Tuple)表示一个<b>已知数量和类型的数组</b> 其实可以理解为他是一种特殊的数组

```ts
const numberArr: [number, number] = [1, 100]
const stringOrNumber: [string, number] = ['1', 100]

console.log(numberArr[1])  // 100
console.log(numberArr[2])  // 访问元组中未知位置的索引时，会报错。
```

## 任意类型(any)

任何类型都可以被归为`any`类型，这让`any`类型成为了类型系统的 <b>顶级类型 (也被称作 全局超级类型)</b> ts允许我们对`any`类型的值执行任何操作,而无需事先执行任何形式的检查
:::warning 一般使用场景 第三方库没有提供类型文件时可以使用 any 类型转换遇到困难或者数据结构太复杂难以定义 不过不要太依赖 any 否则就失去了 ts 的意义了
:::

```ts
// 以下代码是正确是，可以编译成功
let isNumber: any = 123
isNumber = '456'

// 注: 如果我们定义了一个变量，没有指定其类型，也没有初始化，那么它默认为any类型
let isAny
isAny = 123
isAny = '456'
```

## null和 undefined

`void`和`null`与`undefined`是有一定区别的，在ts中，`null和undefined是所有类型的子类型`，也就是说可以把`undefined`或`null`赋值给number等类型的变量.

```ts
// 注：此时编译不成功 需将tsconfig中strictNullChecks=false才满足上述所说'null和undefined是所有类型的子类型'
let number_1: number = undefined
let number_2: number = null
```

## unknown 类型

`unknown` 和 `any` 的主要区别是 `unknown` 类型会更加严格 在对 `unknown` 类型的值执行大多数操作之前 我们必须进行某种形式的检查 而在对 `any` 类型的值执行操作之前 我们不必进行任何检查

```ts
let value: unknown;

value = true;
value = 42;
value = "Hello World";
value = [];
value = {};

let value1: unknown = value // ok
let value2: any = value // ok
let value3: boolean = value; // 编译错误
```

## void 类型

void 表示没有任何类型 当一个函数没有返回值时 TS 会认为它的返回值是 void 类型

```ts
function hello(name: string): void {

}
```

## never 类型

`never` 一般表示用户无法达到的类型 例如never 类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型

```ts
function neverReach(): never {
    throw new Error("throw error");
}
```

:::warning never 和 void 的区别

* void 可以被赋值为 null 和 undefined 的类型。
* never 则是一个不包含值的类型。
* 拥有 void 返回值类型的函数能正常运行。拥有 never 返回值类型的函数无法正常返回，无法终止，或会抛出异常。
  :::

## 类型注解和类型推断

上诉实例中，我们都为每一个变量提供了一个确定的类型，这种做法就叫做`类型注解`。

而有些时候，当我们没有为其提供一个确定的类型，但提供了一个确定的值，那么TypeScript会根据我们给定的值的类型自动推断出这个变量的类型，这就叫`类型推断`。

```ts
let isAny; // 推断为any
let isNumber = 123; // 推断为number类型
let isString = '123'; // 推断为string类型


// 省略函数的返回值类型，因为typescript会基于x和y全部为number类型，从而推断出函数返回值为number类型
function add({x: number, y: number}) {
    return x + y
}
```

## 联合类型

联合类型（Union Types）表示取值可以为多种类型中的一种 未赋值时联合类型上只能访问两个类型共有的属性和方法

```ts
let value: number | number
value = 123
value = '123'

valur = true // 编译失败
```

当我们使用联合类型的时候，因为TypeScript不确定到底是哪一个类型，所以我们只能访问此联合类型的所有类型公用的属性和方法。

```ts
// 会编译报错
function getLength(value: string | number): number {
    return value.length
}

// 以下代码不会编译报错
function valueToStr(value: string | number): string {
    return value.toString()
}
```

当联合类型被赋值后，TypeScript会根据类型推断来确定变量的类型，一旦确定后，则此变量只能使用这种类型的属性和方法

```ts
let tsValue: string | number
tsValue = '123'
console.log(tsValue.length) // 编译正确
tsValue = 123
console.log(tsValue.length) // 编译报错
```

## 类型断言

有时候你会遇到这样的情况，你会比 TypeScript 更了解某个值的详细信息。通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型。

其实就是你需要手动告诉 ts 就按照你断言的那个类型通过编译

```ts
// 尖括号 语法
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;

// as 语法
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;

// 案例
class Student {
    name: string = '学生'

    study() {
        console.log(this.name)
    }
}

class Teacher {
    name: string = '教师'

    education() {
        console.log(this.name)
    }
}

function print(person: Student | Teacher) {
    if (person instanceof Student) {
        // 强制断言为Student类型,调用Student类上的方法
        (person as Student).study()
    } else {
        (person as Teacher).education()
    }
}

print(new Student()) // 学生
print(new Teacher()) // 教师
```

`非空断言` 在上下文中当类型检查器无法断定类型时 一个新的后缀表达式操作符 ! 可以用于断言操作对象是非 `null` 和非 `undefined` 类型

```ts
let flag: null | undefined | string;
flag!.toString();
flag.toString(); // 编译失败
```

## 类型别名

类型别名用`type`关键字来给一个类型起一个新的名字，类型别名常用于`联合类型`。

```ts
type commonType = number | string
const value1: commonType = 123

type typeObj = {
    age: number;
    name: string;
}
const obj: typeObj = {
    age: 123,
    name: 'why'
}
```

## 交叉类型

交叉类型是将多个类型合并为一个类型。通过 & 运算符可以将现有的多种类型叠加到一起成为一种类型，它包含了所需的所有类型的特性

```ts
type numberProps = { x: number };
type objetcProps = numberProps & { y: string };

let flag3: objetcProps = {
    x: 1,
    y: "1",
}
```

## 类型保护(typeof)

类型保护就是一些表达式，他们在编译的时候就能通过类型信息确保某个作用域内变量的类型 其主要思想是尝试检测属性、方法或原型，以确定如何处理值

```ts
function double(value: string | number | boolean) {
    if (typeof value === "string") {
        return value + value;
    } else {
        if (typeof value === "number") {
            return value * 2;
        } else {
            return !value;
        }
    }
}
```

### in 关键字

```ts
interface person {
    name: string
}

interface Behavior {
    study: string
}

function getNumber(props: person | Behavior) {
    if ('name' in props) {
        return props.name
    }
    return props.study
}
```

### instanceof 类型保护

```ts
class Animal {
    name!: string
}

class Bird extends Animal {
    fly!: number
}

function getName(props: Animal) {
    if (props instanceof Bird) {
        return props.fly
    } else {
        return props.name
    }
}
```

## 函数的定义

可以指定参数的类型和返回值的类型

```ts
function getNumber(name: string): void {
    // TO DO
}
```

### 函数表达式

```ts
type countProps = (x: number, y: number) => number;

let countNumber: countProps = function (x, y) {
    return x + y
}
```

### 可选参数

在 TS 中函数的形参和实参必须一样，不一样就要配置可选参数,而且<b>必须是最后一个参数</b>

```ts
function print(name: string, age?: number): void {
    // TODO
}
```

### 默认参数

```ts
function print(name: string, age: number = 18): void {
    // TODO
}
```

### 剩余参数
```ts
function print(...numbers: number[]): number {
    return numbers.reduce((prev, next) => prev + next, 0)
}
print(1, 2, 3)
```

### 函数重载
函数重载或方法重载是使用相同名称和不同参数数量或类型创建多个方法的一种能力。 在 TypeScript 中，表现为给同一个函数提供多个函数类型定义
```ts
let obj:any = {}

function attr(value:string):void
function attr(value:number):void
function attr(value:any):void {
    if(typeof value === "string") {
        obj.name = value
    }else {
        obj.age = value
    }
}
attr('hello')
attr(18)
```





