<template>
  <div class="container">
    <div>a</div>
    <chart />
  </div>
</template>

<script>
import calculateScore from 'b5-calculate-score'
import Chart from '~/components/Chart.vue'
import TestResult from '~/assets/test-data.json'

export default {
  name: 'Result',
  components: {
    Chart
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
  },
  methods: {
    calc() {
      const entry = {
        answers: TestResult
      }
      console.log(TestResult)
      console.log(calculateScore(entry))
    }
  }
}
</script>

<style scoped></style>
