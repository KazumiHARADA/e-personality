<template>
  <b-list-group-item class="pl-0 pr-0">
    <b-card-title>{{ title }}</b-card-title>
    <b-card-sub-title class="mb-2"
      >結果 : <strong>{{ scoreTitle }}</strong> スコア :
      {{ score }}
    </b-card-sub-title>
    <b-card-text>
      {{ scoreText }}
    </b-card-text>
  </b-list-group-item>
</template>

<script>
export default {
  name: 'TextFactorEntry',
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
    }
  }
}
</script>

<style scoped></style>
