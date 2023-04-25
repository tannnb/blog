# 概念

`TypeScript`是`JavaScript`的一个超集，主要提供了类型系统和对ES6的支持。
:::tip 优势

* 能在开发过程中更快的发现潜在问题。
* 对编辑器更友好的代码提示功能。
* 代码语义更清晰易懂
  :::

# 安装和编译

#### Node.js

你首先需要在官网[Node.js](https://nodejs.org/zh-cn/) (opens new window)按照你电脑的操作系统下载对应的Node版本进行安装。

#### Typescript

```shell 
$ npm install -g typescript  // 全局安装
# yarn global add typescript

# 安装完毕后，查看版本号
$ tsc -v
```

创建一个空文件夹，并且生成初始化文件:`tsc --init`生成`tsconfig.js`配置文件，并写下基础ts代码,进行编译

```ts
const price: number = 100
console.log(price)
```

执行`tsc index.ts`,可以看到会生成一个`index.js`同名文件,并且命令行输出了所打印信息
:::tip 不需要编译成js的前提下，可以直接执行 ts 代码吗？ 需要使用`ts-node`库来提供支持:

* npm install ts-node

* ts-node index.ts

此时命令行输出了所打印信息
:::

::: warning 每次改动都要手动去执行编译，这样很麻烦，有没有可以实时监听并编译？
执行watch即可每次文件变动ts会自动编译成js： tsc --watch index.ts
:::











