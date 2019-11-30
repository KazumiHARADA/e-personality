<template>
  <div class="container">
    <div>結果</div>
    <main-chart :result="results" />
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
  </div>
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
        console.log(calculateScore(entry))
        return calculateScore(entry)
      })()
    }
  }
}
</script>

<style scoped></style>
