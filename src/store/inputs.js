export const state = () => ({
  answerList: [],
  completed: 0
})

export const mutations = {
  push(state, entry) {
    state.answerList.push(entry)
  },

  slice(state, entry, index) {
    state.answerList.splice(index, 1, entry)
  },

  save(state, entry) {
    const resultIndex = state.answerList.findIndex(
      (answer) => answer.id === entry.id
    )
    if (resultIndex === -1) {
      state.answerList.push(entry)
      state.completed++
    } else {
      state.answerList.splice(resultIndex, 1, entry)
    }
  },
  countUp(state) {
    state.completed++
  },
  clear(state) {
    state.answerList = []
    state.completed = 0
  }
}

export const actions = {
  selectAnswer(context, entry) {
    context.commit('save', entry)
  },
  resetAnswers(context) {
    context.commit('clear')
  }
}
