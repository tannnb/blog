# Hooks

大部分情况下，TS 会自动推导 `state` 的类型

```ts
// `flag`会推导为boolean类型，setFlag接收boolean类型参数
const [flag, setFlag] = useState(false)

// object会自动推导为类型: {name: string}
const [object] = useState({name: '张三'})

// array会自动推导为类型: string[]
const [array] = React.useState(['10086', '10010'])
```

## useState
#### 使用推导类型作为接口/类型

```tsx
export default function App() {
    const [user, setUser] = useState({name: '张三', age: 18, professional: '法外狂徒'})

    const computedInfo = React.useCallback((obj: typeof user) => {
        return `姓名:${obj.name},age:${obj.age},职业:${obj.professional}`
    },[])
    
    return <div>computedInfo(user)</div>
}
```
:::details 状态初始值为空时（null），需要显示地声明类型
```ts
interface UserProps {
    name:string;
    age:number;
    professional:string
}
export default function App() {
    const [user, setUser] = useState<UserProps | null>(null)
    
    useEffetc(() => {
        setUser({name: '张三', age: 18, professional: '法外狂徒'})
    },[])
    
    const computedInfo = React.useCallback((obj: typeof user) => {
        return `姓名:${obj.name},age:${obj.age},职业:${obj.professional}`
    },[])

    return <div>computedInfo(user)</div>
}
```
:::

## useRef
```ts
const inputRef1 = React.useRef<HTMLInputElement>(null)
const inputRef2 = React.useRef<HTMLInputElement | null>(null)
```
这两种使用方式区别:
* 第一种: `inputRef1.current` 是只读的`（read-only）`,并且可以传递给内置的`ref`属性，绑定`DOM`元素
* 第二种: `inputRef2.current` 是可变的（类似于声明类的成员变量）
```ts
const countRef = React.useRef(0)
React.useEffect(() => {
    countRef.current += 1
},[])
```
这两种方式在使用时，都需要对类型进行检查
```ts
function handleClick () {
    inputRef1.current?.focus()
    inputRef2.current?.focus() 
}
```
在某种情况下，可以省去类型检查，通过添加 `! 非空断言`(不推荐)
```tsx
function App() {
    const inputRef = React.useRef<HTMLInputElement>(null!)
    
    React.useEffect(() => {
        // TODO 不需要做类型检查，但是需要保证inputRef.current.focus一定存在
    },[])
    
    return <input ref={inputRef} />
}
```
## useEffect
`useEffect` 需要注意回调函数的返回值只能是`函数`或者 `undefined`
```ts
function App() {
    React.useEffect(() => {
        // 默认返回undefined
    },[])
    React.useEffect(() => {
        // TODO
       return () => {
           // 手动返回函数 做一些清理操作
       }
    },[])
}
```
## useMemo/useCallback
`useMemo` 和 `useCallback` 都可以直接从它们返回的值中推断出它们的类型

`useCallback` 的参数必须指定类型，否则TS不会报错，默认指定为 `any`

```ts
const count = 10
const multiplier = 0.5

// 自动推断返回为number类型
const double = React.useMemo(() => count * 2,[count])

// 自动推断 (value: any) => number
const multiply = React.useCallback((value:number) => value * multiplier, [multiplier])
```
支持传入泛型，`useMemo`的泛型指定了返回值类型，`useCallback`的泛型指定了参数类型
```ts
// 显式的指定返回值类型，返回值不一致会编译报错
// error: 类型“() => number”的参数不能赋给类型“() => string”的参数
const result = React.useMemo<string>(() => 2,[])

const handleChange = React.useCallback<React.ChangeEventHandle<HTMLInputElement>>(even => {
    // even.target.value
})

```

## 自定义Hooks
自定义`Hook`的返回值如果是数组类型，TS会自动推导为`Union`类型，而我们实际需要的是数组里里每一项的具体类型，需要手动添加`const`断言进行处理
```ts
function useLoading() {
    const [loading,setLoading] = useState<boolean>(false)
    const load = (loadPromise:Promise<any>) => {
        setLoading(true)
        return loadPromise.then(() => setLoading(false))
    }
    
    // 自动推导的类型：(boolean | typeof loadPromise)[]
    // (boolean | ((loadPromise: Promise<any>) => Promise<void>))[]
    return [loading, load]
    
    // 实际需要的类型： [boolean, typeof loadPromise]
    // [boolean, (loadPromise: Promise<any>) => Promise<void>]
    return [loading, load] as const
}
```
如果使用 `const` 断言遇到问题，也可以直接定义返回类型
```ts
const loadProps = [ boolean, (loadPromise:Promise<any>) => Promise<any> ]
function useLoading():loadProps {
    // ...
    return [loading, load]
}
```
:::details 如果有大量的自定义 Hook 需要处理，有一个方便的工具方法可以处理 tuple 返回值
```ts
function tuplify<T extends any[]>(...elements: T) {
  return elements
}
function useLoading():loadProps {
    // ...
    return tuplify(loading, load)
}
```
:::

## defaultProps
```tsx
const defaultProps = { age:20 }
type UserProps = { name:string }

// 使用类型定义
type GreetProps = UserProps & typeof defaultProps
const greet = (props:GreetProps) => <div></div>
greet.defaultProps = defaultProps
/*
const greet: {
    (props: GreetProps): JSX.Element;
    defaultProps: {
        age: number;
    };
}*/


// 使用
const App = (props:React.ComponentProps<typeof greet>) => {
    return <div></div>
}
```



