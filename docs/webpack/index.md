## 前置概念
学习webpack之前，需要先了解三个术语—— `module` 、`chunk`和`bundle`


### 什么是module
:::warning 官方定义
Module是离散功能块，相比于完整程序提供了更小的接触面。

精心编写的模块提供了可靠的抽象和封装界限，使得应用程序中每个模块都具有条理清楚的设计和明确的目的。
:::

:::tip 翻译成白话就是
module模块就是我们编写的代码文件，比如`JavaScript`文件、`CSS`文件、`Image`文件、`Font`文件等等，它们都是属于`module`模块。

而module模块的一个特点，就是可以被引入使用。
:::

### 什么是chunk
:::warning 官方定义
webpack 特定术语在内部用于管理捆绑过程。输出束(bundle)由块组成，其中有几种类型(例如 entry 和 child )。

通常，块直接与输出束(bundle)相对应，但是，有些配置不会产生一对一的关系
:::

:::tip 翻译成白话就是
chunk是webpack打包过程的【中间产物】，webpack会根据文件的引入关系生成chunk。

也就是说一个chunk是由`一个module或多个module组成的`，这取决于有没有引入其他的module
:::

### 什么是bundle
:::warning 官方定义
bundle 由许多不同的模块生成，包含已经经过加载和编译过程的源文件的最终版本。
:::

:::tip 翻译成白话就是
bundle其实是webpack的最终产物，通常来说，一个bundle对应这一个chunk。
:::

## 总结一下
* 我们编写的文件可以理解为就是 `module`
* webpack处理时，将我们的文件处理成 `chunk`
* 最终生成结果使用的是 `bundle`
