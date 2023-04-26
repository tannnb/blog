---
description: 常用网址导航
layoutClass: m-nav-layout
outline: [2, 3, 4]
---

<script setup>
import { NAV_DATA } from './nav/data'
console.log('NAV_DATA', NAV_DATA)
</script>
<style src="./nav/index.scss"></style>

# 前端导航

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>
