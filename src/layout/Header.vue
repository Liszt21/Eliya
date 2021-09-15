<script lang="ts" setup></script>

<template lang="pug">
//- TODO adjust size
a-row()
  a-col.logo(:xl="4" :md="2" :sm="0" :xs="0") Eliya 
  a-col(:xl="12" :md="14" :sm="16" :xs="20")
    a-menu.navbar(theme="dark")
      a-menu-item(key="home") Home
      a-menu-item(key="about") About
  a-col.search(:xl="4" :md="5" :sm="6" :xs="0")
    a-input
  a-col.user(:xl="4" :md="3" :sm="2" :xs="4")
    span User
</template>

<style lang="less" scoped>
.logo,
.user {
  color: white;
}

.navbar {
  margin-top: 8px;
  display: flex;
  flex-flow: row nowrap;
}
</style>
