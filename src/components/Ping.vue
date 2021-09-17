<script lang="ts" setup>
import { ref } from "vue";
import api from "../apis";

const message = ref("ping...");

api.ping().then((response) => {
  message.value = response.data.message;
});
</script>

<template lang="pug">
div.ping {{message}}

</template>
