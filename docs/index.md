---
layout: home

hero:
  lang: zh-CN
  text: 蜗牛实验室
  tagline: 知识是进步的阶梯，争取每天汲取知识点
  image:
    src: /logo.png
    alt: 蜗牛实验室
  actions:
    - theme: brand
      text: 立刻开始
      link: /record/
    - text: 导航
      link: /nav
      theme: alt

features:
  - icon: 📖
    title:  ✨ 前端常用知识
    details: 前端技术知识积累，整理前端常用八股文<small>
  - icon: 🧰
    title: 提效工具
    details: 工欲善其事，必先利其器<br />记录开发和日常使用中所用到的软件、插件、扩展等
  - icon: 🛠️
    title: Workflow
    details: 在工作中学到的一切<small>（常用库/工具/奇淫技巧等）</small>
---

<style>
.m-home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}

.m-home-layout .details small {
  opacity: 0.8;
}

.m-home-layout .item:last-child .details {
  display: flex;
  justify-content: flex-end;
  align-items: end;
}
</style>
