<script lang="ts" setup>
import { defineComponent, ref } from "vue";
import axios from "axios";

const message = ref("ping...");

axios.get("/api/ping").then((response) => {
  message.value = response.data.message;
});
</script>

<template lang="pug">
div.ping {{message}}

</template>
