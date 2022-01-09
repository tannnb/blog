# Types和interface

在日常的react开发中 `interface` 和 `type` 的使用场景十分类似

`implements` 与 `extends` 静态操作，不允许存在一种或另一种实现的情况，所以`不支持使用联合类型`
```ts
class Point {
  x: number = 2
  y: number = 3
}
interface IShape {
    area():number
}
type Perimeter = {
    perimeter(): number
}

type RectangleShape = (IShape | Perimeter) & Point

// 类只能实现具有静态已知成员的对象类型或对象类型的交集
class Rectangle implements RectangleShape {
    x = 2
    y = 3
    area() {
        return this.x + this.y
    }
}
// 接口只能扩展使用静态已知成员的对象类型或对象类型的交集
interface ShapeOrPerimeter extends RectangleShape {}
```

### 获取未导出的Type
某些场景下我们在引入第三方的库时会发现想要使用的组件并没有导出我们需要的组件参数类型或者返回值类型，这时候我们可以通过 `ComponentProps/ ReturnType` 来获取到想要的类型。
```tsx
import {Select} from 'antd'

type SelectProps = React.ComponentProps<typeof Select>  // 获取props
type newSelectProps = Omit<SelectProps, 'change'> // 可选操作 去除Select的change回调

const SelectFC = React.FC<newSelectProps> = props => <Select />
```
```ts
function App() {
    return {name:'张三',professional: '法外狂徒'}
}
type AppType = ReturnType<typeof App>  // {name: string; professional: string }
```




