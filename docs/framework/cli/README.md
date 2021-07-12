# lerna 基本操作

#### 脚手架项目初始化
* 1.初始化npm项目
* 2.安装lerna
* 3.lerna init初始化项目
```shell
# 创建项目目录project-cli,安装lerna依赖

# 初始化lerna
lerna init

# 创建包项目(例如:core)
lerna create @project-cli/core
```

#### 创建package
* 1.lerna create 创建Package
* 2.lerna add 安装依赖
* 3.lerna link 链接依赖
```shell
# 安装依赖：比如axios,会给packages下所有包都安装axios依赖
lerna add axios
# 给指定包安装依赖：比如给指定core包
lerna add axios packages/core/

# 包软链接
# 例如:core下引用utils; 在core package.json中配置utils依赖,然后进行link,此时core node_modules中会出现该包
# 该软链接指向本地开发的包
lerna link
```

#### 脚手架开发和测试
* 1.lerna exec 执行shell脚本
* 2.lerna run 执行npm命令
* 3.lerna clean 清空依赖
* 4.lerna bootstrap 重装依赖
```shell
# 清除所有依赖,需手动删除dependencies中的依赖指定版本
lerna clean

# 安装(重装)所有依赖
lerna bootstrap

# 执行删除脚本; 会给所有包都执行rm命令
lerna exec -- rm -rf node_modeules/

# 删除指定包下的文件: --scope @project-cli/core 
lerna exec --scope @project-cli/core -- rm -rf node_modeules

# 执行所有package.json下test命令
lerna run test

# 执行指定包下命令
lerna run --scope @project-cli/core test
```

#### 脚手架发布上线
* 1.lerna version 
* 2.lerna changed 查看上版本以来的所有变更
* 3.lerna diff 查看diff
* 4.lerna publish 项目发布
```shell
# 需要先提交到github或Gitee上然后再进行lerna publish
# 确保package.json中的version与仓库中的tag/分支不能相同
```

