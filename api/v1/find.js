import queryString from 'querystring'
import MongoDB from 'mongoose'

const mongoUrl =
  'mongodb://heroku_g43j8m44:6iagj8up9rud4alsnncug1t8dc@ds251158.mlab.com:51158/heroku_g43j8m44'

export default function(req, res, next) {
  try {
    const queries = queryString.parse(req.url.replace('/?', ''))
    MongoDB.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }).then((v) => {
      const Score = createModel()
      Score.findById(queries.id)
        .then((v) => {
          res.status = 200
          res.write(v.answersJson)
          res.end()
        })
        .catch((e) => {
          res.status = 404
          res.write('data not found')
          res.end()
          next()
        })
        .finally(() => MongoDB.disconnect())
    })
  } catch (e) {
    res.status = 500
    res.write('mongo read error')
    res.end()
    next()
  }

  function createModel() {
    return MongoDB.models.Score
      ? MongoDB.models.Score
      : MongoDB.model(
          'Score',
          new MongoDB.Schema({
            answersJson: 'String'
          })
        )
  }
}
