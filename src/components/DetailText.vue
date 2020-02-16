<template>
  <div>
    <div class="flex-box mt-n3 mb-5">
      <hr :style="lineColor" class="line" />
      <b-card-title
        :id="factor"
        class="card-title mt-3"
        style="font-size: 30px"
      >
        {{ title }}</b-card-title
      >
    </div>
    <main-slider
      :score="userInfo.score"
      :result-key="userInfo.scoreKey"
      :factor="factor"
      class="mt-3 mb-5"
    />
    <div class="text-left mb-5">
      {{ userInfo.scoreText }}
    </div>
    <detail-chart :result="result" :factor="factor" />
    <b-card-body class="text-left pl-0 pr-0 mt-5">
      <h3>あなたの特徴</h3>
      <hr />
      <b-row class="detail-list">
        <b-col
          :class="userInfo.factorInfo.factorParentClass1"
          sm="12"
          md="6"
          lg="6"
          lx="6"
        >
          <text-detail-factor-entry
            :title="facets[0].title"
            :score="userInfo['1'].score"
            :score-title="getLiteral(userInfo['1'].result)"
            :score-text="userInfo.factorInfo['1'].text"
            :score-key="userInfo['1'].result"
            :factor="factor"
            :class="userInfo.factorInfo.factorClass1"
          />
        </b-col>
        <b-col
          :class="userInfo.factorInfo.factorParentClass2"
          sm="12"
          md="6"
          lg="6"
          lx="6"
        >
          <text-detail-factor-entry
            :title="facets[1].title"
            :score="userInfo['2'].score"
            :score-title="getLiteral(userInfo['2'].result)"
            :score-text="userInfo.factorInfo['2'].text"
            :score-key="userInfo['2'].result"
            :factor="factor"
            :class="userInfo.factorInfo.factorClass2"
          />
        </b-col>
        <b-col
          :class="userInfo.factorInfo.factorParentClass3"
          sm="12"
          md="6"
          lg="6"
          lx="6"
        >
          <text-detail-factor-entry
            :title="facets[2].title"
            :score="userInfo['3'].score"
            :score-title="getLiteral(userInfo['3'].result)"
            :score-text="userInfo.factorInfo['3'].text"
            :score-key="userInfo['3'].result"
            :factor="factor"
            :class="userInfo.factorInfo.factorClass3"
          />
        </b-col>
        <b-col
          :class="userInfo.factorInfo.factorParentClass4"
          sm="12"
          md="6"
          lg="6"
          lx="6"
        >
          <text-detail-factor-entry
            :title="facets[3].title"
            :score="userInfo['4'].score"
            :score-title="getLiteral(userInfo['4'].result)"
            :score-text="userInfo.factorInfo['4'].text"
            :score-key="userInfo['4'].result"
            :factor="factor"
            :class="userInfo.factorInfo.factorClass4"
          />
        </b-col>
        <b-col
          :class="userInfo.factorInfo.factorParentClass5"
          sm="12"
          md="6"
          lg="6"
          lx="6"
        >
          <text-detail-factor-entry
            :title="facets[4].title"
            :score="userInfo['5'].score"
            :score-title="getLiteral(userInfo['5'].result)"
            :score-text="userInfo.factorInfo['5'].text"
            :score-key="userInfo['5'].result"
            :factor="factor"
            :class="userInfo.factorInfo.factorClass5"
          />
        </b-col>
        <b-col
          :class="userInfo.factorInfo.factorParentClass6"
          sm="12"
          md="6"
          lg="6"
          lx="6"
        >
          <text-detail-factor-entry
            :title="facets[5].title"
            :score="userInfo['6'].score"
            :score-title="getLiteral(userInfo['6'].result)"
            :score-text="userInfo.factorInfo['6'].text"
            :score-key="userInfo['6'].result"
            :factor="factor"
            :class="userInfo.factorInfo.factorClass6"
          />
        </b-col>
      </b-row>
      <hr />
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
              '6': this.result.A.facet['6'],
              factorInfo: this.getFactorInfo(this.result.A, Agreeableness)
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
              '6': this.result.C.facet['6'],
              factorInfo: this.getFactorInfo(this.result.C, Conscientiousness)
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
              '6': this.result.E.facet['6'],
              factorInfo: this.getFactorInfo(this.result.E, Extraversion)
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
              '6': this.result.N.facet['6'],
              factorInfo: this.getFactorInfo(this.result.N, Neuroticism)
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
              '6': this.result.O.facet['6'],
              factorInfo: this.getFactorInfo(
                this.result.O,
                OpennessToExperience
              )
            }
        }
      })(this.factor)
    }
  },
  methods: {
    getLiteral(scoreResult) {
      return ScoreText[scoreResult]
    },
    getFactorInfo(factorResult, factor) {
      const result1 = factorResult.facet['1'].result
      const result2 = factorResult.facet['2'].result
      const result3 = factorResult.facet['3'].result
      const result4 = factorResult.facet['4'].result
      const result5 = factorResult.facet['5'].result
      const result6 = factorResult.facet['6'].result

      const factorResultList = [
        result1,
        result2,
        result3,
        result4,
        result5,
        result6
      ]

      const factorParentClassList = factorResultList.map((result) =>
        getFactorParentClass(result)
      )

      const factorParentClassNumberedList = factorResultList
        .map((result, index) => {
          return {
            number: index,
            className: getFactorParentClass(result)
          }
        })
        .filter((v) => v.className !== ' d-none ')

      const factorClassList = ['', '', '', '', '', '']

      if (factorParentClassNumberedList.length % 2 !== 0) {
        const lastIndex = factorParentClassNumberedList.length - 1
        const lastNumber = factorParentClassNumberedList[lastIndex].number
        factorClassList[lastNumber] += ' b-none last-item '
      }

      if (factorParentClassNumberedList.length % 2 === 0) {
        const lastIndex = factorParentClassNumberedList.length - 1
        const lastBeforeIndex = factorParentClassNumberedList.length - 2
        const lastNumber = factorParentClassNumberedList[lastIndex].number
        const lastBeforeNumber =
          factorParentClassNumberedList[lastBeforeIndex].number
        factorClassList[lastNumber] += ' b-none last-item '
        factorClassList[lastBeforeNumber] += ' b-none last-before-item '
      }

      console.log(factorParentClassNumberedList)

      const featuredCount = factorResultList
        .map((result) => getFeatured(result))
        .reduce((a, c) => {
          return a + c
        })

      function getFeatured(result) {
        if (result !== 'neutral') {
          return 1
        } else {
          return 0
        }
      }

      function getFactorParentClass(result) {
        if (result === 'neutral') {
          return ' d-none '
        }
      }

      return {
        featuredCount,
        '1': factor.shortFacets
          .find((v) => v.facet === 1)
          .results.find((v) => v.key === result1),
        factorClass1: factorClassList[0],
        factorParentClass1: factorParentClassList[0],
        '2': factor.shortFacets
          .find((v) => v.facet === 2)
          .results.find((v) => v.key === result2),
        factorClass2: factorClassList[1],
        factorParentClass2: factorParentClassList[1],
        '3': factor.shortFacets
          .find((v) => v.facet === 3)
          .results.find((v) => v.key === result3),
        factorClass3: factorClassList[2],
        factorParentClass3: factorParentClassList[2],
        '4': factor.shortFacets
          .find((v) => v.facet === 4)
          .results.find((v) => v.key === result4),
        factorClass4: factorClassList[3],
        factorParentClass4: factorParentClassList[3],
        '5': factor.shortFacets
          .find((v) => v.facet === 5)
          .results.find((v) => v.key === result5),
        factorClass5: factorClassList[4],
        factorParentClass5: factorParentClassList[4],
        '6': factor.shortFacets
          .find((v) => v.facet === 6)
          .results.find((v) => v.key === result6),
        factorClass6: factorClassList[5],
        factorParentClass6: factorParentClassList[5]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
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

.b-none {
  border: none;
}

@media (min-width: 768px) {
  // 768pxから
  .b-none {
    border: none;
  }
}

@media (max-width: 768px) {
  // 768pxまで
  .b-none {
    height: 100%;
    border-radius: 0;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  }
  .last-item {
    border: none;
  }
}
</style>
