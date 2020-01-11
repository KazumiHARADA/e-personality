<template>
  <b-list-group-item class="pl-0 pr-0">
    <b-card-title class="mt-2">{{ title }}</b-card-title>
    <detail-slider
      class="mt-3 mb-3"
      :score="score"
      :result-key="scoreKey"
      :factor="factor"
    />
    <b-card-text class="mb-2">
      {{ scoreText }}
    </b-card-text>
  </b-list-group-item>
</template>

<script>
import DetailSlider from '~/components/DetailSlider.vue'
export default {
  name: 'TextDetailFactorEntry',
  components: {
    DetailSlider
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
  }
}
</script>

<style scoped></style>
