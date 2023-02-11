<script setup lang="ts">
import { ref, watch } from 'vue'
import { useCounterStore } from '@/store/counter'
import { storeToRefs } from 'pinia'

defineProps<{ msg: string }>()

const store = useCounterStore()
// 直接监听变化
watch(
  store.$state,
  (state) => {
    // 每当状态发生变化时
  },
  { deep: true }
)

const { count, double } = storeToRefs(store)
// action方法修改
const { increment } = store
// 强制修改
store.$patch({
  count: 2,
})
// 强制重置
store.$reset()
// 环境变量
// console.log(import.meta.env.VITE_APP_WEB_URL)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="increment()">count is {{ count }}-{{ double }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the
    official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style lang="scss" scoped>
.read-the-docs {
  color: $variable-red-color;
}
</style>
