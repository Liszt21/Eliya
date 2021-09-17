<script setup lang="ts">
import Ping from "../components/Ping.vue";
import { changeTheme } from "../themes";
</script>

<template lang="pug">
Ping
a-button(@click="changeTheme()") changeTheme
</template>
