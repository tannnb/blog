---
sidebar: auto
---

## npm源

```sh
# 查看当前 npm 源
npm config get registry
# 淘宝源
npm config set registry=https://registry.npm.taobao.org
# yarn config set registry https://registry.npm.taobao.org
# 官方源
npm config set registry=https://registry.npmjs.org
```

## 查看已安装的依赖包
```sh
# 当前项目
npm list --depth 0

# 全局
npm list -g --depth 0

# yarn
yarn global list --depth=0
```

## 查看依赖包的安装路径
```sh
# 当前项目
npm root

# 全局
npm root -g

# yarn
yarn global dir
```

## 清除缓存
```sh
npm cache clean -f
# OR
yarn cache clean
```


```sh
# npm 注册登录
$ npm adduser
Username: your name
Password: your password
Email: (this IS public) your email

#查看当前使用的用户
npm whoami

npm 登录
npm login

npm 发布
npm publish

npm 撤销包
npm unpublish 包名 --force
```

## 脚本命令相关

执行顺序：并行执行 `&`，继发执行 `&&`

例 1：`npm run script1.js & npm run script2.js`

例 2：`npm run script1.js && npm run script2.js`

获取当前正在运行的脚本名称 `process.env.npm_lifecycle_event`


# nvm
```sh
# 设置 node 镜像
nvm node_mirror https://npm.taobao.org/mirrors/node/

# 设置 npm 镜像
nvm npm_mirror https://npm.taobao.org/mirrors/npm/
```


#### 安装和设置 - Mac
```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
# OR
curl -o- https://gitee.com/mirrors/nvm/raw/v0.37.2/install.sh | bash
```

#### 常用命令

```sh
# 查看 nvm 版本
nvm version

# 安装最新版的 node
nvm install latest

# 安装指定版本的 node
nvm install 版本号

# 卸载指定版本的 node
nvm uninstall 版本号

# 查看已安装的 node 版本
nvm list

# 切换到指定的 node 版本
nvm use 版本号
```
