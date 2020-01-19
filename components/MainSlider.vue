<template>
  <div>
    <div :class="lowClass" :style="lowStyle">低い</div>
    <span class="slider-box">
      <span class="double" :style="positionStyle"> </span>
      <img class="barImage" src="score-bar-big.png" />
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
const maxScore = 120
const minScore = 24

export default {
  name: 'MainSlider',
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

<style lang="scss" scoped>
.slider-box {
  position: relative;
  height: 100%;
}

.slider-box .double {
  position: absolute;
  display: inline-block;
  background-color: #ffffff;
  width: 30px;
  height: 30px;
  text-align: center;
  color: #000000;
  font-size: 18px;
  line-height: 26px;
  border-radius: 50%;
  border: solid 2px #000000;
  top: 0;
  left: 100%;
}

.result-circle-active {
  display: inline-block;
  font-weight: bold;
  width: 60px;
  height: 60px;
  text-align: center;
  font-size: 18px;
  line-height: 52px;
  border-radius: 50%;
}

.result-circle-inactive {
  display: inline-block;
  font-weight: bold;
  width: 60px;
  height: 60px;
  text-align: center;
  color: #aaaaaa;
  font-size: 18px;
  line-height: 52px;
  border-radius: 50%;
  border: solid 5px #aaaaaa;
}

@media (max-width: 576px) {
  // 576pxまで
}

@media (max-width: 450px) {
  // 450pxまで
  $baseCircleSize: 13.5vw;
  $baseLineHeight: 11vw;
  $baseFontSize: 4.5vw;
  .slider-box .double {
    position: absolute;
    display: inline-block;
    background-color: #ffffff;
    width: 6vw;
    height: 6vw;
    text-align: center;
    color: #000000;
    font-size: 3vw;
    line-height: 5vw;
    border-radius: 50%;
    border: solid 2px #000000;
    margin-top: 3px;
    top: 0;
    left: 100%;
  }

  .result-circle-active {
    display: inline-block;
    font-weight: bold;
    width: $baseCircleSize;
    height: $baseCircleSize;
    text-align: center;
    font-size: $baseFontSize;
    line-height: $baseLineHeight;
    border-radius: 50%;
  }

  .result-circle-inactive {
    display: inline-block;
    font-weight: bold;
    width: $baseCircleSize;
    height: $baseCircleSize;
    text-align: center;
    color: #aaaaaa;
    font-size: $baseFontSize;
    line-height: $baseLineHeight;
    border-radius: 50%;
    border: solid 5px #aaaaaa;
  }

  .barImage {
    width: 30vw;
  }
}
</style>
