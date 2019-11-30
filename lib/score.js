import MongoDB from 'mongoose'

export default {
  createInstance(result) {
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
