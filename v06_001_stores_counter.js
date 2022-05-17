import { defineStore } from 'pinia'

export const useStore = defineStore('counter', {
    state: () => ({
      counter: 0,
    }),
    getters: {
      powerCount: (state) => Math.pow(state.counter, 2),
    },
    actions: {
      countup(step = 1) {
        this.counter += step
      },
    }
  })