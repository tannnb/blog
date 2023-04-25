# 仿写数据响应式原理

## 一、proxy代理拦截

```js
// defineProperty方案
function Observe(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return
    }
    Object.keys(obj).forEach(key => {
        defineReactive(obj, key, obj[key])
    })
}

function defineReactive(target, key, val) {
    Observe(val)
    Object.defineProperty(target, key, {
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
    if (typeof obj !== 'object' || obj === null) {
        return
    }
    const handle = {
        get(target, key) {
            const value = target[key]
            if (typeof value === 'object' && value !== null) {
                return new Proxy(value, handle)
            }
            return Reflect.get(target, key)
        },
        set(target, key, value) {
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

## 二、发布订阅模式

```js
class Vue {
    constructor() {
        this.subs = {}
    }

    $on(type, fn) {
        if (!this.subs[type]) {
            this.subs[type] = []
        }
        this.subs[type].push(fn)
    }

    $emit(type) {
        if (this.subs[type]) {
            const args = Array.prototype.slice.call(arguments, 1)
            this.subs[type].forEach(fn => fn(...args))
        }
    }
}

let eventHub = new Vue()
eventHub.$on('click', function () {
    console.log('点击事件', [...arguments])
})
eventHub.$emit('click', 100, 200)
```

## 三、观察者模式

```js
class Subject {
    constructor() {
        this.observerLists = []
    }

    // 添加观察者
    addObs(obs) {
        if (obs && obs.update) {
            this.observerLists.push(obs)
        }
    }

    // 通知观察者
    notify() {
        this.observerLists.forEach(obs => {
            obs.update()
        })
    }

    empty() {
        this.observerLists.length = 0
    }
}

class Observer {
    update() {
        console.log('数据更新')
    }
}

let sub = new Subject()

let obs1 = new Observer()
let obs2 = new Observer()
sub.addObs(obs1)
sub.addObs(obs2)
sub.notify()
```

## 四、模拟Vue响应式原理

```js
class Dep {
    constructor() {
        this.subs = []
    }

    addSub(sub) {
        if (sub && sub.update) {
            this.subs.push(sub)
        }
    }

    notify() {
        this.subs.forEach(sub => sub.update())
    }
}
```

```js
class Watcher {
    constructor(vm, key, cb) {
        this.vm = vm
        this.key = key
        this.cb = cb
        Dep.target = this
        this.oldValue = vm[key]
        Dep.target = null
    }

    update() {
        let newValue = this.vm[this.key]
        if (newValue === this.oldValue) {
            return
        }
        this.cb(newValue)
    }
}
```

```js
class Compiler {
    constructor(vm) {
        this.vm = vm
        this.el = vm.$el
        this.compile(this.el)
    }

    compile(el) {
        let childNodes = [...el.childNodes]
        childNodes.forEach(node => {
            if (this.isTextNode(node)) {
                this.compileText(node)
            } else if (this.isElementNode(node)) {
                this.compileElement(node)
            }
            if (node.childNodes && node.childNodes.length) {
                this.compile(node)
            }
        })
    }

    compileText(node) {
        let reg = /\{\{(.+?)\}\}/
        let val = node.textContent
        if (reg.test(val)) {
            let key = RegExp.$1.trim()
            node.textContent = val.replace(reg, this.vm[key])

            // 创建观察者
            new Watcher(this.vm, key, newValue => {
                node.textContent = newValue
            })

        }
    }

    compileElement(node) {
        Array.from(node.attributes).forEach(attr => {
            let attrName = attr.name
            if (this.isDirective(attrName)) {
                attrName = attrName.substr(2)
                let key = attr.value
                this.update(node, key, attrName)
            }
        })
    }

    update(node, key, attrName) {
        let updateFn = this[attrName + 'Updater']
        updateFn && updateFn.call(this, node, key, this.vm[key])
    }

    textUpdater(node, key, value) {
        node.textContent = value
        new Watcher(this.vm, key, newValue => {
            node.textContent = newValue
        })
    }

    modelUpdater(node, key, value) {
        node.value = value
        new Watcher(this.vm, key, newValue => {
            node.textContent = newValue
        })
        node.addEventListener('input', () => {
            this.vm[key] = node.value
        })
    }

    isDirective(attr) {
        return attr.startsWith('v-')
    }

    isElementNode(node) {
        return node.nodeType === 1
    }

    // 文本节点
    isTextNode(node) {
        return node.nodeType === 3
    }
}
```

```js
class Observer {
    constructor(data) {
        this.walk(data)
    }

    walk(data) {
        if (!data || typeof data !== 'object') {
            return
        }
        Object.keys(data).forEach(key => {
            this.defineReactive(data, key, data[key])
        })
    }

    defineReactive(obj, key, value) {
        this.walk(value)

        const self = this
        let dep = new Dep()
        Object.defineProperty(obj, key, {
            enumerable: true,
            configurable: true,
            get() {
                Dep.target && dep.addSub(Dep.target)
                return value
            },
            set(newValue) {
                if (newValue === value) {
                    return
                }
                value = newValue
                self.walk(newValue)
                dep.notify()
            }
        })
    }
}
```

```js
class Vue {
    constructor(options) {
        this.$options = options || {}
        this.$el = typeof options.el === 'string' ? document.querySelector(options.el) : options.el
        this.$data = options.data || {}
        this._proxyData(this.$data)

        new Observer(this.$data)
        new Compiler(this)
    }

    _proxyData(data) {
        Object.keys(data).forEach(key => {
            Object.defineProperty(this, key, {
                enumerable: true,
                configurable: true,
                get() {
                    return data[key]
                },
                set(value) {
                    if (data[key] === value) {
                        return
                    }
                    data[key] = value
                }
            })
        })
    }
}

let vm = new Vue({
    el: '#app',
    data: {
        msg: 'hello message',
        age: 20
    }
})

console.log(vm) 
```