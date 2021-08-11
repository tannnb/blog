# 仿写柯里化

## 一、什么是柯里化
柯里化是把一个多参数函数转化成一个嵌套的一元函数的过程

```js
let fn = (x,y) => x + y

// 转换成柯里化函数
const curry = function (fn) {
    return function (x) {
        return function (y) {
            return fn(x,y)
        }
    }
}

let myFn = curry(fn)
let result = myFn(1)(2)
console.log(result)  // 输出: 3
```


```js
function curryArg (...args) {
      let sum = args.reduce((target, next) => target + next, 0)
      function next (...sArgs) {
        sum = sArgs.reduce((target, next) => target + next, sum)
        return next
      }
      next.toString = function () {
        return sum
      }
      return next
    }
```
