<template>
  <b-container class="mt-n10">
    <b-card
      title="分析結果"
      class="shadow p-3 mb-5 bg-white rounded"
      style="max-width: 100%"
    >
      <main-chart :result="analysedResult" />
      <main-text :result="analysedResult" />
    </b-card>
    <b-card
      title="調和性"
      class="shadow p-3 mb-5 bg-white rounded"
      style="max-width: 100%"
    >
      <detail-chart :result="analysedResult" factor="A" />
      <detail-text :result="analysedResult" factor="A" />
    </b-card>
    <b-card
      title="誠実性"
      class="shadow p-3 mb-5 bg-white rounded"
      style="max-width: 100%"
    >
      <detail-chart :result="analysedResult" factor="C" />
      <detail-text :result="analysedResult" factor="C" />
    </b-card>
    <b-card
      title="外向性"
      class="shadow p-3 mb-5 bg-white rounded"
      style="max-width: 100%"
    >
      <detail-chart :result="analysedResult" factor="E" />
      <detail-text :result="analysedResult" factor="E" />
    </b-card>
    <b-card
      title="神経質性"
      class="shadow p-3 mb-5 bg-white rounded"
      style="max-width: 100%"
    >
      <detail-chart :result="analysedResult" factor="N" />
      <detail-text :result="analysedResult" factor="N" />
    </b-card>
    <b-card
      title="開放性"
      class="shadow p-3 mb-5 bg-white rounded"
      style="max-width: 100%"
    >
      <detail-chart :result="analysedResult" factor="O" />
      <detail-text :result="analysedResult" factor="O" />
    </b-card>
  </b-container>
</template>

<script>
import MainChart from '~/components/MainChart.vue'
import DetailChart from '~/components/DetailChart.vue'
import MainText from '~/components/MainText.vue'
import DetailText from '~/components/DetailText.vue'

export default {
  name: 'Result',
  components: {
    MainChart,
    DetailChart,
    MainText,
    DetailText
  },
  data() {
    return {
      analysedResult: {},
      host: ''
    }
  },
  asyncData({ env, params, app, query }) {
    return app.$axios
      .$get('/api/v1/find', {
        params: {
          id: query.id
        }
      })
      .then((res) => {
        return {
          host: 'get',
          analysedResult: res
        }
      })
  }
}
</script>

<style scoped></style>
