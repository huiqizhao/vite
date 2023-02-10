<template>
  <div class="title">{{ text }}</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const text = ref('login')
</script>

<style scoped>
@import './index.scss';
</style>
