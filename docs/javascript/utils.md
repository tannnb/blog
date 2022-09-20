---
sidebar: auto
---

# 常用方法

## 提取身份证信息

```js
// idCard:身份证号码
// separator:出生年月日的分割字符，默认为 `/`
// 返回值:{ age:年龄,birthday:年/月/日,gender:性别（0女/1男） }
function getIdCardInfo(idCard, separator = '/') {
  if (
    !/(^\d{8}(0\d|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0\d|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/.test(
      idCard
    )
  ) {
    throw Error(`${idCard}不是一个身份证号码`)
  }
  // 提取 idCard 中的字符
  const idSubstr = (s, e) => idCard.substr(s, e)
  // 拼接日期
  const splice = (d) => d.join(separator)
  // 获取出生年月日 性别（0 女 1 男）
  let birthday, gender
  if (idCard.length === 18) {
    birthday = splice([idSubstr(6, 4), idSubstr(10, 2), idSubstr(12, 2)])
    gender = idSubstr(-2, 1) & 1
  } else {
    birthday = splice(idSubstr(6, 2), idSubstr(8, 2), idSubstr(10, 2))
    gender = idSubstr(-1, 1) & 1
  }
  // 获取年龄（实岁）
  const birthDate = new Date(birthday)
  const newDate = new Date()
  const year = newDate.getFullYear()
  let age = year - birthDate.getFullYear()
  if (newDate < new Date(splice([year, birthday.substring(5)]))) {
    age--
  }
  return { age, birthday, gender }
}
```

## 滚动到顶部

```js
// 滚动条滚动到指定位置 ScrollTop(number, time);
function ScrollTop(number = 0, time = 200) {
  if (!time) {
    document.body.scrollTop = document.documentElement.scrollTop = number
    return number
  }
  const spacingTime = 20
  let spacingInex = time / spacingTime
  let nowTop = document.body.scrollTop + document.documentElement.scrollTop
  let everTop = (number - nowTop) / spacingInex
  let scrollTimer = setInterval(() => {
    if (spacingInex > 0) {
      spacingInex--
      ScrollTop((nowTop += everTop), time)
    } else {
      clearInterval(scrollTimer)
    }
  }, spacingTime)
}
```

## 数据类型验证

```js
function validateType(obj) {
  if (obj === null) {
    return obj + ''
  }
  let classType = {}
  let arrType = 'Boolean Number String Function Array Date RegExp Object Error'
  arrType.split(' ').forEach(function (item, index) {
    classType['[object ' + item + ']'] = item.toLowerCase()
  })
  return typeof obj === 'object' || typeof obj === 'function'
    ? classType[Object.prototype.toString.call(obj)] || 'object'
    : typeof obj
}
```

## 深拷贝

```js
function cloneObj(origin, target) {
  for (var key in origin) {
    var hasObj = Object.prototype.toString.call(origin[key])
    if (origin.hasOwnProperty(key)) {
      target[key] = origin[key]
    }
    if (typeof origin[key] === 'object' && origin[key] !== null) {
      target[key] = hasObj === '[object Array]' ? [] : {}
      cloneObj(origin[key], target[key])
    }
  }
  return target
}
```

## 深拷贝 ES5 版

```js
function deepClone(origin, target) {
  var tar = target || {}
  var toStr = Object.prototype.toString
  var arrType = '[object Array]'

  for (var k in origin) {
    if (origin.hasOwnProperty(k)) {
      if (typeof origin[k] === 'object' && origin[k] !== null) {
        tar[k] = toStr.call(origin[k]) === arrType ? [] : {}
        deepClone(origin[k], tar[k])
      } else {
        tar[k] = origin[k]
      }
    }
  }

  return tar
}
```

## 深拷贝 ES6 版

```js
function deepClone(origin, hasMap = new WeakMap()) {
  if (origin == undefined || typeof origin !== 'object') {
    return origin
  }

  if (origin instanceof Date) {
    return new Date(origin)
  }
  if (origin instanceof RegExp) {
    return new RegExp(origin)
  }

  const hashKey = hasMap.get(origin)
  if (hashKey) {
    return hashKey
  }

  const target = new origin.constructor()
  hasMap.set(origin, target)
  for (let k in origin) {
    if (origin.hasOwnProperty(k)) {
      target[k] = deepClone2(origin[k], hasMap)
    }
  }

  return target
}
```

## 获取 url 中的参数

