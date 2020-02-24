export default {
  send(axios, title, message) {
    let localFlag = false
    let apiUrl
    if (process.env.NODE_ENV === 'development') {
      apiUrl = 'http://localhost:5001/e-personality/us-central1/sendMail'
      localFlag = true
    } else {
      apiUrl = 'https://us-central1-e-personality.cloudfunctions.net/sendMail'
      localFlag = false
    }
    axios
      .$get(apiUrl, {
        params: {
          title,
          message,
          isLocal: localFlag
        }
      })
      .then((v) => {
        console.log(v)
      })
      .catch((e) => {
        console.log(e)
      })
  }
}
