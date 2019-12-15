<template>
  <b-container class="mt-n10">
    <client-only>
      <b-card
        title="分析結果"
        class="shadow mb-5 bg-white rounded"
        style="max-width: 100%"
      >
        <main-chart :result="analysedResult" :step="5" />
        <main-text :result="analysedResult" />
      </b-card>
    </client-only>
  </b-container>
</template>

<script>
import firebase from '~/plugins/firebase'
import 'firebase/firestore'
import MainChart from '~/components/MainChart.vue'
import MainText from '~/components/MainText.vue'

export default {
  name: 'Result',
  components: {
    MainChart,
    MainText
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
      .collection('simple-results')
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
    this.$store.dispatch('simpleInputs/resetAnswers')
  }
}
</script>

<style scoped></style>
