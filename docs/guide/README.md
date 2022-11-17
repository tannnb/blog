# 原型，原型链

参考如下链接：
[JavaScript深入之从原型到原型链](https://github.com/mqyqingfeng/blog/issues/2)


```ts
/* 

对应名称
prototype: 原型
__proto__: 原型链(原型连接点) / 隐示原型


从属关系:
prototype -> 函数的一个属性: 对象{}
__proto__ -> 对象(Object)的一个属性: 对象{}

原型和原型链组成的链条，是怎么组成的？
对象的__proto__保存着该对象的构造函数的prototype

*/

 
// prototype -> 函数的一个属性
function Test() {}
console.log(Test.prototype)

//__proto__ -> 对象(Object)的一个属性
const test = new Test()
console.log(Test.__proto__)

// 对象的__proto__保存着该对象的构造函数的prototype
// console.log(Test.prototype.__proto__ === Object.prototype)
console.log(Test.__proto__ === Test.prototype) // true


// 以一个对象为基准，以__proto__为连接的这条链条，一直到Object.prototype为止的这个链，我们叫做原型链
/* 
  test {
    a:1,
    __proto__: Test.prototype = {
      b:2,
      __proto__: Object.prototype = {
        c:3,
        __proto__:null // 已经到顶层了，__proto__已经没有指向了
      }
    }
  }
*/  
```




