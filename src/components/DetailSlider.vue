<template>
  <div>
    <div :class="lowClass" :style="lowStyle">低い</div>
    <span class="slider-box">
      <span :style="positionStyle" class="double"> </span>
      <img src="score-bar-small.png" />
    </span>
    <div :class="highClass" :style="highStyle">高い</div>
  </div>
</template>

<script>
import { setting as AgreeablenessSetting } from '~/assets/factor/agreeableness'
import { setting as ConscientiousnessSetting } from '~/assets/factor/conscientiousness'
import { setting as ExtraversionSetting } from '~/assets/factor/extraversion'
import { setting as NeuroticismSetting } from '~/assets/factor/neuroticism'
import { setting as OpennessToExperienceSetting } from '~/assets/factor/openness_to_experience'
const maxScore = 20
const minScore = 5

export default {
  name: 'DetailSlider',
  props: {
    score: {
      type: Number,
      default: 24
    },
    resultKey: {
      type: String,
      default: 'neutral'
    },
    factor: {
      type: String,
      default: ''
    }
  },
  data() {
    console.log(this.resultKey)
    console.log(this.factor)
    return {
      positionStyle: (() => {
        if (this.score >= 100) {
          return (
            'left:' +
            ((this.score - minScore) / (maxScore - minScore)) * 85 +
            '%; font-size:12px'
          )
        } else {
          return (
            'left:' +
            ((this.score - minScore) / (maxScore - minScore)) * 85 +
            '%'
          )
        }
      })(),
      lowStyle: (() => {
        if (this.resultKey === 'low') {
          switch (this.factor) {
            case 'A':
              return (
                'color : ' +
                AgreeablenessSetting.iconHexColor +
                '; border: solid 5px ' +
                AgreeablenessSetting.iconHexColor +
                ';'
              )
            case 'C':
              return (
                'color : ' +
                ConscientiousnessSetting.iconHexColor +
                '; border: solid 5px ' +
                ConscientiousnessSetting.iconHexColor +
                ';'
              )
            case 'E':
              return (
                'color : ' +
                ExtraversionSetting.iconHexColor +
                '; border: solid 5px ' +
                ExtraversionSetting.iconHexColor +
                ';'
              )
            case 'N':
              return (
                'color : ' +
                NeuroticismSetting.iconHexColor +
                '; border: solid 5px ' +
                NeuroticismSetting.iconHexColor +
                ';'
              )
            case 'O':
              return (
                'color : ' +
                OpennessToExperienceSetting.iconHexColor +
                '; border: solid 5px ' +
                OpennessToExperienceSetting.iconHexColor +
                ';'
              )
          }
        } else {
          return ''
        }
      })(),
      lowClass: (() => {
        switch (this.resultKey) {
          case 'low':
            return 'result-circle-active'
          case 'neutral':
            return 'result-circle-inactive'
          case 'high':
            return 'result-circle-inactive'
        }
      })(),
      highStyle: (() => {
        if (this.resultKey === 'high') {
          switch (this.factor) {
            case 'A':
              return (
                'color : ' +
                AgreeablenessSetting.iconHexColor +
                '; border: solid 5px ' +
                AgreeablenessSetting.iconHexColor +
                ';'
              )
            case 'C':
              return (
                'color : ' +
                ConscientiousnessSetting.iconHexColor +
                '; border: solid 5px ' +
                ConscientiousnessSetting.iconHexColor +
                ';'
              )
            case 'E':
              return (
                'color : ' +
                ExtraversionSetting.iconHexColor +
                '; border: solid 5px ' +
                ExtraversionSetting.iconHexColor +
                ';'
              )
            case 'N':
              return (
                'color : ' +
                NeuroticismSetting.iconHexColor +
                '; border: solid 5px ' +
                NeuroticismSetting.iconHexColor +
                ';'
              )
            case 'O':
              return (
                'color : ' +
                OpennessToExperienceSetting.iconHexColor +
                '; border: solid 5px ' +
                OpennessToExperienceSetting.iconHexColor +
                ';'
              )
          }
        } else {
          return ''
        }
      })(),
      highClass: (() => {
        switch (this.resultKey) {
          case 'low':
            return 'result-circle-inactive'
          case 'neutral':
            return 'result-circle-inactive'
          case 'high':
            return 'result-circle-active'
        }
      })()
    }
  }
}
</script>

<style scoped>
.slider-box {
  position: relative;
  height: 100%;
}

.slider-box .double {
  position: absolute;
  display: inline-block;
  background-color: #ffffff;
  width: 15px;
  height: 15px;
  text-align: center;
  color: #000000;
  font-size: 16px;
  line-height: 23px;
  border-radius: 50%;
  border: solid 2px #000000;
  top: 6px;
  left: 100%;
}

.result-circle-active {
  display: inline-block;
  font-weight: bold;
  width: 34px;
  height: 34px;
  text-align: center;
  font-size: 10px;
  line-height: 24px;
  border-radius: 50%;
}

.result-circle-inactive {
  display: inline-block;
  font-weight: bold;
  width: 34px;
  height: 34px;
  text-align: center;
  color: #aaaaaa;
  font-size: 10px;
  line-height: 24px;
  border-radius: 50%;
  border: solid 5px #aaaaaa;
}
</style>
