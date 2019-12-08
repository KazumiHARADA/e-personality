<template>
  <b-card-body class="text-left pl-0 pr-0">
    <div>{{ userInfo.scoreTitle }}</div>
    <div>{{ userInfo.score }}</div>
    <div>{{ userInfo.scoreText }}</div>
    <b-list-group flush>
      <text-factor-entry
        :title="facets[0].title"
        :score="userInfo['1'].score"
        :score-title="getLiteral(userInfo['1'].result)"
        :score-text="facets[0].text"
      />
      <text-factor-entry
        :title="facets[1].title"
        :score="userInfo['2'].score"
        :score-title="getLiteral(userInfo['2'].result)"
        :score-text="facets[1].text"
      />
      <text-factor-entry
        :title="facets[2].title"
        :score="userInfo['3'].score"
        :score-title="getLiteral(userInfo['3'].result)"
        :score-text="facets[2].text"
      />
      <text-factor-entry
        :title="facets[3].title"
        :score="userInfo['4'].score"
        :score-title="getLiteral(userInfo['4'].result)"
        :score-text="facets[3].text"
      />
      <text-factor-entry
        :title="facets[4].title"
        :score="userInfo['5'].score"
        :score-title="getLiteral(userInfo['5'].result)"
        :score-text="facets[4].text"
      />
      <text-factor-entry
        :title="facets[5].title"
        :score="userInfo['6'].score"
        :score-title="getLiteral(userInfo['6'].result)"
        :score-text="facets[5].text"
      />
    </b-list-group>
  </b-card-body>
</template>

<script>
import Agreeableness from '~/assets/factor/agreeableness'
import Conscientiousness from '~/assets/factor/conscientiousness'
import Extraversion from '~/assets/factor/extraversion'
import Neuroticism from '~/assets/factor/neuroticism'
import OpennessToExperience from '~/assets/factor/openness_to_experience'
import TextFactorEntry from '~/components/TextFactorEntry'
import ScoreText from '~/assets/score-text.json'

export default {
  name: 'DetailText',
  components: {
    TextFactorEntry
  },
  props: {
    result: {
      type: Object,
      default() {}
    },
    factor: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      facets: ((factor) => {
        switch (factor) {
          case 'A':
            return Agreeableness.facets
          case 'C':
            return Conscientiousness.facets
          case 'E':
            return Extraversion.facets
          case 'N':
            return Neuroticism.facets
          case 'O':
            return OpennessToExperience.facets
        }
      })(this.factor),
      userInfo: ((factor) => {
        switch (factor) {
          case 'A':
            return {
              score: this.result.A.score,
              scoreTitle: ScoreText[this.result.A.result],
              scoreText: Agreeableness.results.find(
                (v) => v.key === this.result.A.result
              ).text,
              '1': this.result.A.facet['1'],
              '2': this.result.A.facet['2'],
              '3': this.result.A.facet['3'],
              '4': this.result.A.facet['4'],
              '5': this.result.A.facet['5'],
              '6': this.result.A.facet['6']
            }
          case 'C':
            return {
              score: this.result.C.score,
              scoreTitle: ScoreText[this.result.C.result],
              scoreText: Conscientiousness.results.find(
                (v) => v.key === this.result.C.result
              ).text,
              '1': this.result.C.facet['1'],
              '2': this.result.C.facet['2'],
              '3': this.result.C.facet['3'],
              '4': this.result.C.facet['4'],
              '5': this.result.C.facet['5'],
              '6': this.result.C.facet['6']
            }
          case 'E':
            return {
              score: this.result.E.score,
              scoreTitle: ScoreText[this.result.E.result],
              scoreText: Extraversion.results.find(
                (v) => v.key === this.result.E.result
              ).text,
              '1': this.result.E.facet['1'],
              '2': this.result.E.facet['2'],
              '3': this.result.E.facet['3'],
              '4': this.result.E.facet['4'],
              '5': this.result.E.facet['5'],
              '6': this.result.E.facet['6']
            }
          case 'N':
            return {
              score: this.result.N.score,
              scoreTitle: ScoreText[this.result.N.result],
              scoreText: Neuroticism.results.find(
                (v) => v.key === this.result.N.result
              ).text,
              '1': this.result.N.facet['1'],
              '2': this.result.N.facet['2'],
              '3': this.result.N.facet['3'],
              '4': this.result.N.facet['4'],
              '5': this.result.N.facet['5'],
              '6': this.result.N.facet['6']
            }
          case 'O':
            return {
              score: this.result.O.score,
              scoreTitle: ScoreText[this.result.O.result],
              scoreText: OpennessToExperience.results.find(
                (v) => v.key === this.result.O.result
              ).text,
              '1': this.result.O.facet['1'],
              '2': this.result.O.facet['2'],
              '3': this.result.O.facet['3'],
              '4': this.result.O.facet['4'],
              '5': this.result.O.facet['5'],
              '6': this.result.O.facet['6']
            }
        }
      })(this.factor)
    }
  },
  methods: {
    getLiteral(scoreResult) {
      return ScoreText[scoreResult]
    }
  }
}
</script>

<style scoped></style>
