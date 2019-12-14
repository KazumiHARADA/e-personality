export const state = () => ({
  displayName: '',
  email: '',
  photoURL: '',
  beforeId: '',
  isLogin: false
})

export const mutations = {
  changeLogin(state, { name, email, url }) {
    state.displayName = name
    state.email = email
    state.photoURL = url
    state.isLogin = true
  },
  changeLogout(state) {
    state.displayName = ''
    state.email = ''
    state.photoURL = ''
    state.beforeId = ''
    state.isLogin = false
  },
  changeBeforeId(state, id) {
    state.beforeId = id
  }
}

export const actions = {
  login(context, user) {
    context.commit('changeLogin', {
      name: user.displayName,
      email: user.email,
      url: user.photoURL
    })
  },
  logout(context) {
    context.commit('changeLogout')
  },
  findBeforeId(context, id) {
    context.commit('changeBeforeId', id)
  }
}
