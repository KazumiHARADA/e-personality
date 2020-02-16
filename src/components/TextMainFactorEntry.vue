<template>
  <b-list-group-item class="pl-0 pr-0 text-center">
    <div class="flex-box">
      <hr class="line" :style="lineColor" />
      <b-card-title class="card-title mt-3" style="font-size: 24px">
        {{ title }}</b-card-title
      >
    </div>
    <main-slider
      class="mt-3 mb-5"
      :score="score"
      :result-key="scoreKey"
      :factor="factor"
    />
    <b-card-text class="mb-4" style="font-size: 18px">
      {{ scoreText }}
    </b-card-text>
    <nuxt-link v-scroll-to="anchorId" style="font-size: 16px;" to>
      ▼ 詳しくはこちら
    </nuxt-link>
  </b-list-group-item>
</template>

<script>
import MainSlider from '~/components/MainSlider.vue'
import { setting as AgreeablenessSetting } from '~/assets/factor/agreeableness'
import { setting as ConscientiousnessSetting } from '~/assets/factor/conscientiousness'
import { setting as ExtraversionSetting } from '~/assets/factor/extraversion'
import { setting as NeuroticismSetting } from '~/assets/factor/neuroticism'
import { setting as OpennessToExperienceSetting } from '~/assets/factor/openness_to_experience'

export default {
  name: 'TextMainFactorEntry',
  components: {
    MainSlider
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    score: {
      type: Number,
      default: 0
    },
    scoreTitle: {
      type: String,
      default: ''
    },
    scoreText: {
      type: String,
      default: ''
    },
    scoreKey: {
      type: String,
      default: ''
    },
    factor: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      anchorId: '#' + this.factor,
      lineColor: (() => {
        switch (this.factor) {
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
      })()
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
