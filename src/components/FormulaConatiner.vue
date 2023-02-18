<template>
  <div class="container">
    <math-jax :latex="formula" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const formula = ref('$$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$')
</script>

<style lang="scss" scoped>
.container {
  span {
    visibility: collapse;
  }
  :deep(span > .MathJax) {
    visibility: visible;
  }
}
</style>
