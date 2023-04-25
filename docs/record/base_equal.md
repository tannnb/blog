#  == 和 ===区别

## 一、等于操作符(不严格相等)
等于操作符用两个等于号 == 表示，在比较中会先进行类型转换，再确定操作数是否相等，如若相等返回 true

```js
// 1.任一操作数是布尔值，则将其转换为数值再比较是否相等
let result = (true == 1); // true

// 2.如果一个操作数是字符串，另一个操作数是数值，则尝试将字符串转换为数值，再比较是否相等
let result = ("1" == 1); // true

// 3.如果一个是对象，另一个操作数不是，则调用对象的valueOf()方法取得其原始值，再根据前面的规则进行比较
let obj = {
    valueOf:function() {
        return 1
    }
}
let result = (obj == 1); // true

// 4. null和undefined相等
let result = (null == undefined ); // true

// 5. 如果有任一操作数是 NaN ，则相等操作符返回 false
let result = (NaN == NaN ); // false

// 6. 如果两个操作数都是对象，则比较它们是不是同一个对象。如果两个操作数都指向同一个对象，则相等操作符返回true
let obj1 = {name:"李雷"}
let obj2 = {name:"韩梅梅"}
let result = (obj1 == obj2 ); // false
```

## 二、全等操作符(严格相等)
全等操作符由 3 个等于号  === 表示，只有两个操作数在不转换的前提下相等才返回 true。即类型相同，值也相同
```js
let result = ("1" === 1); // false，不相等，因为数据类型不同

// 注：undefined 和 null 与自身严格相等
let result1 = (null === null)  //true
let result2 = (undefined === undefined)  //true
```

## 三、小结

* 严格相等:左右两边不仅值要相等，类型也要相等，例如`'1'===1`的结果是`false`，因为一边是`string`，另一边是`number`
  
* 不严格相等:
  * 两边的类型是否相同，相同的话就比较值的大小，例如`1==2`，返回`false`
  * 类型不相同会进行类型转换
  * 判断的是否是`null`和`undefined`，是的话就返回`true`
  * 判断的类型是否是`String`和`Number`，是的话，把`String`类型转换成`Number`，再进行比较
  * 判断其中一方是否是`Boolean`，是的话就把`Boolean`转换成`Number`，再进行比较
  * 如果其中一方为`Object`，且另一方为`String`、`Number`或者`Symbol`，会将`Object`转换成原始类型后，再进行比较