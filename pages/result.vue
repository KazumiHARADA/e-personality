<template>
  <b-container>
    <div class="text-light mt-n10">結果</div>
    {{ host }}
    <b-card class="mt-5 pb-5 shadow" bg-variant="light" text-variant="black">
      <main-chart :result="results" />
    </b-card>
    調和性
    <detail-chart :result="results" factor="A" />
    誠実性
    <detail-chart :result="results" factor="C" />
    外向性
    <detail-chart :result="results" factor="E" />
    神経質性
    <detail-chart :result="results" factor="N" />
    開放性
    <detail-chart :result="results" factor="O" />
  </b-container>
</template>

<script>
import calculateScore from 'b5-calculate-score'
import MainChart from '~/components/MainChart.vue'
import DetailChart from '~/components/DetailChart.vue'
import TestResult from '~/assets/test-data.json'

export default {
  name: 'Result',
  components: {
    MainChart,
    DetailChart
  },
  data() {
    return {
      results: (() => {
        const entry = {
          answers: TestResult
        }
        return calculateScore(entry)
      })(),
      host: ''
    }
  },
  asyncData({ env, params, app, query }) {
    console.log(query)
    if (query.id === undefined) {
      const entry = {
        answers: TestResult
      }
      return app.$axios
        .$post('/api/v1/save', {
          result: entry
        })
        .then((res) => {
          return {
            host: res,
            results: calculateScore(entry)
          }
        })
    } else {
      return app.$axios
        .$get('/api/v1/find', {
          params: {
            id: query.id
          }
        })
        .then((res) => {
          return {
            host: 'get',
            results: res
          }
        })
    }
  }
}
</script>

<style scoped></style>
