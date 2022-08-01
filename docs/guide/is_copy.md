# 浅拷贝与深拷贝

## 一、什么是浅拷贝

### 创建一个新对象，这个对象有着原始对象属性值的一份精确拷贝。如果属性是基本类型，拷贝的就是基本类型的值; 如果属性是引用类型，拷贝的就是内存地址 ，所以如果其中一个对象改变了这个地址，就会影响到另一个对象。

<div style="text-align: left; width:500px">
  <img src="/images/base/copy_1.png" />
</div>

### 浅拷贝实现方法

```js
// 1.利用Object.assign()
var person = {
    name: '李雷',
    age: 20,
    school: {
        name: '希望小学'
    }
}
var lilei = Object.assign({}, person)
lilei.age = 21
lilei.school.name = '新希望小学'
console.log(person) // school.name:'新希望小学'
console.log(lilei)  // school.name:'新希望小学'，age：21


// 2.利用...扩展运算符
let person = {name: '李雷', age: 20}
let newObj = {...person}


// 3.手动实现
function clone(target) {
    let cloneTatget = {};
    for (let key in target) {
        cloneTatget[key] = target[key]
    }
    return cloneTatget
}
```

## 二、什么是深拷贝

将一个对象从内存中完整的拷贝一份出来,从堆内存中开辟一个新的区域存放新对象,且修改新对象不会影响原对象。
<div style="text-align: left; width:500px">
  <img src="/images/base/copy_2.png" />
</div>

### 简单版

```js
JSON.parse(JSON.stringify());
```

### 基础版

* 如果是原始类型，无需继续拷贝，直接返回
* 如果是引用类型，创建一个新的对象，遍历需要克隆的对象，将需要克隆对象的属性执行深拷贝后依次添加到新对象上

```js
function clone(target) {
    if (typeof target === 'object') {
        let cloneTatget = {};
        for (let key in target) {
            cloneTatget[key] = clone(target[key])
        }
        return cloneTatget
    } else {
        return target
    }
}
```

### 考虑数组

基础版只考虑了`object`,如果值是数组类型呢? 只需做一层兼容即可

```js {3}
function clone(target) {
    if (typeof target === 'object') {
        let cloneTatget = Array.isArray(target) ? [] : {};
        for (let key in target) {
            cloneTatget[key] = clone(target[key])
        }
        return cloneTatget
    } else {
        return target
    }
}

const target = {
    name: '李雷',
    age: 20,
    school: {
        name: '希望小学'
    },
    score: [98, 80, 92]
};

console.log(clone(target))
```

### 循环引用

:::details 如下测试案例

```js
const target = {
    name: '李雷',
    age: 20,
    school: {
        name: '希望小学'
    },
    score: [98, 80, 92]
};
target.target = target

clone(target)

// 递归进入死循环导致栈内存溢出了
// RangeError: Maximum call stack size exceeded
```

:::
::: warning 原因分析: 上面的对象存在循环引用的情况，即对象的属性间接或直接的引用了自身
解决思路：我们可以额外开辟一个存储空间，来存储当前对象和拷贝对象的对应关系，当需要拷贝当前对象时，先去存储空间中找，有没有拷贝过这个对象，如果有的话直接返回，如果没有的话继续拷贝，这样就巧妙化解的循环引用的问题

这个存储空间，需要可以存储`key-value`形式的数据，且`key`可以是一个引用类型，我们可以选择`Map/WeakMap`这种数据结构
:::

```js {5-8}
function clone(target, map = new Map()) {
    if (typeof target === 'object') {
        let cloneTatget = Array.isArray(target) ? [] : {};

        if (map.get(target)) {
            return map.get(target)
        }
        map.set(target, cloneTatget)

        for (let key in target) {
            cloneTatget[key] = clone(target[key], map)
        }
        return cloneTatget
    } else {
        return target
    }
}

// 执行之后结果如下:
/*{
    name: '李雷',
    age: 20,
    school: { name: '希望小学' },
    score: [ 98, 80, 92 ],
    target: [Circular]
}*/
// 执行没有报错，且target属性，变为了一个Circular类型，即 <循环引用> 的意思
```

