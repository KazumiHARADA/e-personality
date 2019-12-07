<template>
  <b-card-body class="text-left">
    <b-list-group flush>
      <text-factor-entry
        :title="agreeableness.title"
        :score="userInfo.A.score"
        :score-title="userInfo.A.scoreLiteral.score"
        :score-text="userInfo.A.scoreLiteral.text"
      />
      <text-factor-entry
        :title="conscientiousness.title"
        :score="userInfo.C.score"
        :score-title="userInfo.C.scoreLiteral.score"
        :score-text="userInfo.C.scoreLiteral.text"
      />
      <text-factor-entry
        :title="extraversion.title"
        :score="userInfo.E.score"
        :score-title="userInfo.E.scoreLiteral.score"
        :score-text="userInfo.E.scoreLiteral.text"
      />
      <text-factor-entry
        :title="neuroticism.title"
        :score="userInfo.N.score"
        :score-title="userInfo.N.scoreLiteral.score"
        :score-text="userInfo.N.scoreLiteral.text"
      />
      <text-factor-entry
        :title="opennessToExperience.title"
        :score="userInfo.O.score"
        :score-title="userInfo.O.scoreLiteral.score"
        :score-text="userInfo.O.scoreLiteral.text"
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

export default {
  name: 'MainText',
  components: {
    TextFactorEntry
  },
  props: {
    result: {
      type: Object,
      default() {}
    }
  },
  data() {
    console.log(this.result)
    return {
      agreeableness: {
        title: Agreeableness.title,
        shortDescription: Agreeableness.shortDescription,
        description: Agreeableness.description
      },
      conscientiousness: {
        title: Conscientiousness.title,
        shortDescription: Conscientiousness.shortDescription,
        description: Conscientiousness.description
      },
      extraversion: {
        title: Extraversion.title,
        shortDescription: Extraversion.shortDescription,
        description: Extraversion.description
      },
      neuroticism: {
        title: Neuroticism.title,
        shortDescription: Neuroticism.shortDescription,
        description: Neuroticism.description
      },
      opennessToExperience: {
        title: OpennessToExperience.title,
        shortDescription: OpennessToExperience.shortDescription,
        description: OpennessToExperience.description
      },
      userInfo: {
        A: {
          score: this.result.A.score,
          scoreLiteral: ((resText) => {
            switch (resText) {
              case 'low':
                return Agreeableness.results.find((v) => v.score === '低い')
              case 'neutral':
                return Agreeableness.results.find((v) => v.score === '中間')
              case 'high':
                return Agreeableness.results.find((v) => v.score === '高い')
            }
          })(this.result.A.result)
        },
        C: {
          score: this.result.C.score,
          scoreLiteral: ((resText) => {
            switch (resText) {
              case 'low':
                return Conscientiousness.results.find((v) => v.score === '低い')
              case 'neutral':
                return Conscientiousness.results.find((v) => v.score === '中間')
              case 'high':
                return Conscientiousness.results.find((v) => v.score === '高い')
            }
          })(this.result.C.result)
        },
        E: {
          score: this.result.E.score,
          scoreLiteral: ((resText) => {
            switch (resText) {
              case 'low':
                return Extraversion.results.find((v) => v.score === '低い')
              case 'neutral':
                return Extraversion.results.find((v) => v.score === '中間')
              case 'high':
                return Extraversion.results.find((v) => v.score === '高い')
            }
          })(this.result.C.result)
        },
        N: {
          score: this.result.N.score,
          scoreLiteral: ((resText) => {
            switch (resText) {
              case 'low':
                return Neuroticism.results.find((v) => v.score === '低い')
              case 'neutral':
                return Neuroticism.results.find((v) => v.score === '中間')
              case 'high':
                return Neuroticism.results.find((v) => v.score === '高い')
            }
          })(this.result.C.result)
        },
        O: {
          score: this.result.O.score,
          scoreLiteral: ((resText) => {
            switch (resText) {
              case 'low':
                return OpennessToExperience.results.find(
                  (v) => v.score === '低い'
                )
              case 'neutral':
                return OpennessToExperience.results.find(
                  (v) => v.score === '中間'
                )
              case 'high':
                return OpennessToExperience.results.find(
                  (v) => v.score === '高い'
                )
            }
          })(this.result.C.result)
        }
      }
    }
  }
}
</script>

<style scoped>
.mt-4-5 {
  margin-top: 2.5rem !important;
}
</style>
