# 脚手架介绍

#### 脚手架本质是一个操作系统的客户端，他通过命令执行

```sh
vue create vue-app
```
主要由3个命令组成：
* 主命令:`vue`
* command:`create`
* command的参数param: `vue-app`

::: tip
表示创建一个vue项目，项目名称位vue-app, 如果当前目录已经有文件了，我们需要覆盖当前目录下的文件，强制进行安装vue项目，可以使用--force参数

vue create vue-app --force

更多命令查看： vue create --help
:::

#### 脚手架执行原理
* 在终端输入`vue create vue-app`
* 终端解析出`vue`命令
* 终端在环境变量中找到`vue`命令
* 终端根据vue命令链接到实际文件`vue.js`
* 终端利用node执行`vue.js`
* `vue.js`解析command/options
* `vue.js`执行command
* 执行完成，退出


```shell
为什么全局安装`@vue/cli`后会添加的命令为`vue`?

全局安装成功之后，进入 `node/bin` 目录下会存在多个软连接文件,
其中`vue`软连接指向的是`/lib/node_modules/@vue/cli/bin/vue.js`
那么这个绑定关系是如何指定的？在`/lib/node_modules/@vue/cli`下的package.json存在bin配置
这个配置就是安装完成之后软连接的名称和指向地址

全局安装 `@vue/cli` 发生了什么?
首先将包安装到`node_modules下`，然后查找`package.json`文件中的bin配置，如果找到该配置，那么就会在`node/bin`
下根据`package.json`中的配置创建软连接名称和地址

为什么vue指向一个js文件，我们确可以直接通过vue命令去直接执行它？
`/lib/node_modules/@vue/cli/bin/vue.js` 第一行有申明命令 `#!/usr/bin/env node` 表示为用node去执行这个文件
```

```shell

// 链接本地脚手架
cd you-cli-dir
npm link

// 链接本地库文件
cd you-lib-dir
npm link
cd you-cli-dir
npm link you-lib

// 取消链接本地库文件
cd you-lib-dir
npm unlink
cd you-cli-dir

// 如果link 存在
npm unlink you-lib
// 如果link 不存在
rm -rf node_modules

npm install
```

