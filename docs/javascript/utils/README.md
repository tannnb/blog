# 常用方法

## 提取身份证信息
```js
// idCard:身份证号码
// separator:出生年月日的分割字符，默认为 `/`
// 返回值:{ age:年龄,birthday:年/月/日,gender:性别（0女/1男） }
function getIdCardInfo(idCard, separator = '/') {
    if (!/(^\d{8}(0\d|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0\d|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/.test(idCard)) {
        throw Error(`${idCard}不是一个身份证号码`);
    }
    // 提取 idCard 中的字符
    const idSubstr = (s, e) => idCard.substr(s, e)
    // 拼接日期
    const splice = d => d.join(separator)
    // 获取出生年月日 性别（0 女 1 男）
    let birthday, gender;
    if (idCard.length === 18) {
        birthday = splice([idSubstr(6, 4), idSubstr(10, 2), idSubstr(12, 2)]);
        gender = idSubstr(-2, 1) & 1;
    } else {
        birthday = splice(idSubstr(6, 2), idSubstr(8, 2), idSubstr(10, 2));
        gender = idSubstr(-1, 1) & 1;
    }
    // 获取年龄（实岁）
    const birthDate = new Date(birthday);
    const newDate = new Date();
    const year = newDate.getFullYear();
    let age = year - birthDate.getFullYear();
    if (newDate < new Date(splice([year, birthday.substring(5)]))) {
        age--;
    }
    return {age, birthday, gender};
}
```

## 滚动到顶部

```js
// 滚动条滚动到指定位置 ScrollTop(position, time);
function scrollTop(number = 0, time = 300) {
    if (!time) {
        document.body.scrollTop = document.documentElement.scrollTop = number;
        return number;
    }
    const spacingTime = 20;
    let spacingInex = time / spacingTime;
    let nowTop = document.body.scrollTop || document.documentElement.scrollTop;
    let everTop = (number - nowTop) / spacingInex;
    let scrollTimer = setInterval(() => {
        if (spacingInex > 0) {
            spacingInex--;
            ScrollTop(nowTop += everTop);
        } else {
            clearInterval(scrollTimer);
        }
    }, spacingTime);
}
```

## 数据类型验证

```js
function validateType(obj) {
    if (obj === null) {
        return obj + ''
    }
    let classType = {};
    let arrType = "Boolean Number String Function Array Date RegExp Object Error"
    arrType.split(' ').forEach(function (item, index) {
        classType['[object ' + item + ']'] = item.toLowerCase()
    })
    return typeof obj === 'object' || typeof obj === 'function' ? classType[Object.prototype.toString.call(obj)] || 'object' : typeof obj
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

## 获取url中的参数

```js
function getURLQuery(url) {
    const params = url.match(/([^?=&]+)(=([^&]*))/g)
    return params ? params.reduce(
        (a, v) => (a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1), a), {}
    ) : []
}
```

## 检测设备

```js
function detectDevType() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop'
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
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return arr;
}
```

## 数组去重

```js
function unique(data, keys) {
    let result = {}
    data = data.reduce(function (item, next) {
        result[next[keys]] ? '' : result[next[keys]] = true && item.push(next)
        return item
    }, [])
    return data
}
```



