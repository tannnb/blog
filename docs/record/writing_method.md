# 常用方法学习与总结

#### Object.assign() 方法模拟

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
```

#### Object.freeze() 冻结对象

- 浅冻结
- 深度冻结对象 freeze

```js
// 给Object上扩展一个深度冻结方法
// getOwnPropertyNames 返回指定对象的所有属性名，包括不可枚举
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

#### Object.Entries() 方法模拟

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
```

#### Object.formEntries() 方法模拟

```js
Object.myFornEntrics = function (o) {
  let _obj = {}

  for (let k in o) {
    _obj[o[k][0]] = o[k][1]
  }

  return _obj
}
```

#### 模拟实现 forEach

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

#### 模拟实现 map

```js
Array.prototype.myMap = function (callback) {
  var _arr = this
  var _len = _arr.length
  var _arguments = arguments[1] || window
  var _newArr = []
  var _item
  var _res

  for (var i = 0; i < _len; i++) {
    _item = deepClone(_arr[i])
    _res = callback.apply(_arguments, [_item, i, _arr])
    _res && _newArr.push(_res)
  }
  return _newArr
}
```

#### 模拟 filter

```js
Array.prototype.myFilter = function (callback) {
  var _arr = this
  var _len = _arr.length
  var _arguments = arguments[1] || window
  var _newArr = []
  var _item

  for (var i = 0; i < _len; i++) {
    _item = deepClone(_arr[i])
    callback.apply(_arguments, [_item, i, _arr]) ? _newArr.push(_item) : ''
  }
  return _newArr
}
```

#### 模拟 every

```js
Array.prototype.myEvery = function (callback) {
  var _arr = this
  var _len = _arr.length
  var _arguments = arguments[1] || window
  var _result = true

  for (var i = 0; i < _len; i++) {
    if (!callback.apply(_arguments, [_arr[i], i, _arr])) {
      _result = false
      break
    }
  }

  return _result
}
```

#### 模拟 some

```js
Array.prototype.mySome = function (callback) {
  var _arr = this
  var _len = _arr.length
  var _arguments = arguments[1] || window
  var _result = false

  for (var i = 0; i < _len; i++) {
    if (callback.apply(_arguments, [_arr[i], i, _arr])) {
      _result = true
      break
    }
  }

  return _result
}
```

#### 模拟 reduce

```js
Array.prototype.myReduce = function (callback, initialValue) {
  var _arr = this
  var _len = _arr.length
  var _arguments = arguments[2] || window
  var _item

  for (var i = 0; i < _len; i++) {
    _item = deepClone(_arr[i])
    initialValue = callback.apply(_arguments, [initialValue, _item, i, _arr])
  }

  return initialValue
}
```

#### 模拟 reduceRight

```js
Array.prototype.myReduceRight = function (callback, initialValue) {
  var _arr = this
  var _len = _arr.length
  var _arguments = arguments[2] || window
  var _item

  for (var i = _len; i >= 0; i--) {
    _item = deepClone(_arr[i])
    initialValue = callback.apply(_arguments, [initialValue, _item, i, _arr])
  }

  return initialValue
}
```

#### 模拟实现 call

```js
Function.prototype.myCall = function (context) {
  context = context ? Object(context) : window
  context.fn = this

  // 执行函数
  let args = [...arguments].slice(1)
  let result = context.fn(...args)
  // 删除函数
  delete context.fn
  return result
}
```

#### 模拟实现 Apply

```js
Function.prototype.myApply = function (context, array) {
  context = context ? Object(context) : window
  context.fn = this
  return !array ? context.fn() : context.fn(...arr)
}
```

#### 模拟实现 Bind

```js
Function.prototype.myBind = function (context) {
  if (typeof this !== 'function') {
    throw TypeError('** is not function')
  }
  const self = this
  const args = [...arguments].slice(1)
  return function F() {
    return self.apply(context, args.concat(...arguments))
  }
}
```

#### 模拟实现 generator

给 Object 增加迭代器

```js
const target = {
  0: 1,
  1: 2,
  2: 3,
  length: 3
}
Object.prototype[Symbol.iterator] = function () {
  let index = 0
  let _this = this
  return {
    next() {
      return index < _this.length
        ? { value: _this[index++], done: false }
        : { value: undefined, done: true }
    }
  }
}
```


#### 模拟实现 lodash/chunk

```js
function chunk (array, size = 1) {
  if (size < 1) {
    return []
  }
  const result = []
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size))
  }
  return result
}
```
#### 模拟实现 lodash/countBy

```js
function countBy (collection, iteratee) {
  const result = {}
  for (const item of collection) {
    const key = iteratee(item)
    result[key] ? result[key]++ : (result[key] = 1)
  }
  return result
}
```

#### 模拟实现 AOP

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

#### 模拟实现 debounce

函数防抖：n 秒内只要触发事件，就重新计时，事件处理函数的程序将永远不能被执行

```js
// immediate:是否立即执行
function debounce(fn, wait, immediate) {
  let time = null
  const debounced = function () {
    if (time) {
      clearTimeout(time)
    }

    if (immediate) {
      const exec = !time
      time = setTimeout(() => (time = null), wait)
      if (exec) {
        fn.apply(this, arguments)
      }
    } else {
      time = setTimeout(() => {
        fn.apply(this, arguments)
      }, wait)
    }
    return response
  }
  debounced.remove = function () {
    clearTimeout(time)
    time = null
  }
  return debounced
}
```

#### 模拟实现 throttling
函数节流: 事件被触发，n 秒之内只执行一次事件处理函数

```ts
function throttle(fn, depay = 500) {
  let time = null
  let begin = +new Date()
  return function () {
    let currentTiem = +new Date()
    clearTimeout(time)
    if (currentTime - begin >= depay) {
      fn.apply(this, arguments)
      begin = currentTiem
    } else {
      time = setTimeout(() => fn.apply(this, arguments), depay)
    }
  }
}
```

#### 模拟实现函数重载

```ts
function addMethods(source, key, fn) {
  let target = source[key]
  source[key] = function (...args) {
    if (args.length === fn.length) {
      return fn.apply(this, args)
    } else if (typeof target === 'function') {
      return target.apply(this, args)
    }
  }
}

let search = {}
addMethods(search, 'find', () => {
  console.log('默认查询')
})
addMethods(search, 'find', (name) => {
  console.log(`查询条件:${name}`)
})
addMethods(search, 'find', (name, age) => {
  console.log(`查询条件:${name},${age}`)
})

search.find()
search.find('名称')
search.find('名称', '年龄')
```