# 仿写debounce,throttling

```js
// immediate:是否立即执行
function debounce(func, wait, immediate) {
    let timeID;
    return function () {
        let context = this;
        let arg = arguments;
        let later = function () {
            timeID = null;
            if (!immediate) {
                func.apply(context, args)
            }
        }
        let callNow = immediate && !timeID;
        clearTimeout(timeID);
        timeID = setTimeout(later, wait)
        if (callNow) {
            func.apply(context, arg)
        }
    }
}

function throttle(func, wait = 500) {
    let timeID;
    let startTime = 0;
    return function (...args) {
        let context = this;
        let currentTime = +new Date();
        if (currentTime - startTime > wait) {
            func.apply(context, args)
            startTime = currentTime
        }
    }
}
```
