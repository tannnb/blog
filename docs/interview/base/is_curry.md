# 仿写柯里化
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
