export const state = () => ({
  completed: 0
})

export const mutations = {
  countUp(state) {
    state.completed++
  },
  clear(state) {
    state.completed = 0
  }
}
