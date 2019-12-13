import queryString from 'querystring'
import admin from 'firebase-admin'

export default function(req, res, next) {
  try {
    const serviceAccount = require('../../../key/e-personality-firebase-adminsdk-8qnev-3f4088ecd4.json')
    try {
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: 'https://e-personality.firebaseio.com'
      })
    } catch (e) {
      console.log(e) // already initialized
    }
    const queries = queryString.parse(req.url.replace('/?', ''))
    const db = admin.firestore()
    db.collection('results')
      .doc(queries.id)
      .get()
      .then((v) => {
        res.status = 200
        res.write(JSON.stringify(v.get('answers')))
        res.end()
      })
      .catch((e) => {
        console.log(e)
        res.status = 404
        res.write(e.toString())
        res.end()
        next()
      })
  } catch (e) {
    res.status = 500
    res.write(e.toString())
    res.end()
    next()
  }
}