####     

:::tip 接下来，我们使用 WeakMap 替代 Map ,为什么要这样做?
`WeakMap` 对象是一组键/值对的集合，其中的键是弱引用的。其键必须是对象，而值可以是任意的
:::
:::tip 什么是弱引用? 弱引用与强引用相对，是指不能确保其引用的对象不会被垃圾回收器回收的引用。

一个对象若只被弱引用所引用，则被认为是不可访问(或弱可访问)的，并因此可能在任何时刻被回收
:::
默认创建一个对象 `let obj = {}`,默认创建一个强引用类型，只有手动将`obj = null`,它才会被垃圾回收机制进行回收，如果是若引用对象，垃圾回收机制会自动帮助我们回收。

```js
let obj = {name: '张三'}

// 使用map -> 强引用关系
const target = new Map()
target.set(obj, '法外狂徒')
obj = null // 虽然手动将obj进行释放，然是target依然对obj存在强引用关系，所以这部分内存依然无法被释放

// 使用WeakMap
const target = new WeakMap()
target.set(obj, '法外狂徒')
obj = null // 使用WeakMap，target和obj存在的就是弱引用关系，当下一次垃圾回收机制执行时，这块内存就会被释放掉
```

## 三、性能优化

我们使用`while`来实现一个通用`forEach`遍历,`iteratee`是遍历的回调函数，他可以接受每次遍历的`value`和`index`两个参数:

```js
function forEach(array, iteratee) {
    let index = -1;
    const length = array.length;
    while (++index < length) {
        iteratee(array[index], index)
    }
    return array;
}
```

现在对`clone`函数进行改写，当遍历数组时直接用`forEach`进行遍历，当遍历对象时使用`Object.keys`取出所有的`key`进行遍历，然后在遍历时把`forEach`会调函数的`value`当作`key`使用

```js
function clone(target, map = new WeakMap()) {
    if (typeof target === 'object') {
        const isArray = Array.isArray(target);
        let cloneTarget = isArray ? [] : {};

        if (map.get(target)) {
            return map.get(target)
        }
        map.set(target, cloneTarget)

        const keys = isArray ? undefined : Object.keys(target)
        forEach(keys || target, (value, key) => {
            if (keys) {
                key = value
            }
            cloneTarget[key] = clone(target[key], map)
        })
        return cloneTarget;
    } else {
        return target;
    }
}
```

## 四、其他数据类型

#### 引用类型

判断是否为引用类型，我们还需要考虑`function`和`null`两种特殊的数据类型,实现如下

```js
function isObject(target) {
    const type = typeof target;
    return target !== null && (type === 'object' || type === 'function');
}
```

#### 数据类型

