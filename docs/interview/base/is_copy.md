# 浅拷贝、深拷贝

* 浅拷贝
* 1.利用Object.assign()
* 2.利用...扩展运算符

```js
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

// -------分割线---------

var person = {name: '李雷', age: 20}
var newObj = {...person}
```

* 深拷贝
* 1.使用JSON.parse()和JSON.stringify()两个函数
* 2.实现自己的简易深拷贝方法
* 3.lodash第三方库实现深拷贝

```js
// 使用JSON.parse()和JSON.stringify()
// 会忽略属性值为undefined,Symbol的属性，不会序列化函数(忽略函数)
var person = {
    name: '李雷',
    age: 18,
    sex: undefined,
    isSymbol: Symbol(),
    getName() {
        console.log(this.name)
    }
}
var newObj = JSON.parse(JSON.stringify(person));


// 简易深拷贝
function deepClone(obj) {
    function isObject(arg) {
        return (typeof arg === 'object' || typeof arg === 'function') && arg !== null
    }

    if (!isObject(obj)) {
        throw new Error('is not the object')
    }
    var isArray = Array.isArray(obj)
    var newObj = isArray ? [...obj] : {...obj}
    Reflect.ownKeys(newObj).forEach(key => {
        newObj[key] = isObject(newObj[key]) ? deepClone(newObj[key]) : newObj[key];
    })
    return newObj;
}

var person = {
    name: '李雷',
    age: 18,
    job: {
        number: 1,
    },
    sex: undefined,
    isSymbol: Symbol(),
    getName() {
        console.log(this.name)
    }
}

var p1 = deepClone(person)
person.job.number = 2
console.log(person.job) // {number:2}
console.log(p1.job)     // {number:1}


// -------分割线---------
// lodash第三方库实现深拷贝
import _ from 'lodash'

_.cloneDeep(person)

```
