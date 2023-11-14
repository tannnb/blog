## 初始化webpack

首先新建一下项目文件(project),并初始化
```shell
npm init -y
# or
yarn init -y

# 安装webpack依赖
npm install webpack webpack-cli -D

# -S: --save(保存) 包名会被注册在package.json的dependencies里面，在生产环境下这个包的依赖依然存在
# -D: --dev(生产)  包名会被注册在package.json的devDependencies里面，仅在开发环境下存在的包用-D，如babel，sass-loader这些解析器
# 安装依赖不添加 -S -D 参数，默认安装到dependencies里
```

在项目中新建src文件，并添加`index.js`,既 `project/src/index.js`
```js
console.log('hello Webpack 5')
```
最简单的打包：
* 1.直接在项目根目录下执行`npx webpack`,进行快速打包。此时项目会多出一个`dist/main`文件夹
* 2.在`package.json`中编辑scripts命令：`"build": "webpack"`,执行`npm run build`


