<script setup lang="ts">
import Footer from "./Footer.vue";
import Header from "./Header.vue";
</script>

<template lang="pug">
a-layout.container
  a-layout-header.container-header
    Header
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
  &-header {
    padding: 0 !important;
  }
}

.content {
  color: var(--primary-color, blue);
  background-color: white;
  min-height: 81vh;
}
</style>
