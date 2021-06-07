<template>
  <main class="page">
    <slot name="top" />

    <Content class="theme-default-content"></Content>
    <PageEdit />

    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />

  </main>
</template>

<script>
import PageEdit from '@parent-theme/components/PageEdit.vue'
import PageNav from '@parent-theme/components/PageNav.vue'
import Gitalk from 'gitalk'

export default {
  components: { PageEdit, PageNav },
  props: ['sidebarItems'],
}
</script>

<style lang="stylus">
// @require '../styles/wrapper.styl'
@require '../../styles/gitalk.styl';

.page {
  padding-bottom: 2rem;
  display: block;
}

#gitalk-container {
  padding: 0 2.25rem;
  max-width: $contentWidth;
  margin: 0 auto;
}
</style>
