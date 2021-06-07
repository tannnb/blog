---
sidebar: auto
---

# npm 

查看当前 npm 源
```sh
npm config get registry
# http://registry.npmjs.org/
```

切换源
```sh
# 淘宝源
npm config set registry=https://registry.npm.taobao.org
# 官方源
npm config set registry=http://registry.npmjs.org
```


```sh
# npm 注册登录
$ npm adduser
Username: your name
Password: your password
Email: (this IS public) your email

#查看当前使用的用户
npm whoami

npm登录
npm login
```

## 脚本命令相关

执行顺序：并行执行 `&`，继发执行 `&&`

例 1：`npm run script1.js & npm run script2.js`

例 2：`npm run script1.js && npm run script2.js`

获取当前正在运行的脚本名称 `process.env.npm_lifecycle_event`


# 常用的 npm 包

> 只介绍安装方法和常用命令，具体可点击 github 查看详情

## nrm

npm registry 管理工具，能够查看和切换当前使用的 registry

```sh
# 安装
npm install -g nrm

# 查看所有 registry
nrm ls
# 切换 registry
nrm use cnp
```

[Gihub](https://github.com/Pana/nrm)

## npm-check-updates

更新 package.json 中的依赖包

```sh
# 安装
npm install -g npm-check-updates

# 检查依赖包版本
ncu
# 升级依赖包版本
ncu -u
```

[Gihub](https://github.com/tjunnone/npm-check-updates)
