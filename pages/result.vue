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
      <!--      <client-only>-->
      <!--        <main-chart class="mt-4" :result="analysedResult" />-->
      <!--      </client-only>-->
      <div id="cloud-area" style="width: 100%; height: 400px" />
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
import * as d3 from 'd3'
import cloud from 'd3-cloud'
import getFeatureWords from '~/plugins/feature'
import firebase from '~/plugins/firebase'
import 'firebase/firestore'
// import MainChart from '~/components/MainChart.vue'
import MainText from '~/components/MainText.vue'
import DetailText from '~/components/DetailText.vue'
import { setting as AgreeablenessSetting } from '~/assets/factor/agreeableness'
import { setting as ConscientiousnessSetting } from '~/assets/factor/conscientiousness'
import { setting as ExtraversionSetting } from '~/assets/factor/extraversion'
import { setting as NeuroticismSetting } from '~/assets/factor/neuroticism'
import { setting as OpennessToExperienceSetting } from '~/assets/factor/openness_to_experience'

const w = 800
const h = 400

export default {
  layout: 'result',
  name: 'Result',
  components: {
    // MainChart,
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
      cloudInnerHTML: '',
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
          cloudInnerHTML: v.get('cloudInnerHTML')
        }
      })
      .catch((e) => {
        console.log(e)
      })
  },
  mounted() {
    this.$store.dispatch('inputs/resetAnswers')
    if (this.cloudInnerHTML === '' || this.cloudInnerHTML === undefined) {
      cloud()
        .size([w, h])
        .words(getFeatureWords(this.analysedResult))
        .font('Impact')
        .rotate(0)
        .fontSize(function(d) {
          return d.size
        })
        .on('end', (words) => {
          d3.select('#cloud-area')
            .append('svg')
            .attr('class', 'ui fluid image') // style using semantic ui
            .attr('viewBox', '0 0 ' + w + ' ' + h) // ViewBox : x, y, width, height
            .attr('width', '100%') // 表示サイズの設定
            .attr('height', '100%') // 表示サイズの設定
            .append('g')
            .attr('transform', 'translate(' + w / 2 + ',' + h / 2 + ')')
            .selectAll('text')
            .data(words)
            .enter()
            .append('text')
            .style('font-size', function(d) {
              return d.size + 'px'
            })
            .style('font-family', 'Impact')
            .style('fill', function(d, i) {
              switch (d.type) {
                case 'A':
                  return AgreeablenessSetting.borderHexColor
                case 'C':
                  return ConscientiousnessSetting.borderHexColor
                case 'E':
                  return ExtraversionSetting.borderHexColor
                case 'N':
                  return NeuroticismSetting.borderHexColor
                case 'O':
                  return OpennessToExperienceSetting.borderHexColor
              }
              return d3.schemeCategory10[i % 10]
            })
            .attr('text-anchor', 'middle')
            .attr('transform', function(d) {
              return 'translate(' + [d.x, d.y] + ')rotate(' + d.rotate + ')'
            })
            .text(function(d) {
              return d.text
            })
          // 描画完了時にSVGをFirebaseに保存する
          const db = firebase.firestore()
          db.collection('results')
            .doc(this.userId)
            .set(
              {
                cloudInnerHTML: document.getElementById('cloud-area').innerHTML
              },
              { merge: true }
            )
        }) // 描画関数の読み込み
        .start()
    } else {
      document.getElementById('cloud-area').innerHTML = this.cloudInnerHTML
    }
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
