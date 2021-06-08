### 原始类型
::: tip 
javascript原始类型有6中,原始类型既只保存原始值，没有函数可以调用
:::

#### 六种原始类型
* string
* number
* boolean
* null
* undefined
* symbol

::: warning
为什么说原始类型没有函数可以调用,但是`'1'.toString()`又可以在浏览器中正确执行?

因为`'1'.toString()`中字符串`'1'`在此时会被封装成对应字符串对象，相当于`new String('1').toString()`,因为`new String('1')`实例化一个对象，而这个对象上是有`toString()`方法的
:::

#### null到底是什么类型
* null不是一个空引用, 而是一个原始值; 它只是期望此处将引用一个对象, 注意是"期望".
* typeof null结果是object, 这是个历史遗留bug. 
* 在ECMA6中, 曾经有提案为历史平反, 将type null的值纠正为null, 但最后提案被拒了. 
* 理由是历史遗留代码太多, 不想得罪人, 不如继续将错就错当和事老

### 对象类型
::: tip
在javascript中, 除了原始类型，其他的都是对象类型，对象类型储存的是地址，而原始类型储存的是值.
:::

```js
let a = []
let b = a
a.push(1)
console.log(b) // 输出:1
```
以上代码中,创建一个对象类型a(数组),将a的栈储存地址赋值给了变量b，此时修改a的值，打印出b的值也同步发生了改变,因为他们在内存中使用的同一个地址，改变其中任意变量的值，都会影响其他变量的值

#### 对象当做函数参数
```js
function Person(person) {
  person.age = 24
  person = {
    name:'李四',
    age:18
  }
  return person
}

```

<cus-border></cus-border>
