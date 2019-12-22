<template>
  <b-container class="mt-n10">
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
      <client-only>
        <main-chart :result="analysedResult" />
      </client-only>
      <div id="cloud-area" style="width: 100%; height: 400px" />
      <client-only>
        <main-text :result="analysedResult" />
      </client-only>
    </b-card>

    <client-only>
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
import * as d3 from 'd3'
import cloud from 'd3-cloud'
import firebase from '~/plugins/firebase'
import 'firebase/firestore'
import MainChart from '~/components/MainChart.vue'
import DetailChart from '~/components/DetailChart.vue'
import MainText from '~/components/MainText.vue'
import DetailText from '~/components/DetailText.vue'
import Agreeableness from '~/assets/factor/agreeableness'
import Conscientiousness from '~/assets/factor/conscientiousness'
import Extraversion from '~/assets/factor/extraversion'
import Neuroticism from '~/assets/factor/neuroticism'
import OpennessToExperience from '~/assets/factor/openness_to_experience'

const w = 500
const h = 500

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
    console.log(this.getFeatureWords(this.analysedResult))
    cloud()
      .size([w, h])
      .words(this.getFeatureWords(this.analysedResult))
      .font('Impact')
      .fontSize(function(d) {
        return d.size
      })
      .on('end', (words) => {
        console.log(words)
        console.log(d3.select('#cloud-area'))
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
                return '#123456'
              case 'C':
                return '#125456'
              case 'E':
                return '#103759'
              case 'N':
                return '#632442'
              case 'O':
                return '#725657'
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
      }) // 描画関数の読み込み
      .start()
  },
  methods: {
    getFeatureWords(result) {
      const cloudWords = []
      const extractWords = (factorAsset, factorResult) => {
        const features = []
        features.push(
          (() => {
            const factorKey = factorAsset.shortFacets
              .find((v) => v.facet === 1)
              .results.find(
                (facetResult) => facetResult.key === factorResult['1'].result
              )
            factorKey.score = factorResult['1'].score
            return factorKey
          })()
        )

        features.push(
          (() => {
            const factorKey = factorAsset.shortFacets
              .find((v) => v.facet === 2)
              .results.find(
                (facetResult) => facetResult.key === factorResult['2'].result
              )
            factorKey.score = factorResult['2'].score
            return factorKey
          })()
        )

        features.push(
          (() => {
            const factorKey = factorAsset.shortFacets
              .find((v) => v.facet === 3)
              .results.find(
                (facetResult) => facetResult.key === factorResult['3'].result
              )
            factorKey.score = factorResult['3'].score
            return factorKey
          })()
        )

        features.push(
          (() => {
            const factorKey = factorAsset.shortFacets
              .find((v) => v.facet === 4)
              .results.find(
                (facetResult) => facetResult.key === factorResult['4'].result
              )
            factorKey.score = factorResult['4'].score
            return factorKey
          })()
        )

        features.push(
          (() => {
            const factorKey = factorAsset.shortFacets
              .find((v) => v.facet === 5)
              .results.find(
                (facetResult) => facetResult.key === factorResult['5'].result
              )
            factorKey.score = factorResult['5'].score
            return factorKey
          })()
        )

        features.push(
          (() => {
            const factorKey = factorAsset.shortFacets
              .find((v) => v.facet === 6)
              .results.find(
                (facetResult) => facetResult.key === factorResult['6'].result
              )
            factorKey.score = factorResult['6'].score
            return factorKey
          })()
        )

        return features
          .map((v) => {
            return { text: v.shortFeature, size: v.score }
          })
          .filter((v) => v.text !== '')
      }
      cloudWords.push(extractWords(Agreeableness, result.A.facet))
      cloudWords.push(extractWords(Conscientiousness, result.C.facet))
      cloudWords.push(extractWords(Extraversion, result.E.facet))
      cloudWords.push(extractWords(Neuroticism, result.N.facet))
      cloudWords.push(extractWords(OpennessToExperience, result.O.facet))
      return cloudWords.flat()
    }
  }
}
</script>

<style scoped></style>
