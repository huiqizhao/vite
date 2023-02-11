import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      count: 0,
    }
  },
  getters: {
    double: (state) => state.count * 2,
    doublePlusOne(): number {
      // 非箭头函数使用this时候需要手动补全返回类型
      return this.doubleCount + 1
    },
  },
  actions: {
    increment() {
      this.count++
    },
  },
})

// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)
//   function increment() {
//     count.value++
//   }

//   return { count, increment }
// })
