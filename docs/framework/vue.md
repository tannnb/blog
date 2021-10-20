# node多进程学习

### 什么是进程?

进程(Process)是计算机中的程序关于某数据集合上的一次运行活动，是系统进行资源分配的调度的基本单位，是操作吸用结构的基础。

* 第一，进程是一个实体 每一个进程都有它自己的地址空间
* 第二，进程是一个"执行中的程序"，存在嵌套关系

<div style="width:600px;text-align: left">
  <img src="../images/framework/process_1.png" />
</div>

#### 我们在child_process中创建的进程就是Node.js的子进程