:::tip 使用 toString 来获取准备的引用类型 每一个引用类型都有`toString`方法，默认情况下，`toString()`方法被每个Object对象继承。如果此方法在自定义对象中未被覆盖，`toString()`
返回`[object type]`，其中`type`是对象的类型
:::
我们定义一些常用的数据类型,详情可查看[Object.prototype.toString.call()](https://zhuanlan.zhihu.com/p/118793721)

```js
const mapTag = '[object Map]';
const setTag = '[object Set]';
const arrayTag = '[object Array]';
const objectTag = '[object Object]';
const argsTag = '[object Arguments]';
const boolTag = '[object Boolean]';
const dateTag = '[object Date]';
const numberTag = '[object Number]';
const stringTag = '[object String]';
const symbolTag = '[object Symbol]';
const errorTag = '[object Error]';
const regexpTag = '[object RegExp]';
const funcTag = '[object Function]';

function getType(target) {
    return Object.prototype.toString.call(target);
}
```

#### 可继续遍历的类型

之前`object`、`array`都属于可以继续遍历的类型，因为它们内存都还可以存储其他数据类型的数据，另外还有`Map`，`Set`等都是可以继续遍历的类型

有序类型还需要继续进行递归，我们首先需要获取它们的初始化数据，例如上面的`[]`和`{}`，我们可以通过拿到`constructor`的方式来通用的获取

```js
function getInit(target) {
    const Ctor = target.constructor;
    return new Ctor();
}
```

继续改写`clone`函数，对可继续遍历的数据类型进行处理

```js

const deepTag = [mapTag, setTag, arrayTag, objectTag, argsTag];

function clone(target, map = new WeakMap()) {

    // 原始类型
    if (!isObject(target)) {
        return target;
    }

    // 初始化
    let cloneTarget;
    const type = getType(target)
    if (deepTag.includes(type)) {
        cloneTarget = getInit(target, type);
    }

    // 防止循环引用
    if (map.get(target)) {
        return map.get(target)
    }
    map.set(target, cloneTarget)

    // 克隆set和map
    if (type === setTag) {
        target.forEach(value => cloneTarget.add(clone(value, map)));
        return cloneTarget;
    }
    if (type === mapTag) {
        target.forEach((value, key) => cloneTarget.set(key, clone(value, map)));
        return cloneTarget;
    }

    // 克隆对象和数组
    const keys = type === arrayTag ? undefined : Object.keys(target);
    forEach(keys || target, (value, key) => {
        if (keys) {
            key = value
        }
        cloneTarget[key] = clone(target[key], map)
    })
    return cloneTarget;
}
```

#### 不可继续遍历的类型

`Bool`、`Number`、`String`、`Date`、`Error`这几种类型我们都可以直接用构造函数和原始数据创建一个新对象

```js
function cloneOtherType(targe, type) {
    let types = ['boolTag', 'numberTag', 'stringTag', 'errorTag', 'dateTag']
    const Ctor = targe.constructor;
    return types.indexOf(type) > -1 ? new Ctor(targe) : null
}
```

#### 完整代码

```js
const mapTag = '[object Map]';
const setTag = '[object Set]';
const arrayTag = '[object Array]';
const objectTag = '[object Object]';
const argsTag = '[object Arguments]';
const boolTag = '[object Boolean]';
const dateTag = '[object Date]';
const numberTag = '[object Number]';
const stringTag = '[object String]';
const errorTag = '[object Error]';

const deepTag = [mapTag, setTag, arrayTag, objectTag, argsTag];
const baseTag = [boolTag, numberTag, stringTag, errorTag, dateTag]

function isObject(target) {
    const type = typeof target;
    return target !== null && (type === 'object' || type === 'function');
}

function getType(target) {
    return Object.prototype.toString.call(target);
}

function getInit(target) {
    const Ctor = target.constructor;
    return new Ctor();
}

function cloneOtherType(targe, type) {
    const Ctor = targe.constructor;
    return baseTag.indexOf(type) > -1 ? new Ctor(targe) : null
}

function forEach(array, iteratee) {
    let index = -1;
    const length = array.length;
    while (++index < length) {
        iteratee(array[index], index)
    }
    return array;
}

function clone(target, map = new WeakMap()) {

    // 原始类型
    if (!isObject(target)) {
        return target;
    }

    // 初始化
    let cloneTarget;
    const type = getType(target)
    if (deepTag.includes(type)) {
        cloneTarget = getInit(target, type);
    } else {
        return cloneOtherType(target, type);
    }


    // 防止循环引用
    if (map.get(target)) {
        return map.get(target)
    }
    map.set(target, cloneTarget)

    // 克隆set和map
    if (type === setTag) {
        target.forEach(value => cloneTarget.add(clone(value, map)));
        return cloneTarget;
    }
    if (type === mapTag) {
        target.forEach((value, key) => cloneTarget.set(key, clone(value, map)));
        return cloneTarget;
    }

    // 克隆对象和数组
    const keys = type === arrayTag ? undefined : Object.keys(target);
    forEach(keys || target, (value, key) => {
        if (keys) {
            key = value
        }
        cloneTarget[key] = clone(target[key], map)
    })
    return cloneTarget;
}
```
