# Props

假设我们使用 `type` 来定义 `Props`，为了提高可维护性和代码可读性，在日常的开发过程中我们可以添加清晰的注释。

```tsx
type OtherProps = {
    /** 姓名 */
    name: string,
    /** 职业 */
    professional?: string,
    /** 行为 */
    onClick: () => void
}

// type Props
// @param name - name
// @param professional? - professional
// ...
const App: React.FC<OtherProps> = ({name, professional = '法外狂徒',}) => (
    <button onClick={onClick}>Click me</button>
)
```

## 常用Props ts类型

```ts
type AppProps = {
    message: string;
    count: number;
    disabled: boolean;
    name: string[];
    status: 'success' | 'waiting';
    obj: object; // 不推荐使用，临时作为占位符很有用
    obj2: {}; // 和object一样
    obj3: {   // 推荐,列出所有对象属性
        id: string;
        title: string
    },
    objectArray: {
        id: string;
        title: string
    }[];
    dict: {
        [propsName: string]: string
    },
    dict2: Record<string, TYPEMAPS>; // 等同于dict
    onSomething: Function; // 任意完全不会调用的函数
    onClick: () => void; // 没有参数&返回值的函数
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void // 携带点击事件的函数
    onChange: (id: number) => void;
    options?: string; // 可选类型
}
```

## 常用React属性类型

```ts
export declare interface AppBetterProps {
    children: React.ReactNode; // 推荐使用，支持所有类型 Great
    functionChildren: (name: string) => React.ReactNode;
    style?: React.CSSProperties; // 传递css对象
    onChange?: React.FormEventHandle<HTMLInputElement>
}
```

## Form和Events属性类型

#### `change` 事件，有两个定义参数类型的方法

```tsx
import * as React from 'react'

// 第一种:使用推断的方法签名
type changeProps = (event: React.FormEvent<HTMLInputElement>) => void
const App: React.FC = () => {
    const [state, setState] = React.useState('')
    const onChange: changeProps = event => {
        setState(event.currentTarget.value)
    }
    return <input type="text" value={state} onChange={onChange}/>
}

// 第二种:强制使用 @types/react 提供的委托类型
const App: React.FC = () => {
    const [state, setState] = React.useState('')
    const onChange: React.ChangeEventHandler<HTMLInputElement> = event => {
        setState(event.currentTarget.value)
    }
    return <input type="text" value={state} onChange={onChange}/>
}
```

## Operators

常用的操作符，常用于类型判断

* typeof and instanceof: 用于类型区分
* keyof: 获取object的key值
* T[P]: 属性查找
* "[K in P]": 映射类型
* +，-，readonly, ?  : 加法、减法、只读和可选修饰符
* x ? Y : Z: 用于泛型类型、类型别名、函数参数类型的条件类型
* !: 可空类型的空断言
* as: 类型断言
* is: 函数返回类型的类型保护

## 事件处理

我们在进行事件注册时经常会在事件处理函数中使用 `event` 事件对象，例如当使用鼠标事件时我们通过 `clientX`、`clientY` 去获取指针的坐标。

如果直接把 `event` 设置为 `any` 类型，但是这样就失去了我们对代码进行静态检查的意义。

```tsx
function handleEvent(event: any) {
    console.log(event.clientWidth)
}
```

假设我们注册一个 `Touch` 事件，然后错误的通过事件处理函数中的 `event` 对象去获取其 `clientY` 属性的值，在这里我们已经将 `event` 设置为 `any` 类型； 导致 `TypeScript`
在编译时并不会提示我们错误， 当我们通过 `event.clientY` 访问时就有问题了，因为 `Touch` 事件的 `event` 对象并没有 `clientY` 这个属性。

幸运的是 `React` 的声明文件提供了 `Event` 对象的类型声明

```ts
ClipboardEvent < T = Element > 剪切板事件对象

DragEvent < T = Element > 拖拽事件对象

ChangeEvent < T = Element > Change事件对象

KeyboardEvent < T = Element > 键盘事件对象

MouseEvent < T = Element > 鼠标事件对象

TouchEvent < T = Element > 触摸事件对象

WheelEvent < T = Element > 滚轮时间对象

AnimationEvent < T = Element > 动画事件对象

TransitionEvent < T = Element > 过渡事件对象
```

## Promise 类型

在做异步操作时我们经常使用 `async` 函数，函数调用时会 `return` 一个 `Promise` 对象，可以使用 `then` 方法添加回调函数。`Promise<T>` 是一个泛型类型，`T `泛型变量用于确定 `then`
方法时接收的第一个回调函数的参数类型。

```tsx
type RequestProps<T> = {
    message: string;
    data: T;
    status: number
}

async function getResponse(): Promise<RequestProps<number[]>> {
    return {
        message: '操作成功',
        data: [1, 2, 3],
        status: 200
    }
}

getResponse().then(response => {
    console.log(response.data)
})

```
* 首先声明 `RequestProps` 的泛型接口用于定义 `response` 的类型，通过 `T` 泛型变量来确定 `data` 的类型
* 然后声明了一个 异步函数 `getResponse` 并且将函数返回值的类型定义为`Promise<RequestProps<number[]>>` 
* 最后调用 `getResponse` 方法会返回一个 `promise` 类型，通过 `then` 调用
* 此时 `then` 方法接收的第一个回调函数的参数 `response` 的类型为，`{ message: string, data: number[], status: number}` 

## 泛型参数的组件
```tsx
type Props<T> = {
    name:T,
    rename:T
}

const ShowName: <T>(props: Props<T>) => React.React.Element = ({name,rename}) => {
    return (
        <div>名称:{name},姓名:{rename}</div>
    )
}

const Table = () => <ShowName<string> name={'张三'} />
```
