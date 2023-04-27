---
sidebar: auto
---

## Vue2在父组件中监听子组件的生命周期钩子
```js
<template>
  <child @hook:mounted="onChildMounted" />
</template>
```
