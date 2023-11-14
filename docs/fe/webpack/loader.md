# 自定义Loader
:::warning 我们使用了很多的loader，那么那些loader是哪里来的？ 我们能不能写自己的loader然后使用？
答案当然是可以的，Webpack 为我们提供了一些loader的API，通过这些API我们能够编写出自己的loader并使用。
:::
 
:::tip 如何编写及使用自己的Loader
我们需要把.js文件中，所有出现`hello_world`，改成`hello_React`
:::

首先在项目根目录新建一个`replaceLoader.js`文件
:::tip 说明
* 编写`loader`时，`module.exports`是固定写法，并且它只能是一个普通函数，不能写箭头函数
* `source`是打包文件的源文件内容
:::
```js
// replaceLoader.js
module.exports = function(source) {
    return source.replace('hello_world', 'hello_React');
}

// index.js 下编写jsx代码
import React from 'react'
import ReactDOM from 'react-dom';
function App() {
    return (
        <div>hello_world</div>
    )
}
ReactDOM.render(<App/>, document.getElementById('app'));
```
配置自定义loader方法，直接在use中引入对应loader文件
```js {7}
module.exports = {
    rules: [
        {
            test: /\.js$/,
            use: [
                ...
                { loader:path.resolve(__dirname, './replaceLoader.js')}
            ]
        }
    ]
}
```
使用`resolveLoader`，它告诉了`Webpack`使用`loader`时，应该去哪些目录下去找，默认是`node_modules`，做了此项配置后，我们就不用去显示的填写其路径了，因为它会自动去对应文件夹下面去找
```js {3,10}
module.exports = {
    resolveLoader: {
        modules: ['node_modules', './']
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                use: [
                    {loader: 'replaceLoader'}
                ]
            }
        ]
    }
}
```
此时打包之后，页面正常显示出`hello_React`

#### 如何向Loader传参及返回多个值
1. 如何传递参数
在使用loader的时候，可以写成如下的形式：
```js
{
  test: /\.js$/,
  use: [{
    loader: 'replaceLoader',
    options: {
        name: '稻香-周杰伦'
    }
  }]
}
```
再使用`options`传递参数后，我们可以使用官方提供的`loader-utils` (opens new window)来获取`options`参数，可以像下面这样写：
```js
const loaderUtils = require('loader-utils');

module.exports = function(source) {
    let options = loaderUtils.getOptions(this);
    return source.replace('hello_world', options.name);
}
```
此时再次进行打包，原来的`hello_React`变成了`稻香-周杰伦`

#### 如何在Loader中写异步代码
在上面的例子中，我们都是使用了同步的代码，那么如果我们有必须异步的场景，该如何实现呢？我们不妨做这样的假设，先写一个`setTimeout`：
```js
const loaderUtils = require('loader-utils');

module.exports = function(source) {
    let options = loaderUtils.getOptions(this);
    setTimeout(() => {
        let result = source.replace('hello_world', options.name);
        return this.callback(null, result);
    }, 0);
}
```
:::danger 此时打包之后会报错:`throw new Error("callback(): The callback was already called.");`
解决办法是：使用this.async()主动标识有异步代码：
:::
```js {5,8}
const loaderUtils = require('loader-utils');

module.exports = function(source) {
    let options = loaderUtils.getOptions(this);
    let callback = this.async();
    setTimeout(() => {
        let result = source.replace('hello_world', options.name);
        callback(null, result);
    }, 0);
}
```
#### 如何返回多个值
:::tip 说明
`webpack`的API允许我们使用`callback(error, result, sourceMap?, meta?)`返回多个值，它有四个参数：

* `Error || Null` ：错误类型， 没有错误传递`null`
* `result` ：转换后的结果
* `sourceMap`：可选参数，处理分析后的`sourceMap`
* `meta`: 可选参数，元信息
:::
