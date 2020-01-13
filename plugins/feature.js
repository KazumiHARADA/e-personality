import Agreeableness from '~/assets/factor/agreeableness'
import Conscientiousness from '~/assets/factor/conscientiousness'
import Extraversion from '~/assets/factor/extraversion'
import Neuroticism from '~/assets/factor/neuroticism'
import OpennessToExperience from '~/assets/factor/openness_to_experience'

function getCoefficient(score) {
  return Math.abs(score - 12) * 10
}

function getFeatureWords(result) {
  const cloudWords = []
  const extractWords = (factorAsset, factorResult) => {
    const features = []
    features.push(
      (() => {
        const factorKey = factorAsset.shortFacets
          .find((v) => v.facet === 1)
          .results.find(
            (facetResult) => facetResult.key === factorResult['1'].result
          )
        factorKey.score = getCoefficient(factorResult['1'].score)
        return factorKey
      })()
    )

    features.push(
      (() => {
        const factorKey = factorAsset.shortFacets
          .find((v) => v.facet === 2)
          .results.find(
            (facetResult) => facetResult.key === factorResult['2'].result
          )
        factorKey.score = getCoefficient(factorResult['2'].score)
        return factorKey
      })()
    )

    features.push(
      (() => {
        const factorKey = factorAsset.shortFacets
          .find((v) => v.facet === 3)
          .results.find(
            (facetResult) => facetResult.key === factorResult['3'].result
          )
        factorKey.score = getCoefficient(factorResult['3'].score)
        return factorKey
      })()
    )

    features.push(
      (() => {
        const factorKey = factorAsset.shortFacets
          .find((v) => v.facet === 4)
          .results.find(
            (facetResult) => facetResult.key === factorResult['4'].result
          )
        factorKey.score = getCoefficient(factorResult['4'].score)
        return factorKey
      })()
    )

    features.push(
      (() => {
        const factorKey = factorAsset.shortFacets
          .find((v) => v.facet === 5)
          .results.find(
            (facetResult) => facetResult.key === factorResult['5'].result
          )
        factorKey.score = getCoefficient(factorResult['5'].score)
        return factorKey
      })()
    )

    features.push(
      (() => {
        const factorKey = factorAsset.shortFacets
          .find((v) => v.facet === 6)
          .results.find(
            (facetResult) => facetResult.key === factorResult['6'].result
          )
        factorKey.score = getCoefficient(factorResult['6'].score)
        return factorKey
      })()
    )

    return features
      .map((v) => {
        return { text: v.shortFeature, size: v.score }
      })
      .filter((v) => v.text !== '')
  }
  cloudWords.push(
    extractWords(Agreeableness, result.A.facet).map((v) => {
      v.type = 'A'
      return v
    })
  )
  cloudWords.push(
    extractWords(Conscientiousness, result.C.facet).map((v) => {
      v.type = 'C'
      return v
    })
  )
  cloudWords.push(
    extractWords(Extraversion, result.E.facet).map((v) => {
      v.type = 'E'
      return v
    })
  )
  cloudWords.push(
    extractWords(Neuroticism, result.N.facet).map((v) => {
      v.type = 'N'
      return v
    })
  )
  cloudWords.push(
    extractWords(OpennessToExperience, result.O.facet).map((v) => {
      v.type = 'O'
      return v
    })
  )
  return cloudWords.flat()
}

export default getFeatureWords
