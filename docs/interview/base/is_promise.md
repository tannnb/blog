# 仿写Promise

```js
class Promise {
    constructor(executor) {
        this.state = PENDING
        this.value = undefined
        this.reason = undefined
        this.onResolbedCallbacks = []     // 保存异步成功回调
        this.onRejectedCallbacks = []     // 保存异步失败回调
        
        const resolve = value => {
            if(this.state === PENDING) {
                this.state = FULFILLED
                this.value = value
                this.resolvedCallbacks.forEach(fn => fn())
            }
        }
        const reject = reson => {
            if(this.state === PENDING) {
                this.state = REJECTED
                this.reason = value
                this.rejectedCallbacks.forEach(fn => fn())
            }
        }

        // 执行器 (executor) 接收两个参数，分别是 resolve, reject
        try {
            executor(resolve, reject)
        } catch (error) {
            reject(error)
        }
    }
    
    then(onFulfilled, onRejected) {
        const promise2 = new Promise((resolve, reject) => {
            if(this.state === FULFILLED) {
                try {
                    resolve(onFulfilled(this.value))
                }catch(error) {
                    reject(error)
                }
            }
            if(this.state === REJECTED) {
                try {
                    resolve(onRejected(this.reason))
                }catch (error) {
                    reject(error)
                }
            }
            // 当 Promise 状态为等待状态 (pending) 时，将 onFulfilled 和 onRejected 存入对应的回调队列
            if(this.state === PENDING) {
               try {
                   this.resolvedCallbacks.push(() => {
                       onFulfilled(this.value)
                   })
               }catch(error) {
                   reject(e)
               }

               try {
                    this.rejectedCallbacks.push(() => {
                        onRejected(this.reason)
                    })
                } catch (error) {
                    reject(error)
                }
            }
        })
        return promise2
    }
    catch(cb) {
        return this.then(null, cb)
    }
}

```
