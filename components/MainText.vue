<template>
  <b-card-body class="text-left">
    <b-list-group flush>
      <text-factor-entry
        :title="agreeableness.title"
        :score="userInfo.A.score"
        :score-title="userInfo.A.scoreTitle"
        :score-text="userInfo.A.scoreText"
      />
      <text-factor-entry
        :title="conscientiousness.title"
        :score="userInfo.C.score"
        :score-title="userInfo.C.scoreTitle"
        :score-text="userInfo.C.scoreText"
      />
      <text-factor-entry
        :title="extraversion.title"
        :score="userInfo.E.score"
        :score-title="userInfo.E.scoreTitle"
        :score-text="userInfo.E.scoreText"
      />
      <text-factor-entry
        :title="neuroticism.title"
        :score="userInfo.N.score"
        :score-title="userInfo.N.scoreTitle"
        :score-text="userInfo.N.scoreText"
      />
      <text-factor-entry
        :title="opennessToExperience.title"
        :score="userInfo.O.score"
        :score-title="userInfo.O.scoreTitle"
        :score-text="userInfo.O.scoreText"
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
          scoreTitle: ScoreText[this.result.A.result],
          scoreText: Agreeableness.results.find(
            (v) => v.key === this.result.A.result
          ).text
        },
        C: {
          score: this.result.C.score,
          scoreTitle: ScoreText[this.result.C.result],
          scoreText: Conscientiousness.results.find(
            (v) => v.key === this.result.C.result
          ).text
        },
        E: {
          score: this.result.E.score,
          scoreTitle: ScoreText[this.result.E.result],
          scoreText: Extraversion.results.find(
            (v) => v.key === this.result.E.result
          ).text
        },
        N: {
          score: this.result.N.score,
          scoreTitle: ScoreText[this.result.N.result],
          scoreText: Neuroticism.results.find(
            (v) => v.key === this.result.N.result
          ).text
        },
        O: {
          score: this.result.O.score,
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
