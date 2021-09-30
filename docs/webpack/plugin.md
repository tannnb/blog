# 自定义插件
在`webpack`运行过程中，会存在一个生命周期，而在生命周期中webpack会广播出许多事情，而在`plugin`中是可以监听到这些事件，因此plugin是可以实现在合适的时机通过Webpack提供的API去实现一些动作

正常情况下，一个`plugin`是一个类，并且里面会有一个`apply`函数，而在`apply`函数中会接收到一个`compiler`参数，里面包含了关于webpack环境所有的配置信息。
```js
class copyWebpackPlugin {
    constructor() {
    }
    apply (compiler) {}
}
```

在compiler中会暴露很多生命周期钩子函数，具体的可以查看文档[webpack/compiler](https://www.webpackjs.com/api/compiler-hooks/)。我们可以通过以下方式去访问钩子函数
```js
compiler.hooks.someHook.tap(...)
```

在`tap`方法中，接收两个参数，一个是该`plugin`的名称，一个是`回调函数`，而在回调函数中，又会接收到一个`compilation`参数。
```js
class copyWebpackPlugin {
    constructor() {
    }
    apply (compiler) {
        compiler.hooks.compile.tap("copyWebpackPlugin", (compilation) => {
            console.log(compilation)
        })
    }
}
```
`compilation`对象包含了当前的模块资源、编译生成资源、变化的文件等。当运行`webpack`开发环境中间件时，每当检测到一个文件变化，就会创建一个新的`compilation`，从而生成一组新的编译资源。`compilation`对象也提供了很多关键时机的回调，以供插件做自定义处理时选择使用。

`compilation`也暴露了许多的钩子，具体的话可以查看文档[webpack/compilation](https://www.webpackjs.com/api/compilation-hooks)


:::tip 场景
编写我们自己的plugin的场景是在打包后的dist目录下生成一个fileSize.txt文件
:::
首先在根目录下创建一个`copyWebpackPlugin.js`文件
```js
class copyWebpackPlugin {
    constructor() {
        console.log('准备计算文件大小...');
    }
    apply(compiler) {
        compiler.hooks.emit.tap('copyWebpackPlugin',compilation => {
            let str = ''
            for (let filename in compilation.assets) {
                str += `${filename} -> ${compilation.assets[filename]['size']() / 1000}KB\n`
            }

            // 新建fileSize.txt
            compilation.assets['fileSize.txt'] = {
                // 内容
                source: function () {
                    return str
                }
            }
        })
    }
}
module.exports = copyWebpackPlugin
```
使用我们的插件
```js {1,5}
const copyWebpackPlugin = require('./copyWebpackPlugin.js');
module.exports = {
    ...
    plugins: [
        new copyWebpackPlugin() // new自己的插件
    ] 
}
```
此时运行打包命令，会在dist中生成`fileSize.txt`文件
:::details fileSize.txt
``` text
assets/iconfont-a0487d.ttf -> 4.596KB
assets/iconfont-6449d5.woff2 -> 2.6KB
assets/iconfont-d8c491.woff -> 3.144KB
assets/main-248e1c.css -> 1.753KB
assets/main-7c6a1a.js -> 3.885KB
assets/index-15134d.js -> 1132.62KB
assets/image-965c1e.jpg -> 272.467KB
index.html -> 0.322KB
```
:::

#### 如何传递参数?
```js {6,14}
// webpack.config.js
module.exports = {
    ...
    plugins: [
        new copyWebpackPlugin({
            name:'稻香-周杰伦'
        })
    ] 
}

// copyWebpackPlugin.js
class copyWebpackPlugin {
    constructor(options) {
        console.log(options.name);
    }
    apply(compiler) {

    }
}
module.exports = copyWebpackPlugin;
```
