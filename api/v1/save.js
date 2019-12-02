import calculateScore from 'b5-calculate-score'
import MongoDB from 'mongoose'

const mongoUrl =
  'mongodb://heroku_g43j8m44:6iagj8up9rud4alsnncug1t8dc@ds251158.mlab.com:51158/heroku_g43j8m44'

export default function(req, res, next) {
  // req は Node.js の HTTPリクエストオブジェクトです
  console.log(req.url)

  let data = ''
  req.encoding = 'utf8'
  req.on('data', function(chunk) {
    data += chunk
  })

  req.on('end', function() {
    // next は 次のミドルウェアを呼び出すための関数です。
    // あなたのミドルウェアが最後でない場合、関数の最後で next を呼び出すのを忘れないでください！
    // res.setHeader('Content-Type', 'application/json')
    try {
      const calculatedResult = calculateScore(JSON.parse(data).result)
      MongoDB.connect(mongoUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }).then((v) => {
        const score = createInstance(calculatedResult)
        score
          .save()
          .then((v) => {
            res.status = 200
            res.write(v._id.toString())
            res.end()
            console.log(v._id)
          })
          .catch((e) => {
            console.log(e)
          })
          .finally(() => MongoDB.disconnect())
      })
    } catch (e) {
      req.status = 500
      res.write('mongo write error')
      res.end()
      next()
    }
  })

  function createInstance(result) {
    const ScoreModel = MongoDB.models.Score
      ? MongoDB.models.Score
      : MongoDB.model(
          'Score',
          new MongoDB.Schema({
            answersJson: 'String'
          })
        )

    return new ScoreModel({ answersJson: JSON.stringify(result) })
  }
}
