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
```js
const path = require('path');

module.exports = {
   ...
   // 开启source-map
    devtool: "source-map"
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
```js
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
```js
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
```js
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
           // 指定html模板
            template: './src/index.html',  
           // 自定义打包的文件名
            filename: 'index.html'
        })
    ]
}
```
接下来执行一下打包，就会发现dist文件下会生成一个index.html。打开会发现，webpack会自动将打包后的bundle文件引入(这里bundle名为index)：
```html
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
```js
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
```js
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
```js
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
```js
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
```js
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
```text
当你请求/api/users的时候，就会代理到http://localhost:9000/api/users

如果配置了pathRewrite,比如{ '^/api': '' } ,那么请求/api/users的时候，就会代理到http://localhost:3000/users

changeOrigin: 默认情况下，代理时会保留主机头的来源，当我们将其设置为true可以覆盖这种行为

secure: 当你的接口使用了https的时候，需要将其设置为false
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
```js
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
:::details 配置如下
```js
const miniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                // 使用miniCssExtractPlugin.loader替换style-loader
                use: [
                    miniCssExtractPlugin.loader,
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
:::

:::details 接下来打包一下，dist路径下就会多出一个main.css文件，并且在index.html中也会自动引入
```html 
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
:::

## CSS添加浏览器前缀
当我们使用一下css新特性的时候，可能需要考虑到浏览器兼容的问题，这时候可能需要对一些css属性添加浏览器前缀。而这类工作，其实可以交给webpack去实现。准确来说，是交给`postcss`去实现。
> postcss对于css 等于 babel对于JavaScript，它专注于对转换css，比如添加前缀兼容、压缩css代码等等
```shell
npm install postcss postcss-loader -D
```
:::details 配置步骤与解释
1. 首先在webpack配置文件先引入postcss-loader，它的顺序必须要在css-loader之前执行
```js
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
```js
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
```js
module.exports = {
    plugins: [
        ...,
        require('cssnano')
    ]
}
```

:::details 打包之后css压缩代码
```css
body{display:-webkit-box;display:-ms-flexbox;display:flex}
```
:::

## CSS预处理器
在我们实际开发中，我们会更多使用`Sass`、`Less`或者`stylus`这类css预处理器。而其实html是无法直接解析这类文件的，因此我们需要使用对应的loader将其转换成css

> 本人日常使用最多的是sass, 就以`sass`为例，来讲一下如何使用webpack解析sass

```shell
npm install sass sass-loader -D
```
:::details sass-loader 配置步骤与解释
1. 在module加上sass的匹配规则，sass-loader的执行顺序应该是排第一，我们需要先将其转换成css，然后才能执行后续的操作,比如添加前缀等
```js
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

```js
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
```js
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
```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|je?pg|gif|webp)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',   // 使用占位符设置导出名称
          }
        }]
      }
    ]
  }
}
```
:::




