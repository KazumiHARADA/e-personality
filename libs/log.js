export default {
  d(str) {
    console.log(process.env.NODE_ENV)
    if (process.env.NODE_ENV === 'development') {
      console.log('[DEBUG] ' + str)
    }
  }
}
