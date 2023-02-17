<!-- eslint-disable camelcase -->
<script setup lang="ts">
import { ref, watch } from 'vue'
import { useCounterStore } from '@/store/counter'
import { storeToRefs } from 'pinia'
import loginApi from '@/service/api/login/login'

import Editor from '@tinymce/tinymce-vue'
import 'tinymce/plugins/image' // 插入上传图片插件
import 'tinymce/plugins/media' // 插入视频插件
import 'tinymce/plugins/table' // 插入表格插件
import 'tinymce/plugins/lists' // 列表插件
import 'tinymce/plugins/link'
import 'tinymce/plugins/wordcount' // 字数统计插件
import 'tinymce/plugins/code' // 源码
import 'tinymce/plugins/fullscreen' //全屏
import 'tinymce/plugins/searchreplace'
import 'tinymce/plugins/preview'

// import MathMl2LaTeX from 'mathml2latex'

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
// loginApi.login({
//   name: '1390',
//   code: 'xkt123456',
//   remember: 0,
//   // eslint-disable-next-line camelcase
//   user_type_id: 1,
//   type: 2,
// })
const tinymceId = 'vue-tinymce-' + +new Date() + ((Math.random() * 1000).toFixed(0) + '')
const contentValue = ref('')
const initOptions = ref({
  base_url: '/tinymce',
  // suffix: '.min',
  language: 'zh-Hans',
  height: 400,
  menubar: false,

  plugins:
    'link lists image code table wordcount preview fullscreen media searchreplace kityformula-editor', // 插件需要import进来
  toolbar: 'formats undo redo cut kityformula-editor',
  fontsize_formats: '8px 10px 12px 14pt 16px 18px 20px 22px 24px 26px 28px 30px 36px',
})

// const latex = MathMl2LaTeX.convert(
//   '<p><math xmlns="http://www.w3.org/1998/Math/MathML"><msubsup><mo>&#8747;</mo><mn>0</mn><mn>1</mn></msubsup><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>d</mo><mi>x</mi></math></p>'
// )
// console.log(latex)
</script>

<template>
  <editor
    :id="tinymceId"
    v-model="contentValue"
    initial-value="<p>Initial editor content</p>"
    :init="initOptions"
    tinymce-script-src="/tinymce/tinymce.min.js"
  />
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
