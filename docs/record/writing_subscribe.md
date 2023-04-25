# 仿写发布订阅模式
```js
class Subject {
    constructor() {
        this.listeners = Object.create(null)
    }

    // 注册事件
    $on(event, listener) {
        if (!event || !listener) {
            return
        }
        if (this.listeners[event]) {
            this.listeners[event].push(listener)
        } else {
            this.listeners[event] = [listener]
        }
    }

    // 发布事件
    $emit(event, ...args) {
        if (!this.hasBind(event)) {
            return console.log(`${event} 没有绑定`)
        }
        this.listeners[event].forEach(listener => listener.call(this, ...args))
    }

    // 取消订阅
    $off(event, listener) {
        if (!this.hasBind(event)) {
            return console.log(`${event} 不存在`)
        }
        if (!listener) {
            delete this.listeners[event]
            return
        }
        this.listeners[event] = this.listeners[event].filter(item => item !== listener)
    }

    // 注册一次
    $once(event, listener) {
        let self = this

        function one() {
            listener.apply(this, arguments)
            self.$off(event)
        }
        this.$on(event, one)
    }

    hasBind(event) {
        return this.listeners[event] && this.listeners[event].length
    }
}

let event = new Subject()
event.$on('click',() => {console.log('执行click_1')})
event.$on('click',() => {console.log('执行click_2')})
event.$emit('click') // 执行click_1  执行click_2
event.$off('click')
event.$once('click',(cb) => {console.log('执行once:', cb)})
event.$emit('click',100)   //  执行once: 100
```