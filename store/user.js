export const state = () => ({
  displayName: '',
  email: '',
  photoURL: '',
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
    state.isLogin = false
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
  }
}
