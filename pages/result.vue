<template>
  <b-container class="mt-n10 pb-5">
    <!--    <a-->
    <!--      href="https://twitter.com/intent/tweet?text=Hello%20World&url=https%3A%2F%2Fexample.com%2F&hashtags=nature%2Csunset"-->
    <!--      target="_blank"-->
    <!--      >tweet</a-->
    <!--    >-->
    <b-card
      title="分析結果"
      class="shadow mb-5 bg-white rounded result-card"
      style="max-width: 100%"
    >
      <span id="result-top" />
      <!--      <FeatureCloud-->
      <!--        id="cloud-area"-->
      <!--        :result="analysedResult"-->
      <!--        :inner-h-t-m-l="cloudInnerHTML"-->
      <!--        :user-id="userId"-->
      <!--      />-->
      <client-only>
        <main-text :result="analysedResult" />
      </client-only>
    </b-card>

    <client-only>
      <b-card
        class="shadow p-3 mb-5 bg-white rounded result-detail"
        style="max-width: 100%"
      >
        <detail-text :result="analysedResult" factor="A" />
      </b-card>
      <b-card class="shadow p-3 mb-5 bg-white rounded" style="max-width: 100%">
        <detail-text :result="analysedResult" factor="C" />
      </b-card>
      <b-card class="shadow p-3 mb-5 bg-white rounded" style="max-width: 100%">
        <detail-text :result="analysedResult" factor="E" />
      </b-card>
      <b-card class="shadow p-3 mb-5 bg-white rounded" style="max-width: 100%">
        <detail-text :result="analysedResult" factor="N" />
      </b-card>
      <b-card class="shadow p-3 mb-5 bg-white rounded" style="max-width: 100%">
        <detail-text :result="analysedResult" factor="O" />
      </b-card>
    </client-only>
  </b-container>
</template>

<script>
import firebase from '~/plugins/firebase'
import 'firebase/firestore'
// import MainChart from '~/components/MainChart.vue'
import MainText from '~/components/MainText.vue'
import DetailText from '~/components/DetailText.vue'
// import FeatureCloud from '~/components/FeatureCloud.vue'
import { setting as AgreeablenessSetting } from '~/assets/factor/agreeableness'
import { setting as ConscientiousnessSetting } from '~/assets/factor/conscientiousness'
import { setting as ExtraversionSetting } from '~/assets/factor/extraversion'
import { setting as NeuroticismSetting } from '~/assets/factor/neuroticism'
import { setting as OpennessToExperienceSetting } from '~/assets/factor/openness_to_experience'

export default {
  layout: 'result',
  name: 'Result',
  components: {
    // MainChart,
    MainText,
    DetailText
    // FeatureCloud
  },
  head() {
    return {
      meta: [{ hid: 'robots', name: 'robots', content: 'noindex' }]
    }
  },
  data() {
    return {
      analysedResult: {},
      cloudInnerHTML: '',
      imageUrl: '',
      host: '',
      userId: '',
      AhrStyle: 'background-color : ' + AgreeablenessSetting.iconHexColor + ';',
      ChrStyle:
        'background-color : ' + ConscientiousnessSetting.iconHexColor + ';',
      EhrStyle: 'background-color : ' + ExtraversionSetting.iconHexColor + ';',
      NhrStyle: 'background-color : ' + NeuroticismSetting.iconHexColor + ';',
      OhrStyle:
        'background-color : ' + OpennessToExperienceSetting.iconHexColor + ';'
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
        return {
          userId: query.id,
          analysedResult: v.get('answers'),
          cloudInnerHTML: v.get('cloudInnerHTML'),
          imageUrl: v.get('imageUrl')
        }
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

<style scoped>
.result-card .card-title {
  display: inline-block;
  width: 150px;
  height: 150px;
  text-align: center;
  color: #000000;
  font-size: 30px;
  line-height: 134px;
  border-radius: 50%;
  border: solid 5px #7d7d7d;
  margin-top: 1.5rem !important;
}

.result-detail .card-title {
  font-size: 30px;
}

/*#cloud-area {*/
/*  display: none;*/
/*}*/
</style>
