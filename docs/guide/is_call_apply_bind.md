# 仿写call,apply,bind

```js
// call
Function.prototype.myCall = function (context) {
    context = context ? Object(context) : window;
    console.fn = this

    // 执行函数
    let args = [...arguments].slice(1)
    let result = context.fn(...args)
    // 删除函数
    delete context.fn
    return result
}
// apply
Function.prototype.myApply = function (context, array) {
    context = context ? Object(context) : window;
    console.fn = this
    let result;
    if (!array) {
        result = context.fn()
    } else {
        result = context.fn(...arr)
    }
    return result
}
// bind
Function.prototype.myBind = function (context) {
    if (typeof this !== "function") {
        throw TypeError('** is not function')
    }
    const self = this;
    const args = [...arguments].slice(1)
    return function F() {
        return self.apply(context, args.concat(...arguments))
    }
}

function foo() {
    console.log(this.age);
}

var obj = {age: 1}
var newFunc = foo.myBind(obj);
newFunc(); // 输出1
```
