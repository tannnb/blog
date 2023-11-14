# 参数配置
webpack其实有一个配置文件 (webpack.config.js)

:::warning 但为什么前面的初始化测试时，我们没有编辑配置文件却可以成功打包？
这是因为webpack会有一个默认配置，当它检测到我们没有配置文件的时候，它默认会使用自己的默认配置。
:::
```js
// 默认配置大概长这样
const path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
};
```

## entry 和 output 

`entry`是用来配置入口文件的，他可以是字符串,数组或者对象类型。webpack默认只支持`js`和`json`文件作为入口文件

`output`选项是设置输出配置，该选项必须是对象类型，不能是其它类型格式。在output对象中，必填的两个选项就是导出路径path和导出bundle文件名称filename。其中path选项必须为绝对路径。

```js
// 1.单入口输出
// 完整写法 { main:'./src/index.js' }
{
    entry: './src/index.js'
}

// 2.多入口单输出
// 注:当项目需要有多个入口文件，但只需要一个输出bundle的时候，这时候entry可以使用数组的形式
{ 
    entry: ['./src/index_1.js', './src/index_2.js']
}

// 3.多入口多输出
{
    index: "./src/index.js",  // chunkName为index
    main: "./src/main.js"     // chunkName为main 
}
``` 
针对对入口方式，我们的output。filename不能写死一个固定文件，这时webpack提供了一个占位符`[name]`给我们使用,他会制动替换为对应的chunkName
```js
{
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'  // [name]占位符会自动替换为chunkName
    }
}
```
* 1.在单入口输出的场景下，`entry`也可以使用对象的形式，从而来自定义`chunkName`，然后`output.filename`也使用`[name]`占位符来自动匹配。当然也可以使用数组
* 2.当`entry`使用数组或字符串的时候，`chunkName默认为main`，<b>因此如果`output.filename`使用`[name]`占位符的时候，也会自动替换为main</b>。


## mode
在前面的打包测试的时候，命令行都会报一个警告：
```shell
The 'mode' option has not been set, webpack will fallback to 'production' for this value.
Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
```

这是因为webpack需要我们配置`mode`选项，如果不配置则将会有警告提示：

webpack给我们提供了三个选项，即`none`、`development`和`production`，而默认就是`production`

区别：于webpack自带的代码压缩和优化插件使用
* `none`：不使用任何默认优化选项；
  
* `development`：指的是开发环境，会默认开启一些有利于开发调试的选项，比如NamedModulesPlugin和NamedChunksPlugin，分别是给module和chunk命名的，而默认是一个数组，对应的chunkName也只是下标，不利于开发调试
  
* `production`：指的是生产环境，则会开启代码压缩和代码性能优化的插件，从而打包出来的文件也相对none和development小很多

:::tip 当我们设置mode之后，我们可以在process.env.NODE_ENV获取到当前的环境

另一种方式则是在命令行中加上mode配置方式:`--mode`

`"build":"webpack --mode production"`
:::


