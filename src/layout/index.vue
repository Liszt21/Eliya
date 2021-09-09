<script setup lang="ts"></script>

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
  a-layout-footer Eliya @2021 Created by Liszt21
</template>

<style lang="less" scoped>
.container {
  min-height: 100vh;
}

.content {
  background-color: white;
  min-height: 81vh;
  margin: 0 20px;
}
</style>
