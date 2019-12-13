import calculateScore from 'b5-calculate-score'
import admin from 'firebase-admin'

export default function(req, res, next) {
  const serviceAccount = require('../../../key/e-personality-firebase-adminsdk-8qnev-3f4088ecd4.json')
  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: 'https://e-personality.firebaseio.com'
    })
  } catch (e) {
    console.log(e) // already initialized
  }

  let data = ''
  req.on('data', function(chunk) {
    data += chunk
  })

  req.on('end', function() {
    // next は 次のミドルウェアを呼び出すための関数です。
    // あなたのミドルウェアが最後でない場合、関数の最後で next を呼び出すのを忘れないでください！
    // res.setHeader('Content-Type', 'application/json')
    try {
      const calculatedResult = calculateScore(JSON.parse(data).result)
      const db = admin.firestore()
      db.collection('results')
        .add({
          answers: calculatedResult
        })
        .then((v) => {
          res.status = 200
          res.write(v.id)
          res.end()
          console.log(v.id)
        })
        .catch((e) => {
          req.status = 500
          res.write(e.toString())
          res.end()
          next()
        })
    } catch (e) {
      req.status = 500
      res.write(e.toString())
      res.end()
      next()
    }
  })
}
