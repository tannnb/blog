# 仿写数据响应式原理
```js
// defineProperty方案
function Observe(obj) {
    if(typeof obj !== 'object' || obj === null) {
        return
    }
    Object.keys(obj).forEach(key => {
        defineReactive(obj, key, obj[key])
    })
}
function defineReactive(target,key,val) {
    Observe(val)
    Object.defineProperty(target,key,{
        enumerable: true,   // 可枚举
        configurable: true, // 可删除
        get() {
            return val
        },
        set(newVal) {
            val = newVal
        }
    })
}

// proxy方案
function Observe(obj) {
    if(typeof obj !== 'object' || obj === null) {
        return
    }
    const handle = {
        get(target,key) {
            const value = target[key]
            if (typeof value === 'object' && value !== null) {
                return new Proxy(value, handle )
            }
            return Reflect.get(target, key)
        },
        set(target,key,value) {
            return Reflect.set(target, key, value)
        }
    }
    return new Proxy(obj, handle)
}

const obj = {
    name: 'AAA',
    age: 23,
    job: {
        name: 'FE',
        salary: 1000
    }
}
const proxyObj = observe(obj)
const name = proxyObj.name
proxyObj.name = 'BBB'
const jobName = proxyObj.job.name
proxyObj.job.name = 'fe'

```
