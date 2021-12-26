(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{562:function(s,e,a){s.exports=a.p+"assets/img/introduction_1.e0158cff.png"},563:function(s,e,a){s.exports=a.p+"assets/img/introduction_2.58563fa6.png"},587:function(s,e,a){"use strict";a.r(e);var t=a(29),n=Object(t.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"脚手架介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#脚手架介绍"}},[s._v("#")]),s._v(" 脚手架介绍")]),s._v(" "),t("h4",{attrs:{id:"脚手架本质是一个操作系统的客户端-他通过命令执行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#脚手架本质是一个操作系统的客户端-他通过命令执行"}},[s._v("#")]),s._v(" 脚手架本质是一个操作系统的客户端，他通过命令执行")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("vue create vue-app\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("主要由3个命令组成：")]),s._v(" "),t("ul",[t("li",[s._v("主命令:"),t("code",[s._v("vue")])]),s._v(" "),t("li",[s._v("command:"),t("code",[s._v("create")])]),s._v(" "),t("li",[s._v("command的参数param: "),t("code",[s._v("vue-app")])])]),s._v(" "),t("p",[s._v("表示创建一个vue项目，项目名称为vue-app，这是一个较为简单的脚手架命令，实际场景往往更加复杂")]),s._v(" "),t("p",[s._v("如果当前目录已经有文件了，我们需要覆盖当前目录下的文件，强制进行安装vue项目，可以使用"),t("code",[s._v("--force")]),s._v("参数")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("vue create vue-app --force\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("这里的"),t("code",[s._v("--force")]),s._v("叫做"),t("code",[s._v("option")]),s._v(",用来辅助脚手架确认在特定场景下用户的选择(可以理解为配置)，例如场景:")]),s._v(" "),t("p",[s._v("通过"),t("code",[s._v("vue create")]),s._v("创建项目时，会自动执行"),t("code",[s._v("npm install")]),s._v("帮用户安装依赖，假设我们希望使用淘宝源安装:")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("vue create vue-app --force --register https://registry.npm.taobao.org\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("输入如下命令就可以看到"),t("code",[s._v("vue create")]),s._v("所支持的所有options:")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("vue create -help\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"脚手架执行原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#脚手架执行原理"}},[s._v("#")]),s._v(" 脚手架执行原理")]),s._v(" "),t("p",[s._v("在终端输入"),t("code",[s._v("vue create vue-app")]),s._v(",终端首先解析出"),t("code",[s._v("vue")]),s._v("，然后在node环境变量中找到"),t("code",[s._v("vue")]),s._v("命令，此时这个"),t("code",[s._v("vue")]),s._v("指向的是一个软连接("),t("code",[s._v("./lib/node_modules/@vue/cli/bin/vue.js")]),s._v(")")]),s._v(" "),t("p",[s._v("因为它是一个软连接，实际执行的是软连接指向的地址")]),s._v(" "),t("p",[s._v("终端根据vue命令链接到实际文件"),t("code",[s._v("vue.js")]),s._v("，然后利用node执行"),t("code",[s._v("vue.js")]),s._v("，"),t("code",[s._v("vue.js")]),s._v("解析command/options并且执行command，执行完成之后最后退出")]),s._v(" "),t("div",{staticStyle:{"text-align":"left",width:"600px"}},[t("img",{attrs:{src:a(562)}})]),s._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),t("p",[t("code",[s._v("./lib/node_modules")]),s._v("这个包下面 我们把它称之为全局依赖,通过npm安装的包都会进入这个依赖包下")])]),s._v(" "),t("h4",{attrs:{id:"为什么全局安装-vue-cli后会添加的命令为vue"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么全局安装-vue-cli后会添加的命令为vue"}},[s._v("#")]),s._v(" 为什么全局安装"),t("code",[s._v("@vue/cli")]),s._v("后会添加的命令为"),t("code",[s._v("vue")]),s._v("?")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("首先全局安装成功之后，进入"),t("code",[s._v("node/bin")]),s._v("目录下会存在多个软连接文件,其中"),t("code",[s._v("vue")]),s._v("软连接指向的是"),t("code",[s._v("/lib/node_modules/@vue/cli/bin/vue.js")])])]),s._v(" "),t("li",[t("p",[s._v("我们根据该地址找到该对应文件("),t("code",[s._v("./lib/node_modules/@vue/cli/bin")]),s._v(")目录，此时可以看到目录下会有一个"),t("code",[s._v("package.json")]),s._v("文件，里面的"),t("code",[s._v("bin")]),s._v("配置的对象名称就是生成软连接的名称以及软连接地址")])])]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"bin"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"vue"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bin/vue.js"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h4",{attrs:{id:"全局安装-vue-cli-发生了什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#全局安装-vue-cli-发生了什么"}},[s._v("#")]),s._v(" 全局安装 "),t("code",[s._v("@vue/cli")]),s._v(" 发生了什么?")]),s._v(" "),t("ul",[t("li",[s._v("首先将包安装到"),t("code",[s._v("node_modules")]),s._v("下")]),s._v(" "),t("li",[s._v("然后解析"),t("code",[s._v("package.json")]),s._v("文件中的"),t("code",[s._v("bin")]),s._v("配置，如果找到该配置那么就会在node主目录下创建一个软连接，软连接指向的就是配置的bin指向实际链接")])]),s._v(" "),t("h4",{attrs:{id:"执行vue命令时发生了什么-为什么vue指向一个js文件-我们确可以直接通过vue命令去直接执行它"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#执行vue命令时发生了什么-为什么vue指向一个js文件-我们确可以直接通过vue命令去直接执行它"}},[s._v("#")]),s._v(" 执行vue命令时发生了什么？ 为什么vue指向一个js文件，我们确可以直接通过vue命令去直接执行它？")]),s._v(" "),t("ul",[t("li",[s._v("我们操作系统在环境变量中去找到这个"),t("code",[s._v("vue")]),s._v("命令，完后会根据软链接指向地址找到这个执行文件")]),s._v(" "),t("li",[t("code",[s._v("/lib/node_modules/@vue/cli/bin/vue.js")]),s._v(" 第一行有申明命令 "),t("code",[s._v("#!/usr/bin/env node")]),s._v(" ;进入该文件首先声明了"),t("code",[s._v("#!/usr/bin/env node")]),s._v(" 表示会去环境变量中查找"),t("code",[s._v("node")]),s._v("命令,用node去执行这个文件")])]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("创建一个自定义命令，去执行文件")]),s._v(" "),t("p",[s._v("实现思路：在环境变量中创建一个软连接，指向执行文件即可")]),s._v(" "),t("p",[s._v("进入到node的bin目录下("),t("code",[s._v("/.nvm/versions/node/v15.0.0/bin")]),s._v(")然后创建软连接")]),s._v(" "),t("p",[s._v("执行命令： "),t("code",[s._v("ln -s /Users/**/Desktop/test-pro/test.js myapp")])]),s._v(" "),t("p",[s._v("这个时候可以看到目录下会多出一个命令")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("lrwxr-xr-x  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" **  staff  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("39")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(":10 myapp -"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /Users/**/Desktop/test-pro/test.js\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Desktop/test-pro/test.js")]),s._v("\n#"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("usr"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("bin"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("env node\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello world'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("执行myapp命令，会输出文件的console")]),s._v(" "),t("p",[s._v("注：如果出现"),t("code",[s._v("permission denied")]),s._v("文件权限，可以执行"),t("code",[s._v("chmod 777 test.js")]),s._v(" 再次运行myapp")]),s._v(" "),t("p",[s._v("删除软链接"),t("code",[s._v("rm -rf myapp")])])]),s._v(" "),t("h4",{attrs:{id:"脚手架命令执行全过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#脚手架命令执行全过程"}},[s._v("#")]),s._v(" 脚手架命令执行全过程")]),s._v(" "),t("div",{staticStyle:{"text-align":"left",width:"500px"}},[t("img",{attrs:{src:a(563)}})]),s._v(" "),t("h4",{attrs:{id:"本地调试流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本地调试流程"}},[s._v("#")]),s._v(" 本地调试流程")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 链接本地脚手架")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" you-cli-dir\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 链接本地库文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" you-lib-dir\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" you-cli-dir\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v(" you-lib\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 取消链接本地库文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" you-lib-dir\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" unlink\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" you-cli-dir\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果link 存在")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" unlink you-lib\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果link 不存在")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf node_modules\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);