## devtool
开启sourceMap调试，与代码映射位置。而我们可以在配置文件中，使用devtool开启它
```js {4}
const path = require('path');

module.exports = {
    devtool: "source-map"  // 开启source-map
};
```  
由于配置项太多，这里只说最常见的几项,完整配置可查看 [webpack/devtool](https://webpack.docschina.org/configuration/devtool/#root)
* none：不会生成sourceMap；

* eval：每个模块都会使用eval()执行，不建议生成环境中使用；

* cheap-source-map：生成sourceMap，但是没有列映射，则只会提醒是在代码的第几行，不会提示到第几列；

* inline-source-map：会生成sourceMap，但不会生成map文件，而是将sourceMap放在打包文件中。

:::tip 建议配置
##### 开发时可以配置cheap-module-eval-source-map方便调试错误与定位
devtool: 'cheap-module-eval-source-map'

##### 生产时一般关闭devtool 或者使用 cheap-module-source-map
devtool: 'cheap-module-source-map'
:::

## module
前面有提到过，webpack的入口文件只能接收`JavaScript`文件和`JSON`文件
  
但我们通常项目还会有其他类型的文件，比如html、css、图片、字体等等，这时候我们就需要用到第三方loader来帮助webpack来解析这些文件。

理论上只要有相应的loader，就可以处理任何类型的文件。

:::tip 提示
在[webpack/loader](https://webpack.docschina.org/loaders/)中其实提供了很多loader，已经能满足我们日常使用。

或者也可以去github找他人写的loader或者自己手写loader来使用。
:::
而对于`loader`的配置，是写在`module`配置内的。`module`选项是一个对象，它里面有一个`rules`属性，是一个数组，在里面我们可以配置多个匹配规则。
```js {4-7}
{
    module:{
        rules:[
            {
                test: /\.css$/,  // 识别css文件
                use: ['style-loader', 'css-loader']  // 对css文件使用的三个loader
            }
        ]
    }
}
```
:::warning use顺序要求
对于use数组的顺序是有要求的，webpack会根据从右到左(从下到上)的规则去执行loader。也就是说，上面的例子webpack会先执行css-loader，再执行style-loader。
:::  

如果我们需要对对应loader提供配置的时候，我们可以选用对象写法：
```js {7-14}
module: {
    rules: [
        {
          test: /\.css$/,  
          use: [
            'style-loader', 
            {
               // loader名称
               loader: 'css-loader',
               // loader选项
               options: {
                   ... 
                }
            }
          ] 
        }
    ]
}
```

## plugins
webpack还提供了一个`plugins`选项，让我们可以使用一些第三方插件，因此我们可以使用第三方插件来实现打包优化、资源管理、注入环境变量等任务。
:::tip 提示
在[webpack/plugin](https://webpack.docschina.org/plugins/#root)中其实提供了很多plugin。
:::

plugins选项是一个数组，里面可以放入多个plugin插件
```js
{
    plugins: [
        new htmlWebpackPlugin(),
        new CleanWebpackPlugin(),
        new miniCssExtractPlugin(),
        new TxtWebpackPlugin()
    ]
}
```
:::tip 提示
对于plugins数组对排序位置是没有要求，因为在plugin的实现中，webpack会通过打包过程的生命周期钩子，因此在插件逻辑中就已经设置好需要在哪个生命周期执行哪些任务。
:::

## HTML模板
插件场景引运用: `html-webpack-plugin`

使用场景:

当我们是Web项目的时候，我们必然会存在html文件去实现页面。

而对于其他类型的文件，比如css、图片、文件等等，我们是可以通过引入入口js文件，然后通过loader进行解析打包。 而对于html文件，我们不可能将其引入到入口文件然后解析打包，反而我们还需要将打包出来的bundle文件引入html文件去使用，

因此，其实我们需要实现的操作只有两个，一个是复制一份html文件到打包路径下，另一个就是将打包出来的bundle文件自动引入到html文件中去。

```shell
npm install html-webpack-plugin -D
```
1. 在src文件下新建index.html
```html
<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>Title</title>
  </head>
  <body>
  
  </body>
</html>
```
2. 接下来配置一下webpack。一般plugin插件都是一个类，而我们需要在plugins选项中需要创建一个插件实例。对于htmlWebpackPlugin插件，我们需要传入一些配置：
* html模板地址`template`和打包出来的文件名`filename`。
```js {12-15}
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    plugins: [
       // 使用htmlWebpackPlugin插件
        new htmlWebpackPlugin({
            template: './src/index.html',    // 指定html模板
            filename: 'index.html'  // 自定义打包的文件名
        })
    ]
}
```
接下来执行一下打包，就会发现dist文件下会生成一个index.html。打开会发现，webpack会自动将打包后的bundle文件引入(这里bundle名为index)：
```html {6}
<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Title</title>
    <script defer src="index.js"></script></head>
    <body>
    
    </body>
</html>
```
如果我们有多个chunk的时候，我们可以指定该html要引入哪些chunk。在htmlWebpackPlugin配置中有一个chunks选项，是一个数组，你只需要加入你想引入的chunkName即可
```js {6,7,17}
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
       index: './src/index.js',
       main: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html',  
            filename: 'index.html',
            chunks: ["index"]  // 只引入index chunk
        })
    ]
};
```
打包完成后，dist文件下会出现`index.html`、`index.js`和`main.js`，但是`index.html`只会引入`index.js`。

> 实现多页面的话，只需要再new一个htmlWebpackPlugin实例即可
> 
::: details 简易多页配置
```js {5,6,14,15,20,21}
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        index:'./src/index.js',
        main:'./src/main.js'
    },
    mode: 'development',
    plugins: [
        // 使用htmlWebpackPlugin插件
        new htmlWebpackPlugin({
            // 指定html模板
            template: './src/index.html',
            chunks: ["index"],  // 只引入index chunk
            filename: 'index.html'
        }),
        new htmlWebpackPlugin({
            // 指定html模板
            template: './src/index.html',
            // chunks: ["main"],  // 如果不指定，会引入index.js main.js等bundle
            filename: 'main.html'
        })
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
};
```
:::

## 清理打包路径
在每次打包前，我们其实都需要去清空一下打包路径的文件。

如果文件重名的话，webpack还会自动覆盖，但是实际中我们都会在打包文件名称中加入哈希值，因此必须清空文件重新生成。

这时候我们需要使用一个插件——`clean-webpack-plugin`。
```shell
npm install clean-webpack-plugin -D
```
添加配置
```js {13}
const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: '[name].js',
        publicPath: ''
    },
    plugins: [
        // 使用CleanWebpackPlugin
        new CleanWebpackPlugin(),
    ]
}
```
有些情况下，我们不需要完全清空打包路径，这时候我们可以使用到一个选项，叫`cleanOnceBeforeBuildPatterns`，它是一个数组，默认是`[**/*]`，也就是清理output.path路径下所有东西。

而你可以在里面输入只想删除的文件，同时我们可以输入不想删除的文件，只需要在前面加上一个`!`。

:::warning 注意
`cleanOnceBeforeBuildPatterns`这个选项是可以删除打包路径下之外的文件，只需要你配上绝对路径的话。

因此CleanWebpackPlugin还提供了一个选项供测试——dry，默认是为false，当你设置为true后，它就不会真正的执行删除，而是只会在命令行打印出被删除的文件，

这样子更好的避免测试过程中误删。
:::
```js {14-18}
// 完整配置
const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: '[name].js',
        publicPath: ''
    },
    plugins: [
        new CleanWebpackPlugin({
            dry: true,   // 不会真正执行删除动作
            cleanOnceBeforeBuildPatterns: [
                '**/*',  // 删除dist路径下所有文件
                `!package.json`,  // 不删除dist/package.json文件
            ],
        }),
    ]
};
```

## 本地服务
当我们使用webpack的时候，不仅仅只是用于打包文件，大部分我们还会依赖webpack来搭建本地服务，同时利用其`热更新`的功能，让我们更好的开发和调试代码。
```shell
npm install webpack-dev-server -D
```
开启服务2中方式
* 1. `npx webpack serve`
* 2. package.json配置script命令`{ "serve": "webpack serve"}`, 然后通过npm run serve || yarn serve运行

这时，webpack会默认开启`http://localhost:8080/`服务，而该服务指向的是dist/index.html。

但你会发现，你的dist中其实是没有任何文件的，这是因为webpack将实时编译后的文件都保存到了内存当中。

#### webpack-dev-server优点
:::details webpack自带提供了 --watch 命令，可以实现动态监听文件的改变并实时打包，输出新的打包文件，但这种方案存在着几个缺点

1.每次进行修改代码，webpack就会全部文件进行重新打包，这时候每次更新打包的速度就会慢了很多

2. 其次，这样的监听方式做不到热更新，即每次你修改代码后，webpack重新编译打包后，你就得手动刷新浏览器，才能看到最新的页面结果。
:::
:::details 而webpack-dev-server，却有效了弥补这两个问题

1.webpack-dev-server使用了express启动了一个http服务器，并且引入资源文件

2.然后这个http服务器和客户端使用了websocket通讯协议，当原始文件作出改动后，webpack-dev-server就会实时编译，然后将最后编译文件实时渲染到页面上
:::

#### webpack.config.js中，有一个`devServer`选项是用来配置webpack-dev-server，这里简单介绍几个比较常用的配置。[webpack/DevServer](https://webpack.docschina.org/configuration/dev-server/#root)
```js {4-13}
module.exports = {
    ...
    // 配置webpack-dev-server
    "devServer": {
        open: true,    
        port: 8888,
        proxy: {
            '/api': 'http://localhost:9000',  // 代理地址
            'pathRewrite': { '^/api': '' },   // 重写路径
             secure: false,  // 使用https
             changeOrigin: true   // 覆盖主机源
        },
    }
}

// port: 设置服务器端口号
// open: 默认是为false，当你设置为true的时候，你每次运行webpack-dev-server就会自动帮你打开浏览器
// proxy: 设置本地开发的跨域代理。(proxy的值必须是一个对象，在里面我们可以配置一个或多个跨域代理)
```
:::details proxy配置信息那点事儿
```js
// 当你请求/api/users的时候，就会代理到http://localhost:9000/api/users

// 如果配置了pathRewrite,比如{ '^/api': '' } ,那么请求/api/users的时候，就会代理到http://localhost:3000/users

// changeOrigin: 默认情况下，代理时会保留主机头的来源，当我们将其设置为true可以覆盖这种行为

// secure: 当你的接口使用了https的时候，需要将其设置为false
```
:::

## CSS处理(css-loader)
我们解析css需要用到的loader有`css-loader`和`style-loader`。css-loader主要用来解析css文件，而style-loader是将css渲染到DOM节点上
```shell
npm install css-loader style-loader -D
```
:::details 操作步骤
1. 在src下新建一个css文件
```css
body {
    background: black;
    color: white;
}
```
2. 在index.js 引入该css文件
```js
import './index.css' 
console.log('hello webpack 5')
```
3. 配置css-loader
```js {5-8}
module.exports = {
   ...
  module: {
    rules: [
      {
        test: /\.css$/,  // 识别css文件
        use: ['style-loader', 'css-loader']  // 先使用css-loader,再使用style-loader
      }
    ]
  },
  ...
};
```
:::

执行打包命令，会发现dist路径下只有main.js和index.html。使用配置好的devServer来快速启动查看效果，此时打开页面发现css已经生效了。
:::warning 为什么没有看到打包后的css文件呢?
这是因为style-loader是将css代码插入到了main.js当中去了
:::
#### 那么我们不想将css代码放进js中，而是直接导出一份或多份css文件，那该怎么做？ 这就得使用另一个插件—— `mini-css-extract-plugin`
```js {8,16}
const miniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    miniCssExtractPlugin.loader,  // 使用miniCssExtractPlugin.loader替换style-loader
                    'css-loader'
                ]
            }
        ]
    }, 
    plugins: [
        new miniCssExtractPlugin({
           filename: "[name].css"  // 设置导出css名称，[name]占位符对应chunkName
        })
    ]
};
// 注:这里我们不再使用style-loader，而是使用miniCssExtractPlugin提供的loader
```

#### 接下来打包一下，dist路径下就会多出一个main.css文件，并且在index.html中也会自动引入
```html {6-7}
<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Title</title>
        <script defer src="index.js"></script>
        <link href="index.css" rel="stylesheet">
    </head>
    <body>
    
    </body>
</html>
```

## CSS添加浏览器前缀
当我们使用一下css新特性的时候，可能需要考虑到浏览器兼容的问题，这时候可能需要对一些css属性添加浏览器前缀。而这类工作，其实可以交给webpack去实现。准确来说，是交给`postcss`去实现。
> postcss对于css 等于 babel对于JavaScript，它专注于对转换css，比如添加前缀兼容、压缩css代码等等
```shell
npm install postcss postcss-loader -D
```
:::details 配置步骤与解释
1. 首先在webpack配置文件先引入postcss-loader，它的顺序必须要在css-loader之前执行
```js {2-5}
rules: [
    {
        test: /\.css$/,
        // 引入postcss-loader
        use: [miniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
    }
]
```
2.接下来配置postcss的工作，就不在webpack的配置文件里面了。 postcss自身也是有配置文件的，我们需要在项目根路径下新建一个postcss.config.js。

然后里面也有一个配置项，为plugins这也意味着，postcss自身也支持很多第三方插件使用
```js
module.exports = {
    plugins: []
}
```
3. 我们想实现的添加前缀的功能，需要安装的插件叫`autoprefixer`。
```shell
npm install autoprefixer -D
```
```js {4-9}
module.exports = {
    plugins: [
        // 将css编译为适应于多版本浏览器
        require('autoprefixer')({
            // 覆盖浏览器版本
            // last 2 versions: 兼容各个浏览器最新的两个版本
            // > 1%: 浏览器全球使用占有率大于1%
            overrideBrowserslist: ['last 2 versions', '> 1%']
        })
    ]
}

```
#### 关于overrideBrowserslist的选项，我们可以去参考一下browserslist。
此时我们打包出来的css如下
```css 
body {
    background: black;
    color: white;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}
```
:::


## 压缩CSS代码
当我们需要压缩css代码的时候，可以使用postcss另一个插件——`cssnano`。
```shell
npm install cssnano -D
```
还是在配置文件`postcss.config.js`中引入
```js {4}
module.exports = {
    plugins: [
        ...,
        require('cssnano')
    ]
}
```
#### 打包之后css压缩代码
```css
body{display:-webkit-box;display:-ms-flexbox;display:flex}
```

## CSS预处理器
在我们实际开发中，我们会更多使用`Sass`、`Less`或者`stylus`这类css预处理器。而其实html是无法直接解析这类文件的，因此我们需要使用对应的loader将其转换成css

> 本人日常使用最多的是sass, 就以`sass`为例，来讲一下如何使用webpack解析sass

```shell
npm install sass sass-loader -D
```
:::details sass-loader 配置步骤与解释
1. 在module加上sass的匹配规则，sass-loader的执行顺序应该是排第一，我们需要先将其转换成css，然后才能执行后续的操作,比如添加前缀等
```js {2-5}
rules: [
    {
        test: /\.(css|scss|less)$/,  // 识别css scss less文件
        use: [miniCssExtractPlugin.loader, 'css-loader',  'postcss-loader', 'sass-loader' ]
    }
]
// 先转换scss文件为css，然后给css添加前缀, 然后解析css文件，最后将css输出单独文件并挂载到html上
```
3.在src下新建一个variable.scss,并且在index.js中引入
```scss
$color-white: #fff;
$color-black: #222;

body {
  background: $color-black;

  div {
    color: $color-white;
  }
}
```
4.执行打包，再看看打包出来的index.css，scss文件内容被解析到里面，同时如果我们引入多个css或css预处理器文件的话，miniCssExtractPlugin也会将其打包成一个bundle文件里面
```css
#app{color:aqua}
body{background:#222}body div{color:#fff}
```
```scss
import './index.css'
import './variable.scss'
console.log('hello webpack 5')
```
:::

:::warning node-sass 下载失败 解决方案
在项目下添加.npmrc 或者 .yarnrc 并填写下方地址信息

sass_binary_site=https://npm.taobao.org/mirrors/node-sass/

registry=https://registry.npm.taobao.org
:::

## 静态资源处理
当我们使用了图片、视频或字体等等其他静态资源的话，我们需要用到`url-loader`和`file-loader`
```shell
npm install url-loader file-loader -D
```

首先我们在项目中引入一张图片，然后在引入到index.js中。
:::details url-loader 配置与解释
```js
import pic from "./image.png";

const img = new Image();
img.src= pic;
document.querySelector('body').append(img);
```

```js {5-8}
module.exports = {
  ...
  module: {
    rules: [
      {
        test: /\.(png|je?pg|gif|webp)$/,
        use: ['url-loader']
      }
    ]
  }
}
```
#### 此时dist路径下没有图片文件，但是你打开页面是可以看到图片的，且通过调试工具，我们可以看到其实url-loader默认会将静态资源转成base64

`url-loader`选项有提供一个属性，叫`limit`，就是我们可以设置一个文件大小阈值，当文件大小超过这个值的时候，`url-loader`就不会转成`base64`，而是直接打包成文件。执行打包,可以看到dist目录下出现了图片文件
```js {6-12}
module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|je?pg|gif|webp)$/,
        use: [{
          loader: 'url-loader',
          options: {
            name: '[name].[ext]',   // 使用占位符设置导出名称
            limit: 1024 * 10        // 设置转成base64阈值，大于10k不转成base64
          }
        }]
      }
    ]
  }
}
```

#### 那么如果我项目中存在视频文件，字体文件该怎么打包呢?
```js
module.exports = {
  module: {
    rules: [
      // 图片
      {
        test: /\.(png|je?pg|gif|webp)$/,
        use: {
          loader: 'url-loader',
          options: {
            esModule: false,
            name: '[name].[ext]',
            limit: 1024 * 10
          }
        }
      },
      // 字体
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name].[ext]',
            limit: 1024 * 10
          }
        }
      },
      // 媒体文件
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name].[ext]',
            limit: 1024 * 10
          }
        }
      }
    ]
  }
};
```
:::


:::details file-loader其实跟url-loader差不多，但它默认就是导出文件，而不会导出base64的
```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|je?pg|gif|webp)$/,
        use: ['file-loader']
      }
    ]
  }
}
```
会发现dist文件夹下依旧会打包成一个图片文件，但是它的名称会被改成哈希值，但是我们可以通过options选项来设置导出的名称
```js {8-10}
module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|je?pg|gif|webp)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',   // 使用占位符设置导出名称,如果不设置那么名称是自动生成的hash值
          }
        }]
      }
    ]
  }
}
```
:::


:::warning 问题：如果直接在index.html引入图片的话，可以顺利打包吗？
结论：页面找不到该图片地址。

运行打包出来的文件，发现`<img src="./image.png">`,浏览器并没有解析和打包出来,这时候需要使用另一个插件 `html-withimg-loader`
:::
```shell
npm install html-withimg-loader -D
```

:::details 配置 html-withimg-loader 规则与操作
1. 添加html解析规则，此时直接执行打包命令，图片还是展示不出来。然后通过调试工具看的话，会发现显示的是 `<img src="{"default":"image.png"}">` 这是什么原因？

因为`html-loader`使用的是`commonjs`进行解析的，而`url-loader`默认是使用`esModule`解析的。因此我们需要设置一下`url-loader`
```js {4-5}
{
  rules:[
     { 
       test: /\.html$/,
       loader: 'html-withimg-loader' 
       }
  ]
}
```
2. 修改url-loader配置
```js {8}
{
  rules:[
      {
          test: /\.(png|je?pg|gif|webp)$/,
          use: {
              loader: 'url-loader',
              options: {
                  esModule: false,  // 不使用esModule解析
                  name: '[name].[ext]',
                  limit: 1024 * 10
              }
          }
      }
  ]
}
```
此时在执行打包命令，可以看到图片正常显示出来了，也能正常找到引用地址。
:::

## 资源模块
在webpack5中，新添了一个资源模块，它允许使用资源文件（字体，图标等）而无需配置额外 loader，内容太多 :smile: 具体的内容查看 [webpack/asset-modules](https://webpack.docschina.org/guides/asset-modules/)

前面的例子，我们对静态资源都使用了`url-loader`或者`file-loader`，而在webpack5，我们甚至可以需要手动去安装和使用这两个loader，而直接设置一个`type`属性。

:::details 修改静态资源配置
```js
rules:[
    
    // {
    //     test: /\.(png|je?pg|gif|webp)$/,
    //     use: [{
    //         loader: 'url-loader',
    //         options: {
    //             esModule: false,  // 不使用esModule解析
    //             name: '[name].[ext]',   // 使用占位符设置导出名称
    //             limit: 1024 * 10  // 设置转成base64阈值，大于10k不转成base64
    //         }
    //     }]
    // },
    
      {
          test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
          type: "asset/resource",
      }
  ]
```

3. 打包出来的文件名师hash值，我们可以配置`bundle`静态文件名称,此时静态文件名称就显示正常了
```js {5}
{
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: '[name].js',
        assetModuleFilename: '[name][ext]'   // 设置静态bundle文件的名称
    }
}
```

然后打包测试后，静态文件都会直接打包成文件并自动引入，`效果跟file-loader一致`

#### `type`有4种新的模块类型,来替换所有这些 loader：
* `asset/resource`：发送一个单独的文件并导出 URL。之前通过使用 `file-loader` 实现。
* `asset/inline`：导出一个资源的 data URI。之前通过使用 `url-loader` 实现。
* `asset/source`：导出资源的源代码。之前通过使用 `raw-loader` 实现。
* `asset`：在导出一个 data URI 和发送一个单独的文件之间自动选择。之前通过使用 `url-loader`，并且配置资源体积限制实现。
:::
  
## 配置Babel处理es6
为了兼容多浏览器转义，因此我们需要用到`babel`, 同时，我们需要使用babel中用于JavaScript兼容的插件
```shell
npm install babel-loader -D

npm install @babel/preset-env @babel/core core-js -D
```

:::details babel配置与步骤
1. 配置js文件解析转义
```js {4-5}
{
    rules:[
        {
            test: /\.js$/,
            use: ['babel-loader']
        }
    ]
}
```
2. 配置babel。当然我们可以直接在`webpack.config.js`里面配置，但是babel同样也提供了配置文件`.babelrc`，babel的配置特别多，所以一般会在根目录下创建一个`.babelrc`文件单独配置
```js
{
  "presets": [
    [
      "@babel/preset-env",
      {
        // 浏览器版本
        "targets": {
          "edge": "17",
          "chrome": "67"
        },
        // 配置corejs版本，但需要额外安装corejs
        "corejs": 3,
          
        // 加载情况
        // entry: 需要在入口文件进入@babel/polyfill，然后babel根据使用情况按需载入
        // usage: 无需引入，自动按需加载(推荐)
        // false: 入口文件引入，全部载入
        "useBuiltIns": "usage"
      }
    ]
  ]
}
```
3. 在index.js中,编写一些es6的代码打包之后，控制台能正常输出结果
```js
new Promise(resolve => {
    resolve('Hello babel')
}).then(res => {
    console.log(res);
})
let result = Object.assign({} ,{id:10086})
console.log("客服电话:", result)
```
上面打包代码是直接使用了`Promise`,`assign`，而没有考虑到低版本浏览器的兼容。然后我们打开babel后，执行一下打包命令，会发现代码多出了很多。

而在打包代码中，可以看到webpack使用了`polyfill(垫片)`实现promise类，然后再去调用，从而兼容了低版本浏览器没有promise属性问题
:::

## 配置React
webpack要解析react需要借助`@babel/preset-react` 来实现
```shell
npm install @babel/preset-react -D
```
:::warning 注意
在.babelrc中配置presets时，注意：一定是从下往上，先执行"@babel/preset-react"解析jsx格式语法，在通过"@babel/preset-env"解析es6成es5的语法
:::

尝试一下react写法，首先安装核心库`react`,`react-dom`
```shell
npm install react react-dom -S
```

在`index.js`尝试添加如下代码，可以看到页面正正确显示`hello React`，以及打印出`componentDidMount`
```js
import React,{useEffect} from 'react'
import ReactDom from 'react-dom'

function App() {
    useEffect(() => {
        console.log('componentDidMount')
    },[])
    return <div>hello React</div>
}

ReactDom.render(<App />,document.getElementById('root'))
```


## 文件归类

:::details 我们的测试代码中，我们的src文件夹如下：
```text
├── src
│   ├── image.jpg
│   ├── index.html
│   ├── index.js
│   ├── index.css
│   ├── iconfont.css
│   ├── iconfont.ttf
│   └── variable.scss
```
:::

:::details 而正常项目的话，我们会使用文件夹将其分好类,如下方显示
```text
├── src
│   ├── index.html
│   ├── js
│   │   └── index.js
│   ├── static
│   │   └── image.png
│   │   └── iconfont.ttf
│   │   └── iconfont.css
│   └── style
│       ├── index.css
│       └── variable.scss
```
:::

:::details 文件归类步骤与解析
1. 首先，我们先将打包出来的JavaScript文件放入`assets`文件夹下，我们只需要修改`output.filename`即可
```js {4}
{
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'assets/[name].js'
    }
}
```
2. 其次，我们将打包出来的`css`文件也放入`assets`路径下，因为我们打包css是使用`miniCssExtractPlugin`，因此我们只需要配置一下`miniCssExtractPlugin`的`filename`即可
```js {5}
{
   plugins: [
      ...
      new miniCssExtractPlugin({
        filename: "assets/[name].css"
      })
   ]
}
```
3. 最后就是静态资源了，这里我们使用静态模块方案，所以直接修改`output.assetModuleFilename`即可
```js {5}
{
   output: {
      path: path.resolve(__dirname, 'dist/'),
      filename: 'assets/[name].js',
      assetModuleFilename: 'assets/[name][ext]'
    }
}
```
此时打包之后，预览一下页面，发现都正常引入和使用。
:::


## 哈希值
通常，我们打包文件的文件名都需要带上一个哈希值，这会给我们的好处就是`避免缓存`,webpack也提供了三种哈希值的策略。

#### 文件调整
```js
// index.js
import pic from "../static/image.jpg";
const img = new Image();
img.src= pic;
img.width = 40
document.querySelector('body').append(img);

// main.js
import '../style/index.css'
import '../style/variable.scss'


// webpack.config.js
entry: {
    index: './src/js/index.js',
    main: './src/js/main.js'
}
```




## 哈希值-hash策略
`hash策略`，是以项目为单位的，也就是说，只要项目一个文件发生改动，首先打包后该文件对应的bundle文件名会改变，其次所有js文件和css文件的文件名也会改变

首先我们需要在所有设置`filename`的地方加入`[hash]`占位符，同时我们也可以设置哈希值的长度，只需加上冒号和长度值即可，比如`[hash:6]`。
:::details 配置修改 
```js {3,4,12,17-18}
module.exports = {
    entry: {
        index: './src/js/index.js',
        main: './src/js/main.js'
    },
    module: {
        ...
    },
    plugins: [
        ...
        new miniCssExtractPlugin({
            filename: "assets/[name]-[hash:6].css"
        }),
    ],
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'assets/[name]-[hash:6].js',
        assetModuleFilename: 'assets/[name]-[hash:6][ext]'
    },
}
```
打包之后的文件大概长这样
```text
├── assets
│   ├── iconfont-73a6ce.ttf
│   ├── iconfont-468e4b.woff
│   ├── iconfont-c601d3.woff2
│   ├── image-702fc4.jpg
│   ├── index-1c6a2b.js
│   ├── main-1c6a2b.css
│   └── main-1c6a2b.js
└── index.html
```

> 为么css的名称叫main.css呢?
> 
>是因为main.js 中引入了css样式，经过webpack打包过程中，执行miniCssExtractPlugin插件钩子，将css代码从js中剔除，生成一个新css文件此时文件名称就为`"assets/[name]-[hash:6].css"`配置的名称

修改`style.css`,在重新打包测试查看文件名称,这时候会发现`index.js`、`main.js`、`main.css`的文件名都会发生改变，但静态文件并不会发生变化
```text {6-8}
├── assets
│   ├── iconfont-73a6ce.ttf
│   ├── iconfont-468e4b.woff
│   ├── iconfont-c601d3.woff2
│   ├── image-702fc4.jpg
│   ├── index-8739d8.js
│   ├── main-8739d8.css
│   └── main-8739d8.js
└── index.html
```
如果我更换一张图片，但是文件名不变，会不会改变呢？ 我们找一个其他图片还是命名 `image.jpg` 然后重新打包;

结果如下 `index.js`、`main.js`、`main.css` 的文件名依旧会发生改变，同时`image.jpg`也发生了变化。

```text {5-8}
├── assets
│   ├── iconfont-73a6ce.ttf
│   ├── iconfont-468e4b.woff
│   ├── iconfont-c601d3.woff2
│   ├── image-f8ef88.jpg
│   ├── index-5766ac.js
│   ├── main-5766ac.css
│   └── main-5766ac.js
└── index.html
```
:::tip 通过上面的测试，我们可以简单总结出
* 如果修改项目文件的话，所有的`js`、`css`打包文件的文件名都会发生变化，尽管来自多个`chunk`
* 如果修改静态文件的话，该静态文件的打包文件文件名会发生变化，并且所有的`js`、`css`打包文件的文件名也都会发生变化
:::


## 哈希值-chunkHash策略
而`chunkHash`策略的话，是以`chunk`为单位的，如果一个文件发生变化，只有那条`chunk相关的文件`的打包文件文件名才会发生变化。

:::details 配置修改

<b>! 这里注意的是`chunkhash`不适用于静态文件，因此静态文件依旧使用`hash`</b>
```js {12,17}
module.exports = {
    entry: {
        index: './src/js/index.js',
        main: './src/js/main.js'
    },
    module: {
        ...
    },
    plugins: [
        ...
        new miniCssExtractPlugin({
            filename: "assets/[name]-[chunkhash:6].css"
        }),
    ],
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'assets/[name]-[chunkhash:6].js',
        assetModuleFilename: 'assets/[name]-[hash:6][ext]'
    }
}
```
打包结果
```text {6-8}
├── assets
│   ├── iconfont-73a6ce.ttf
│   ├── iconfont-468e4b.woff
│   ├── iconfont-c601d3.woff2
│   ├── image-f8ef88.jpg
│   ├── index-91dbc3.js
│   ├── main-91dbc3.css
│   └── main-91dbc3.js
└── index.html
```
然后我们首先修改一下`style.css`，打包一下，会发现`main.css`和`main.js`都发生了变化，而<b>index.js不是一个chunk的，因此不会发生变化</b>。
```text {7-8}
├── assets
│   ├── iconfont-73a6ce.ttf
│   ├── iconfont-468e4b.woff
│   ├── iconfont-c601d3.woff2
│   ├── image-f8ef88.jpg
│   ├── index-91dbc3.js
│   ├── main-7c5a87.css
│   └── main-7c5a87.js
└── index.html
```
同样，我们再覆盖一下image.jpg，再打包一下
这时候`image.jpg`会发生变化，然后`index.js`也发生了变化，因为它们是一个chunk的，而`main.css`和`main.js`就不会发生变化。
```text {5-6}
├── assets
│   ├── iconfont-73a6ce.ttf
│   ├── iconfont-468e4b.woff
│   ├── iconfont-c601d3.woff2
│   ├── image-696218.jpg
│   ├── index-9d9520.js
│   ├── main-7c5a87.css
│   └── main-7c5a87.js
└── index.html
```
:::tip 通过上面的测试，我们可以简单总结出
* 如果修改项目文件的话，该项目文件对应的`chunk`的`js`、`css`打包文件的文件名都会发生变化
* 如果修改静态文件的话，该静态文件的`打包文件文件名`会发生变化，并且引入该静态文件对应的`chunk`的`js`、`css`打包文件的文件名也都会发生变化
:::

## 哈希值-contenthash策略
`contenthash`策略， 它是以自身内容为单位的，因此当一个文件发生变化的时候，首先它本身的打包文件的名称会发生变化，其次，引入它的文件的打包文件也会发生变化

我们将`chunkhash`改成`contenthash`

:::details 配置修改
```js
module.exports = {
    entry: {
        index: './src/js/index.js',
        main: './src/js/main.js'
    },
    module: {
        ...
    },
    plugins: [
        ...
        new miniCssExtractPlugin({
            filename: "assets/[name]-[contenthash:6].css"
        }),
    ],
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'assets/[name]-[contenthash:6].js',
        assetModuleFilename: 'assets/[name]-[contenthash:6][ext]'
    }
}
```
打包之后结果
```text 
├── assets
│   ├── iconfont-73a6ce.ttf
│   ├── iconfont-468e4b.woff
│   ├── iconfont-c601d3.woff2
│   ├── image-696218.jpg
│   ├── index-59cae7.js
│   ├── main-83beab.css
│   └── main-83beab.js
└── index.html
```

同样，我们再覆盖一下image.jpg，再打包一下
这时候`image.jpg`会发生变化，然后`index.js`也发生了变化，因为它们是一个chunk的，而`main.css`和`main.js`就不会发生变化。
打包之后结果
```text 
├── assets
│   ├── iconfont-73a6ce.ttf
│   ├── iconfont-468e4b.woff
│   ├── iconfont-c601d3.woff2
│   ├── image-84a8db.jpg
│   ├── index-e043f6.js
│   ├── main-83beab.css
│   └── main-83beab.js
└── index.html
```
同样，我们在编辑一下`main.js`，

在进行打包,查看结果只有`main.js`的打包文件会发生变化，而处于同个`chunk`的`main.css`却不会发生变化，这是因为`main.css`没有引用`main.js`。
```text 
├── assets
│   ├── iconfont-73a6ce.ttf
│   ├── iconfont-468e4b.woff
│   ├── iconfont-c601d3.woff2
│   ├── image-84a8db.jpg
│   ├── index-e043f6.js
│   ├── main-83beab.css
│   └── main-d0c1b2.js
└── index.html
```
:::tip 通过上面的测试，我们可以简单总结出
* 不管是修改项目文件还是静态文件，它本身的打包文件的文件名会发生变化，其次引用该文件的对应打包文件的文件名也会发生变化
:::

## alias命名
在配置文件中，其实有一个`resovle.alias`选项，它可以创建`import`和`require`别名，来确保模块引入变得更简单，同时webpack在打包的时候也能更快的找到引入文件。

```js 
const path = require('path');
module.exports = {
  ...
  resolve: {
    alias: {
      // 配置style路径的别名
      style: path.resolve(__dirname, 'src/style/')
    }
  }
}
```
```js {1}
import 'style/index.scss'
import '../static/iconfont.css'
```

## include与exclude
当我们使用`loader`的时候，我们可以配置`include`来指定只解析该路径下的对应文件，同时我们可以配置`exclude`来指定不解析该路径下的对应文件。
```js {8,13}
const path = require('path');
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [miniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
        include: [path.resolve(__dirname, 'src')]  // 只解析src路径下的css
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/   // 不解析node_modules路径下的js
      }
    ]
  }
}
```

## noParse
在`module.noParse`选项中，只配置不需要解析的文件。<b>通常我们会忽略一些大型插件从而来提高构建性能</b>
```js {3}
module.exports = {
  module: {
    noParse: /jquery|lodash/, 
  }
};
```

## HappyPack开启多进程Loader
`webpack`构建过程中，其实大部分消耗时间都是用到`loader`解析上面，一方面是因为转换文件数据量很大，另一方面是因为JavaScript单线程特性的原因，因此需要一个个去处理，而不能并发操作

而我们可以使用`HappyPack`，将这部分任务分解到多个子进程中去进行并行处理，子进程处理完成后把结果发送到主进程中去，从而减少总的构建时间。
```shell
npm install happypack  -D
```
```js {10-12,17-24}
const HappyPack = require("happypack");
const os = require("os");

const HappyThreadPool = HappyPack.ThreadPool({size: os.cpus().length});

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: 'happypack/loader?id=happyBabelLoader'
        }]
      }
    ]
  },
  plugins: [
    new HappyPack({
      id: 'happyBabelLoader',  // 与loader对应的id标识
      // 用法跟loader配置一样
      loaders: [
        {loader: 'babel-loader', options: {}}
      ],
      threadPool: HappyThreadPool  // 预定义线程池 | shared pool(共享线程池)
    })
  ]
};
```
## 代码压缩
当`mode`为`production`的时候，webpack打包会开启代码压缩插件，同时webpack也有提供一个`optimization`选项，让我们可以使用自己喜欢的插件去覆盖原生插件

可以使用`webpack-parallel-uglify-plugin`来覆盖原生代码压缩插件，它的一个优点就是可以`并行执行`, [webpack/uglify](https://github.com/gdborton/webpack-parallel-uglify-plugin)
```shell
npm install webpack-parallel-uglify-plugin -D
```
```js
const ParallelUglifyPlugin = require("webpack-parallel-uglify-plugin")
module.exports = {
  optimization: {
    minimizer: [
      new ParallelUglifyPlugin({
        // 缓存路径
        cacheDir: '.cache/',  
        // 压缩配置
        uglifyJS: {
          output: {
            comments: false,
            beautify: false
          },
          compress: {
            drop_console: true,
            collapse_vars: true,
            reduce_vars: true
          }
        }
      })
    ]
  }
};
```

## 配置缓存
每次执行构建都会把所有的文件都重新编译一边，我们可以将这些重复动作缓存下来提高构建速度

在`Webpack5`之前，我们都使用了`cache-loader`，而在webpack5中，官方提供了一个`cache`选项给我们带来持久性缓存。
```js {15}
let cacheConfig = {
    'development':{
        type: 'memory'  // 默认配置
    },
    'production':{
        type: 'filesystem',
        buildDependencies: {
            config: [__filename]
        }
    }
}

let process = process.env.NODE_ENV
module.exports = {
  cache: cacheConfig[process]
}
```

## analyzer打包大小分析
```shell
npm install webpack-bundle-analyzer -D
```
```js {4}
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
module.exports = {
    plugins: [
        new BundleAnalyzerPlugin()
    ]
}
```
:::warning analyzer
webpack会自动打开一个页面，显示我们打包文件的情况，通过打包报告可以很直观的知道哪些依赖包大，则可以做做针对性的修改
:::
如果不想每次运行都打开网页的话，我们可以先将数据保存起来，然后要看的时候再执行新的命令去查看
```js
// webpack.config.js
new BundleAnalyzerPlugin({
   analyzerMode: 'disabled',
   generateStatsFile: true
 })

// package.json
"scripts": {
    "analyzer": "webpack-bundle-analyzer --port 3000 ./dist/stats.json"
},
```
