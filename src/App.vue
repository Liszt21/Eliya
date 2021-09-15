<script setup lang="ts">
import Layout from "./layout/Index.vue";
</script>

<template lang="pug">
Layout
  router-view
</template>

<style>
body {
  width: 100vw;
  min-height: 100vh;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
}
</style>
