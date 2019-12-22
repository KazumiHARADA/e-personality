<template>
  <b-card-body class="text-left">
    <div />
    <b-list-group flush>
      <text-main-factor-entry
        :title="agreeableness.title"
        :score="userInfo.A.score"
        :score-title="userInfo.A.scoreTitle"
        :score-text="userInfo.A.scoreText"
        :score-key="userInfo.A.scoreKey"
        factor="A"
      />
      <text-main-factor-entry
        :title="conscientiousness.title"
        :score="userInfo.C.score"
        :score-title="userInfo.C.scoreTitle"
        :score-text="userInfo.C.scoreText"
        :score-key="userInfo.C.scoreKey"
        factor="C"
      />
      <text-main-factor-entry
        :title="extraversion.title"
        :score="userInfo.E.score"
        :score-title="userInfo.E.scoreTitle"
        :score-text="userInfo.E.scoreText"
        :score-key="userInfo.E.scoreKey"
        factor="E"
      />
      <text-main-factor-entry
        :title="neuroticism.title"
        :score="userInfo.N.score"
        :score-title="userInfo.N.scoreTitle"
        :score-text="userInfo.N.scoreText"
        :score-key="userInfo.N.scoreKey"
        factor="N"
      />
      <text-main-factor-entry
        :title="opennessToExperience.title"
        :score="userInfo.O.score"
        :score-title="userInfo.O.scoreTitle"
        :score-text="userInfo.O.scoreText"
        :score-key="userInfo.O.scoreKey"
        factor="O"
      />
    </b-list-group>
    <div />
  </b-card-body>
</template>

<script>
import Agreeableness from '~/assets/factor/agreeableness'
import Conscientiousness from '~/assets/factor/conscientiousness'
import Extraversion from '~/assets/factor/extraversion'
import Neuroticism from '~/assets/factor/neuroticism'
import OpennessToExperience from '~/assets/factor/openness_to_experience'
import TextMainFactorEntry from '~/components/TextMainFactorEntry'
import ScoreText from '~/assets/score-text.json'

export default {
  name: 'MainText',
  components: {
    TextMainFactorEntry
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
          scoreKey: this.result.A.result,
          scoreTitle: ScoreText[this.result.A.result],
          scoreText: Agreeableness.results.find(
            (v) => v.key === this.result.A.result
          ).text
        },
        C: {
          score: this.result.C.score,
          scoreKey: this.result.C.result,
          scoreTitle: ScoreText[this.result.C.result],
          scoreText: Conscientiousness.results.find(
            (v) => v.key === this.result.C.result
          ).text
        },
        E: {
          score: this.result.E.score,
          scoreKey: this.result.E.result,
          scoreTitle: ScoreText[this.result.E.result],
          scoreText: Extraversion.results.find(
            (v) => v.key === this.result.E.result
          ).text
        },
        N: {
          score: this.result.N.score,
          scoreKey: this.result.N.result,
          scoreTitle: ScoreText[this.result.N.result],
          scoreText: Neuroticism.results.find(
            (v) => v.key === this.result.N.result
          ).text
        },
        O: {
          score: this.result.O.score,
          scoreKey: this.result.O.result,
          scoreTitle: ScoreText[this.result.O.result],
          scoreText: OpennessToExperience.results.find(
            (v) => v.key === this.result.O.result
          ).text
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
