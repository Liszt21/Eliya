<script setup lang="ts">
import Footer from "./Footer.vue";
</script>

<template lang="pug">
a-layout.container
  a-layout-header
    div.logo
    a-menu(theme="dark")
      a-menu-item(key="1") Home
  a-layout-content
    a-breadcrumb
      a-breadcrumb-item Home
    div.content
      slot
  a-layout-footer
    Footer
</template>

<style lang="less" scoped>
.container {
  min-height: 100vh;
}

.content {
  color: var(--primary-color, blue);
  background-color: white;
  min-height: 81vh;
  margin: 0 20px;
}
</style>
