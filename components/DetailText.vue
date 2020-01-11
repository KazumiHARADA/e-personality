<template>
  <div>
    <div class="flex-box mt-n3 mb-5">
      <hr class="line" :style="lineColor" />
      <b-card-title
        :id="factor"
        class="card-title mt-3"
        style="font-size: 30px"
      >
        {{ title }}</b-card-title
      >
    </div>
    <main-slider
      class="mt-3 mb-5"
      :score="userInfo.score"
      :result-key="userInfo.scoreKey"
      :factor="factor"
    />
    <div class="text-left mb-5">
      {{ userInfo.scoreText }}
    </div>
    <detail-chart :result="result" :factor="factor" />
    <b-card-body class="text-left pl-0 pr-0 mt-5">
      <b-list-group flush>
        <div />
        <text-detail-factor-entry
          :title="facets[0].title"
          :score="userInfo['1'].score"
          :score-title="getLiteral(userInfo['1'].result)"
          :score-text="facets[0].text"
          :score-key="userInfo['1'].result"
          :factor="factor"
        />
        <text-detail-factor-entry
          :title="facets[1].title"
          :score="userInfo['2'].score"
          :score-title="getLiteral(userInfo['2'].result)"
          :score-text="facets[1].text"
          :score-key="userInfo['2'].result"
          :factor="factor"
        />
        <text-detail-factor-entry
          :title="facets[2].title"
          :score="userInfo['3'].score"
          :score-title="getLiteral(userInfo['3'].result)"
          :score-text="facets[2].text"
          :score-key="userInfo['3'].result"
          :factor="factor"
        />
        <text-detail-factor-entry
          :title="facets[3].title"
          :score="userInfo['4'].score"
          :score-title="getLiteral(userInfo['4'].result)"
          :score-text="facets[3].text"
          :score-key="userInfo['4'].result"
          :factor="factor"
        />
        <text-detail-factor-entry
          :title="facets[4].title"
          :score="userInfo['5'].score"
          :score-title="getLiteral(userInfo['5'].result)"
          :score-text="facets[4].text"
          :score-key="userInfo['5'].result"
          :factor="factor"
        />
        <text-detail-factor-entry
          :title="facets[5].title"
          :score="userInfo['6'].score"
          :score-title="getLiteral(userInfo['6'].result)"
          :score-text="facets[5].text"
          :score-key="userInfo['6'].result"
          :factor="factor"
        />
        <div />
      </b-list-group>
      <div class="w-100 text-center mt-2">
        <nuxt-link
          v-scroll-to="'#result-top'"
          class="align-content-center"
          style="font-size: 16px;"
          to
        >
          ▲ 戻る
        </nuxt-link>
      </div>
    </b-card-body>
  </div>
</template>

<script>
import DetailChart from '~/components/DetailChart.vue'
import Agreeableness, {
  setting as AgreeablenessSetting
} from '~/assets/factor/agreeableness'

import Conscientiousness, {
  setting as ConscientiousnessSetting
} from '~/assets/factor/conscientiousness'
import Extraversion, {
  setting as ExtraversionSetting
} from '~/assets/factor/extraversion'
import Neuroticism, {
  setting as NeuroticismSetting
} from '~/assets/factor/neuroticism'
import OpennessToExperience, {
  setting as OpennessToExperienceSetting
} from '~/assets/factor/openness_to_experience'
import TextDetailFactorEntry from '~/components/TextDetailFactorEntry'
import MainSlider from '~/components/MainSlider.vue'
import ScoreText from '~/assets/score-text.json'

export default {
  name: 'DetailText',
  components: {
    TextDetailFactorEntry,
    MainSlider,
    DetailChart
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
    console.log('factor')
    console.log(this.factor)
    return {
      title: ((factor) => {
        switch (factor) {
          case 'A':
            return Agreeableness.title
          case 'C':
            return Conscientiousness.title
          case 'E':
            return Extraversion.title
          case 'N':
            return Neuroticism.title
          case 'O':
            return OpennessToExperience.title
        }
      })(this.factor),
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
      lineColor: ((factor) => {
        switch (factor) {
          case 'A':
            return (
              'background-color : ' + AgreeablenessSetting.iconHexColor + ';'
            )
          case 'C':
            return (
              'background-color : ' +
              ConscientiousnessSetting.iconHexColor +
              ';'
            )
          case 'E':
            return (
              'background-color : ' + ExtraversionSetting.iconHexColor + ';'
            )
          case 'N':
            return 'background-color : ' + NeuroticismSetting.iconHexColor + ';'
          case 'O':
            return (
              'background-color : ' +
              OpennessToExperienceSetting.iconHexColor +
              ';'
            )
        }
      })(this.factor),
      userInfo: ((factor) => {
        switch (factor) {
          case 'A':
            return {
              score: this.result.A.score,
              scoreKey: this.result.A.result,
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
              scoreKey: this.result.C.result,
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
              scoreKey: this.result.E.result,
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
              scoreKey: this.result.N.result,
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
              scoreKey: this.result.O.result,
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

<style scoped>
.flex-box {
  display: flex;
  justify-content: center;
  align-items: center;
}

.line {
  width: 20px;
  height: 5px;
  background-color: #3b8070;
  border-top: none;
  margin: 6px 11px 0 0;
}

.card-title {
  position: relative;
}
</style>
