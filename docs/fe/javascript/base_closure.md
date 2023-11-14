# 闭包

闭包就是能够读取其他函数内部变量的函数，或者子函数在外调用， 子函数所在的父函数的作用域不会被释放

* 函数中返回函数
* 将函数作为参数传递
* 回调函数
* 非典型闭包IIFE(立即执行函数表达式)

```js
// 函数中返回函数
var name = '李雷'

function getName() {
  var name = '韩梅梅'
  return function () {
    console.log(name)
  }
}

var currentName = getName()
currentName() // 韩梅梅
```

```js
//将函数作为参数传递: 无论通过何种手段将内部的函数传递到词法作用域之外(外层函数外部)，它都会对原始作用域进行引用，无论在何处执行这个函数都会产生闭包
var name = '李雷'

function person() {
  var name = '韩梅梅'

  function print() {
    console.log(name)
  }

  getName(print)
}

function getName(fn) {
  fn()
}

person() // 韩梅梅
```

```js
// 回调函数:定时器，事件监听，ajax请求，跨域窗口通信或者一部中，只要使用回调函数，实际都是在使用闭包
setTimeout(function () {
  console.log('setTimeout')
}, 1000)

document.addEventListener('click', function (event) {
  console.log(event)
})

// postMessage:在子窗口中监听父窗口messaghe
childWindow.addEventListener('message', function (event) {
  console.log(event.origin) // 父窗口url
  console.log(event.source) // 父窗口对象
  console.log(event.data)   // 父窗口传递过来的数据
})
```

```js
//IIFE：立即执行函数表达式，创建了一个闭包。
var name = '李雷';
(function person() {
  console.log(name)
})()
// ()()之前必须加 `;` 防止自执行函数前面有其他代码导致JS解析器认为是一个整体
```

## 惰性函数

函数内部改变自身机制

* 惰性加载表示函数执行的分支只会在函数第一次调用的时候执行，在第一次调用的过程中，该函数被覆盖为另一个按照合适的方式执行的函数 这样任何对原函数的调用就不用再经过执行的分支了

::: details 常见获取时间方法

```ts
// 第一种: 全局变量污染
var timeStamp = ''

function getTimeStamp() {
  if (getTimeStamp) {
    return getTimeStamp
  }
  getTimeStamp = new Date().getTime()
  return getTimeStamp
}

function getTimeStamp() {
  var getTimeStamp = new Data().getTime()
  return function () {
    return getTimeStamp
  }
}
```

:::

改写成惰性函数案例
::: details 获取时间

```ts
var getTimeStamp = function () {
  var timeStamp = new Date().getTime()

  getTimeStamp = function () {
    return timeStamp
  }
  return timeStamp()
}
```
:::

::: details addEvent方法

```ts
function addEvent(el, type, fn, capture) {
  if (el.addEventListener) {
    addEvent = function (el, type, fn, capture) {
      el.addEventListener(type, fn, capture)
    }
  } else if (el.attachEvent) {
    addEvent = function (el, type, fn) {
      el.attachEvent('on' + type, function () {
        fn.call(el)
      })
    }
  } else {
    addEvent = function (el, type, fn) {
      el['on' + type] = fn
    }
  }
}
addEvent(el,'click',handleClick,false)
function handleClick() {}
```
:::
