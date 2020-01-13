<template>
  <b-list-group-item class="pl-1 pr-1">
    <b-card-title class="mt-2">{{ title }}</b-card-title>
    <detail-slider
      class="mt-3 mb-3"
      :score="score"
      :result-key="scoreKey"
      :factor="factor"
    />
    <b-card-text class="mb-2" style="font-size: 18px">
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

<style scoped>
.list-group-item {
  height: 100%;
  border-radius: 0;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
}
</style>
