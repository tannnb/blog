# JS中数据类型和存储上的差别

## 前言
* 在JS中，我们可以分成两种类型：`原始类型(基本数据)`,`对象类型(引用类型)`; 
* 两者区别: 存储位置不同


## 一、原始类型
* String
* Number
* Boolean
* Null
* Undefined
* symbol


::: warning
为什么说原始类型没有函数可以调用,但是`'1'.toString()`又可以在浏览器中正确执行?

因为`'1'.toString()`中字符串`'1'`在此时会被封装成对应字符串对象，相当于`new String('1').toString()`,因为`new String('1')`
实例化一个对象，而这个对象上是有`toString()`方法的
:::

```js
// null到底是什么类型?

// `null`不是一个空引用, 而是一个原始值; 它只是期望此处将引用一个对象, 注意是"期望".
// `typeof null`结果是`object`, 这是个历史遗留bug.
// 在ECMA6中, 曾经有提案为历史平反, 将`type null`的值纠正为`null`, 但最后提案被拒了.
// 理由是历史遗留代码太多, 不想得罪人, 不如继续将错就错当和事老
```


## 二、对象类型
### 对象类型
* 在javascript中, 除了原始类型，其他的都是对象类型，对象类型储存的是地址，而原始类型储存的是值。

```js
let a = []
let b = a
a.push(1)
console.log(b) // 输出:1
```

以上代码中,创建一个对象类型a(数组),将a的栈储存地址赋值给了变量b，此时修改a的值，打印出b的值也同步发生了改变,因为他们在内存中使用的同一个地址，改变其中任意变量的值，都会影响其他变量的值

### 对象当做函数参数

```js
function Person(person) {
    person.age = 24
    person = {
        name: '韩梅梅',
        age: 18
    }
    return person
}

let lilei = {
    name: '李雷',
    age: 18
}
let user = new Person(lilei)
console.log(lilei.age) //输出: 24
console.log(user.age)  //输出: 18
```

* 在Person函数中，person传递的是对象`lilei`的指针(指向地址)
* 在Person函数内部，改变person的属性值，会同步反应到对象`lilei`上,此时`lilei.age`属性发生改变，既值为24
* 在Person函数内部，将person重新分配一个新的内存地址，此时该`person`和形参`person`没有任何关联了，并返回这个最新`person`对象


### 对象转原始类型
对象转原始类型，会调用内置的[ToPrimitive]函数，对于该函数而言，其逻辑如下：

1. 是否已经是原始类型，是则直接返回
2. 调用`valueOf()`，如果转换为原始类型，则返回
3. 调用`toString()`，如果转换为原始类型，则返回
4. 也可以重写`Symbol.toPrimitive()`方法，优先级别最高
5. 如果都没有返回原始类型，会报错

```js
let obj = {
    value: 0,
    valueOf() {
        return 1;
    },
    toString() {
        return '2'
    },
    [Symbol.toPrimitive]() {
        return 3
    }
}
console.log(obj + 1); // 输出:4
```

## 三、储存区别
基本类型类型和引用类型类型存储在内存中的位置不同：

* 基本数据类型存储在栈中
  
* 引用类型的对象存储于堆中
  
* 当我们把变量赋值给一个变量时，解析器首先要确认的就是这个值是基本类型值还是引用类型值

### 基本类型
```js
let a = 10;
let b = a; 
b = 20;
console.log(a) //输出: 10

// a的值为一个基本类型，是存储在栈中，将a的值赋给b，虽然两个变量的值相等，但是两个变量保存了两个不同的内存地址
```
<div style="text-align: left">
  <img :src="'/data_type_1.png'">
</div>

### 引用类型
```js
var obj1 = {}
var obj2 = obj1;
obj2.name = "李雷";
console.log(obj1.name); // 输出: 李雷

// 引用类型数据存放在堆对内中，每个堆内存中有一个引用地址，该引用地址存放在栈中
// obj1是一个引用类型，在赋值操作过程汇总，实际是将堆内存对象在栈内存的引用地址复制了一份给了obj2，实际上他们共同指向了同一个堆内存对象
// 所以更改obj2会对obj1产生影响
```
<div style="text-align: left">
  <img :src="'/data_type_2.png'">
</div>



## 四、案例
### 如何使 a==1 && a==2 && a==3 为 'true'
```js
let a = {
    value: 0,
    valueOf() {
        this.value++;
        return this.value
    }
}
console.log(a == 1 && a == 2 && a == 3) // 输出:true

// **代码分析**：

//1. 重写对象`a`的`valueOf()`方法，使`value`属性每次调用时自增
//2. 当判断`a==1`时，第一次调用`valueOf()`方法，此时`value`等于1，判断`1==1`
//3. 判断`a==2`时，第二次调用`valueOf()`方法，此时`value`等于2，判断`2==2`
//4. 判断`a==3`时，第三次调用`valueOf()`方法，此时`value`等于3，判断`3==3`
//5. `true && true && true`, 所以打印`true`
```

### new操作中发生了什么
```js
// 1. 创建一个空对象
// 2. 将构造函数的作用域赋给新对象（因此this就指向了这个新对象）
// 3. 执行构造函数中的代码(为这个新对象添加属性)
// 4. 最后返回 this 指向的新对象，也就是实例(如果没有手动返回其他的对象)
```