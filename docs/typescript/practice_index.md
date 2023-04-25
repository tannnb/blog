# 函数式组件的声明方式

#### 第一种使用 `React.FunctionComponent`，简写：`React.FC` (推荐)

```tsx
import React from 'react'

type AppProps = {
    name: string
}
const App: React.Fc<AppProps> = ({name: string, children}) = (
    <div>{name} - {children} </div>
)
```

使用用`React.FC`声明函数组件和<b>普通声明</b>以及 `PropsWithChildren` 的区别是

* React.FC显式地定义了返回类型，其他方式是隐式推导的
* React.FC对静态属性：`displayName`、`propTypes`、`defaultProps` 提供了类型检查和自动补全
* React.FC为 `children` 提供了隐式的类型`（ReactElement | null）`

:::details FC类型

```ts
type FC<P = {}> = FunctionComponent<P>;

interface FunctionComponent<P = {}> {
    (props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null;

    propTypes?: WeakValidationMap<P> | undefined;
    contextTypes?: ValidationMap<any> | undefined;
    defaultProps?: Partial<P> | undefined;
    displayName?: string | undefined;
}

type PropsWithChildren<P> = P & { children?: ReactNode | undefined };
```

:::

以下用法 `React.FC` 会报类型错误:

```tsx
const App: React.FC = props => props.children

const App: React.FC = () => [1, 2, 3]

const App: React.FC = () => 'hello'
```

解决方法如下:

```tsx
const App: React.FC = props => props.children as any
const App: React.FC = () => [1, 2, 3] as any
const App: React.FC = () => 'hello' as any

const App: React.FC<{}> = props => (props.children as unknown) as JSX.Element
const App: React.FC<{}> = props => ([1, 2, 3] as unknown) as JSX.Element
const App: React.FC<{}> = props => ('hello' as unknown) as JSX.Element
```

:::warning 提示
使用 React.FC 的方式声明最简单有效，推荐使用；如果出现类型不兼容问题，建议使用以下两种方式
:::

#### 第二种使用 `PropsWithChildren`，这种方式可以省去频繁定义children的类型，自动设置children类型为 `ReactNode`:

```tsx
type AppProps = React.PropsWithChildren<{ name: string }>

const App = ({name: string, children}: AppProps) => (
    <div>{name}-{children}</div>
)
```

#### 第三种直接申明

```tsx
type AppProps = { name: string, children?: React.ReactNode }

const App = ({name: string, children}: AppProps) => (
    <div>{name}-{children}</div>
)
```