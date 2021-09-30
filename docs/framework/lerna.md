# lerna学习

```shell
# 初始化npm项目
npm init -y

# 安装lerna
npm install lerna

# lerna init初始化项目
lerna init
```

#### 创建package
```shell
lerna create <包名>
# lerna create @project-cli/core 
# 一般是在自己的组织下创建包名，防止重复(需提前新建好`组`)
```
#### 安装依赖
```shell
# 安装依赖：比如axios,会给packages下所有包都安装axios依赖
lerna add axios

# 给指定包安装依赖：比如给指定core包
lerna add axios packages/core/
```

#### lerna link 链接依赖
```shell
# 例如:core下引用utils包,如何操作？
# 首先在core/package.json中配置dependencies依赖 "dependencies": {"@project-cli/utils":"1.0.0"}
# 然后在执行下方命令进行link，此时code/node_modules中会出现该包软链接,该软链接指向本地开发的包
lerna link
```

#### 清空依赖
```shell
# 会清除packages中所有包的node_modules,但是不会自动移除package.json中dependencies配置的包信息
lerna clean
```
#### 安装依赖(重装依赖)
```shell
# 会将packages中的所有包 全部安装好对应的依赖
lerna bootstrap
```

#### exec 在packages下执行所有命令
```shell
# 执行删除所有的node_modules; 会给所有包都执行rm命令
lerna exec -- rm -rf node_modules/

# lerna info Executing command in 2 packages: "rm -rf node_modules/"
# lerna 帮我们将packages下的2个包都执行了删除node_modules操作

# 如果我们只想对某一个包进行执行删除操作呢？
# 删除指定包下的文件: --scope @project-cli/core  注:这里的名称是package中的name
lerna exec --scope @project-cli/core -- rm -rf node_modules
```

#### run
```shell
# 例如scripts中配置了命令，执行run命令会执行所有包下的console命令
# "scripts": { "console": "echo hello code" }
lerna run console

# 单独执行某一个包下的命令也是使用--scope <包名>
lerna run --scope @project-cli/core console
```


#### 脚手架发布上线
```
* 1.lerna version 
* 2.lerna changed 查看上版本以来的所有变更
* 3.lerna diff 查看diff
* 4.lerna publish 项目发布
```shell
# 需要先提交到github或Gitee上然后再进行lerna publish
# 确保package.json中的version与仓库中的tag/分支不能相同
```


### commander 基本操作
新建一个项目文件(project)初始化npm init,并配置bin信息,使用npm link创建本地软链接
```js
const package = require('./package.json')
const commander = require('commander')
const program = new commander.Command();
program
    .name(Object.keys(package.bin)[0])
    .usage('<command> [options]')
    .version(package.version,'-V, --version','当前版本号')
    .option('-d, --debug' ,'是否开启调试',false)
    .parse(process.argv);
program.outputHelp()

// 比如创建的软链接命令为 project-cli
// >  project-cli

// 输出如下：
// Usage: project-cli <command> [options]

//Options:
//    -V, --version  当前版本号
//    -d, --debug    是否开启调试 (default: false)
//    -h, --help     display help for command
```

创建子命令的两种方式
```js
// 第一种： command新增子命令
const program = new commander.Command();
const dev = program.command('dev <source> [destination]')
dev
    .description('dev命令描述信息')
    .option('-f, --force','是否强制进行某些操作')
    .action((source,destination,cmdObj) => {
        console.log('do clone:', source,destination,cmdObj.force)
    });


// 第二种：addCommand新增子命令
const service = new commander.Command('service');
service
    .command('start [port]')
    .description('服务启动')
    .action((port) => {
        console.log('服务启动端口:', port)
    });
service
    .command('stop')
    .description('服务终止')
    .action((port) => {
        console.log('服务终止完成')
    })
program.addCommand(service)
program.outputHelp()

// >  project-cli
// Usage:  [options] [command]
// Options:
//     -h, --help                                  display help for command
//     Commands:
//         dev [options] <source> [destination]   dev命令描述信息
//         service
//         help [command]                          display help for command
```
```js
// 监听输入的命令
program
    .arguments('<cmd> [options]')
    .description('cmd command',{
        cmd:'command to run',
        options:'options for command'
    })
    .action((cmd,env) =>{
        console.log('cmd:', cmd,env)
    });
```
