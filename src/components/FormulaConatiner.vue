<template>
  <div>
    <math-jax :latex="formula" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const formula = ref('$$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$')
</script>

<style scoped></style>
