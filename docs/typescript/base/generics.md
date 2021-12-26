# 泛型

## 什么是泛型

泛型 `generics` 是指在定义函数、接口和类的时候，不预先指定其具体类型，而在使用的时候再去指定的一种特性。

## 泛型函数

我们有如下一个函数，其中参数`a`和`b`接受的类型必须为相同的类型

```ts
// 没有了解到泛型之前，我们可以用联合类型来定义
function add(x: number | string, y: number | string) {
    return `${a}${b}`
}
```

在以上的例子中，仅仅只是规定了 a 和 b 参数必须是`number`类型或者`string`类型，但并没有办法来限制 a 和 b 必须是同一个类型。这个时候我们可以使用泛型来表示

```ts
function add<T>(x: T, y: T): string {
    return `${x}${y}`
}

add(1, 2)     // 12
add('1', '2') // 12
add(1, '2')   // 编译报错

// 注：我们在调用add()函数并进行传参的时候，TS会自动帮我们推断参数的类型，以上三行代码也可以像如下方式进行改写
add<number>(1, 2)
add<string>('1', '2')
add<number>(1, '2')   // 编译报错
```

:::details 泛型可以是多个

```ts
function add<T, P>(x: T, y: P): string {
    return `${x}${y}`
}

add('1', '2') // 12
add(1, '2')   // 12
```

:::

## 多个类型参数

```ts
function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]]
}

swap([1, 'one']) // ['one',1]
```

## 泛型约束

```ts
function initialState<T>(arg: T): T {
    console.log(arg.length)
    return arg
}

initialState(100) // 泛型 T 不一定包含属性 length，所以编译的时候报错
```

这时，我们可以对泛型进行约束，只允许这个函数传入那些包含 length 属性的变量。这就是泛型约束

#### 我们在泛型里面使用`extends`关键字代表的是泛型约束

```ts
interface LengthProps {
    length: number
}

function initialState<T extends LengthProps>(arg: T): T {
    return arg
}

// <T extends LengthProps> 约束传入的参数必须要有length属性才行
```

## 泛型类

泛型同样可以使用在类中

```ts
// 可以给泛型提供一个默认值
class CreateClass<T = number> {
    currentValue: T
    add: (x: T, y: T) => T
}

let createNumber = new CreateClass<number>()
createNumber.currentValue = 10
createNumber.add = (x, y) => x + y

let createString = new CreateClass<string>()
createNumber.currentValue = '10'
createNumber.add = (x, y) => `${x}${y}`
```

## 泛型接口

```ts
interface createArray {
    <T>(length: number, value: T): T[]
}

let createArrayFC: createArray = function (length, value) {
    let result = []
    for (let i = 0; i < length; i++) {
        result[i] = value
    }
    return result
}
createArrayFC(3, 'AAA') // ['AAA','AAA','AAA']
createArrayFC(2, true) // [true, true]
```

```ts
interface CarProps<T> {
    list: T[]
}

let cat: CarProps<{ brand: string, name: string }> = {
    list: [{brand: '大众', name: '辉腾'}]
}
```

### 泛型类型别名

```ts
type Car<T> = { list: T[] } | T[]

let p1:Car<string> = {list:['1','2']}
let p2:Car<number> = [1,2]
```
