# 函数

## 函数的定义

可以指定参数的类型和返回值的类型

```ts
function hello(name: string): void {
    console.log("hello", name);
}
```

## 函数表达式

```ts
type sum = (x: number, y: number) => number;

let sumNumber: sum = function (x, y) {
    return x + y;
}
```

## 可选参数

在TS中函数的形参和实参必须一样，不一样就要配置可选参数,而且必须是<b>最后一个参数</b>

```ts
function print(name: string, age?: number): void {
    console.log(name, age)
}
```

## 默认参数

```ts
function request(url: string, method: string = 'GET'): Promise<any> {
    return new Promise.resolve({})
}
```

## 剩余参数

```ts
function sum(...numbers: number[]): number {
    return numbers.reduce((prev, next) => prev + next, 0)
}
sum([1,2,3])
```

## 函数重载

函数重载或方法重载是使用相同名称和不同参数数量或类型创建多个方法的一种能力。 在 TypeScript 中，表现为给同一个函数提供多个函数类型定义

```ts
let obj: any = {}

function attr(value: string): void
function attr(value: number): void
function attr(value: any): void {
    if (typeof value === "string") {
        obj.name = value
    } else {
        obj.age = value
    }
}

attr('hello')
attr(18)
```









