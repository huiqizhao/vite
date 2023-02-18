import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from './router/index'
import MathJax, { initMathJax, renderByMathjax } from 'mathjax-vue3'
function onMathJaxReady() {
  // The parent node of need to be rendered into the formula node set
  const el = document.getElementById('elementId')
  // ❗️❗️ When there is no el will begin to render the default root node
  renderByMathjax(el)
}
initMathJax({}, onMathJaxReady)

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)
app.use(MathJax)

app.mount('#app')
