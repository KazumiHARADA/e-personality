export const state = () => ({
  answerList: []
})

export const mutations = {
  upsert(state, entry) {
    const resultIndex = state.answerList.findIndex(
      (answer) => answer.id === entry.id
    )
    if (resultIndex === -1) {
      state.answerList.push(entry)
    } else {
      state.answerList.splice(resultIndex, 1, entry)
    }
  }
}
