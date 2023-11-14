# interface接口

## 接口的定义
```ts
interface Person {
    readonly id:number 
    name:string
    age?:number
}
// readonly表示只读属性，不可更改  
// age? 表示可选属性
```

## 行为的抽象
接口可以把一些类中共有的`属性和方法`抽象出来,可以用来约束实现此接口的类<b>一个类可以实现多个接口，一个接口也可以被多个类实现</b>

使用`implements`关键字来实现
```ts
interface SpeakInterface {
    speak():void
}
interface EatInterface {
    eat():void
}
// 一个类可以实现多个接口
class Person implements SpeakInterface,EatInterface {
    speak() {}
    eat() {}
}
// Peson需要实现所规定接口，不然编译不通过
```

## 可索引类型
如果我们在定义接口的时候无法预先知道有哪些属性的时候,可以使用`[propsName:string]:any`,`propsName`名字是任意的
```ts
interface Person {
    id:number;
    name:string;
    [propsName:string]:string
}
const zhangsan:Person = {
    id:100,
    name:'张三',
    职业:'刺客'
}

// 接口数组类型
interface LinkArray {
    [index:number]:string
}
const linkArray:LinkArray = ['1','2','3']
```
## 接口的继承
们除了类可以继承，接口也可以继承,同样的使用`extends`关键字
```ts
interface Speakable {
    speak():void
}
interface SpeakChimnese extends Speakable {
    speakChinese():void
}
class Person implements SpeakChimnese {
    speak() {}
    speakChinese() {}
}
```
## 函数类型接口
使用接口来定义函数类型
```ts
interface discount {
    (price:number):number
}
let count:discount = function (price:number):number {
    return  price * 0.5
}

let count2: (price:number) => number = (price:number) => {
    return price * 0.5
}
```
## 静态约束和动态约束
```ts
interface ClockInterface {
    currentTinme:number
    alert():void
}
interface ClockStatic {
    new (h:number,m:number):void // 这个函数可以被new调用
    time:number
}
// ClockStatic 静态类型 约束构造函数和静态属性和方法
// ClockInterface 实例类型 
const Closk:ClockStatic = class Closk implements ClockInterface {
    // 被ClockStatic约束 构造函数必须要传入h,m  必须要定义time静态属性
    static time = 10
    constructor(h:number,m:number) { 
    }
    
    currentTinme: number
    alert(): void {
        throw new Error("Method not implemented.")
    }
}
```
:::details 接口被重复定义
```ts
interface Point { x:number }
interface Point { y:number }
const point:Point = {x:1,y:1}
```
:::
:::details 扩展接口

扩展 接口可以扩展类型别名，同理，类型别名也可以扩展接口

接口的扩展就是继承，通过 `extends` 来实现。类型别名的扩展就是交叉类型，通过 `&` 来实现
```ts
// 接口扩展接口
interface PointX { x:number }
interface Point extends PointX {
    y:number
}

// 类型别名扩展类型别名
type PointX = {x:number}
type Point = PointX & { y:number }


// 接口扩展类型别名
type PointX = {x:number}
interface Point extends PointX { y:number }

// 类型别名扩展接口
interface PointX { x: number }
type Point = PointX & { y: number }


let point:Point = {x:1,y:1}
```
:::