```js
function getURLQuery(url) {
  const params = url.match(/([^?=&]+)(=([^&]*))/g)
  return params
    ? params.reduce(
        (a, v) => (
          (a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a
        ),
        {}
      )
    : []
}

function getQueryString(url) {
  let index = url.indexOf('?')
  if (!url || index === -1) {
    return undefined
  }
  let str = ''
  let urlArr = url.substring(index + 1).split('&')
  let result = {}
  for (let i = 0; i < urlArr.length; i++) {
    let item = urlArr[i].split('=')
    result[item[0]] = item[1]
  }
  return result
}

let url = 'http://www.baidu.com?id=1&query=百度搜索&callback=callbackJSON'
const { id, query, callback } = getQueryString(url)
```

## 检测设备

```js
function detectDevType() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
    ? 'Mobile'
    : 'Desktop'
}
```

## 数组乱序

```js
function shuffle(source) {
  let arr = source.slice()
  for (let i = 0; i < arr.length; i++) {
    let j = randomArray(i)
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
  return _arr
}
```

## 随机数

```js
// 从最大到最小范围区间随机取值,min非必传
function getRandomInit(max, min) {
  if (!min) {
    return Math.floor(Math.random() * (max + 1))
  }
  return Math.floor(Math.random() * (max - min + 1) + min)
}

// 限定范围随机数
function randomArray(min, max, n = 10) {
  let arr = []
  for (let i = 0; i < n; i++) {
    arr[i] = Math.floor(Math.random() * (max - min + 1)) + min
  }
  return arr
}
```

## 数组去重

```js
function unique(data, keys) {
  let result = {}
  data = data.reduce(function (item, next) {
    result[next[keys]] ? '' : (result[next[keys]] = true && item.push(next))
    return item
  }, [])
  return data
}
```

## Cookie 操作

```js
let doCookie = {
  getCookie(name) {
    let reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
    let arr = document.cookie.match(reg)
    return arr && arr.length > 2 ? unescape(arr[2]) : null
  },
  setCookie(cookName, cookValue, expiration) {
    let date = new Date()
    date.setTime(date.getTime() + expiration * 24 * 60 * 60 * 1000)
    let expires = `expires=${date.toUTCString()}`
    document.cookie = `${cookName}=${cookValue};${expires}`
  }
}
doCookie.setCookie('name', 'lilei', 20)
doCookie.setCookie('jsdh', 'lilei2', 20)
// console.log(doCookie.getCookie('name')); // 打印lilei
```

## AOP

```js
Function.prototype.befor(function (callback) {
  let _self = this
  return function () {
    callback.apply(_self, arguments)
    return _self.apply(_self, arguments)
  }
})

Function.prototype.after = function (callback) {
  var _self = this
  return function () {
    const result = _self.apply(_self, arguments)
    callback.apply(_self, arguments)
    return result
  }
}

function app() {
  console.log('app')
  return 'Application'
}
const result = app
  .befor(function () {
    console.log('执行之前')
  })
  .after(function () {
    console.log('执行之后')
  })
console.log(result)
```

## 对象中有描述符之类的如何 assign

```js
Object.myAssign = function (target, ...sources) {
  sources.forEach((source) => {
    const desciptors = Object.keys(source).reduce((desciptors, key) => {
      desciptors[key] = Object.getOwnPropertyDescriptor(source, key)
      return desciptors
    }, {})
    Object.defineProperties(target, desciptors)
  })

  return target
}

const test1 = {
  a: 1,
  get b() {
    return 2
  }
}

const result = Object.myAssign({}, test1)
```

## 深度冻结对象 freeze

```js
// Object.freeze() 浅冻结
// 给Object上扩展一个深度冻结方法
Object.deepFreeze = function (o) {
  var _keys = Object.getOwnPropertyNames(o)
  if (_keys.length) {
    _keys.forEach(function (k) {
      var _value = o[k]
      if (typeof _value === 'object' && _value !== null) {
        deepFreeze(_value)
      }
    })
  }
  return Object.freeze(o)
}
```

## Object.Entries / Object.formEntries

```js
Object.myEntries = function (data) {
  let _pool = []

  if (Object.prototype.toString.call(data) === '[object Object]') {
    for (let k in data) {
      if (data.hasOwnProperty(k)) {
        let _arr = [k, data[k]]
        _pool.push(_arr)
      }
    }
  }
  return _pool
}

Object.myFornEntrics = function (o) {
  let _obj = {}

  for (let k in o) {
    _obj[o[k][0]] = o[k][1]
  }

  return _obj
}
```

## 手动实现 forEach

```js
Array.prototype.myForEach = function (callback) {
  var _arr = this
  var _len = _arr.length
  var _argument = argument[1] || window

  for (var i = 0; i < _len; i++) {
    callback.apply(_argument, [_arr[i], i, _arr])
  }
}
```
