<template>
  <b-container class="mt-n10">
    <client-only>
      <a
        href="https://twitter.com/intent/tweet?text=Hello%20World&url=https%3A%2F%2Fexample.com%2F&hashtags=nature%2Csunset"
        target="_blank"
        >tweet</a
      >
      <b-card
        title="分析結果"
        class="shadow mb-5 bg-white rounded"
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
    </client-only>
  </b-container>
</template>

<script>
import firebase from '~/plugins/firebase'
import 'firebase/firestore'
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
  head() {
    return {
      meta: [{ hid: 'robots', name: 'robots', content: 'noindex' }]
    }
  },
  data() {
    return {
      analysedResult: {},
      host: '',
      id: ''
    }
  },
  asyncData({ env, params, app, query, store }) {
    if (query.id === undefined) {
      return
    }
    const db = firebase.firestore()
    return db
      .collection('results')
      .doc(query.id)
      .get()
      .then((v) => {
        return { analysedResult: v.get('answers') }
      })
      .catch((e) => {
        console.log(e)
      })
  },
  mounted() {
    this.$store.dispatch('inputs/resetAnswers')
  }
}
</script>

<style scoped></style>
