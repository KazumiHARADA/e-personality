<template>
  <div id="cloud-area" style="width: 100%; height: 400px" />
</template>

<script>
import * as d3 from 'd3'
import cloud from 'd3-cloud'
import getFeatureWords from '~/plugins/feature'
import firebase from '~/plugins/firebase'
import 'firebase/firestore'
import { setting as AgreeablenessSetting } from '~/assets/factor/agreeableness'
import { setting as ConscientiousnessSetting } from '~/assets/factor/conscientiousness'
import { setting as ExtraversionSetting } from '~/assets/factor/extraversion'
import { setting as NeuroticismSetting } from '~/assets/factor/neuroticism'
import { setting as OpennessToExperienceSetting } from '~/assets/factor/openness_to_experience'

const w = 600
const h = 400

export default {
  name: 'FeatureCloud',
  props: {
    result: {
      type: Object,
      default() {}
    },
    innerHTML: {
      type: String,
      default: ''
    },
    userId: {
      type: String,
      default: ''
    },
    useCache: {
      type: Boolean,
      default: true
    }
  },
  mounted() {
    if (this.useCache) {
      if (this.innerHTML === '' || this.innerHTML === undefined) {
        this.drawCloud()
      } else {
        document.getElementById('cloud-area').innerHTML = this.innerHTML
      }
    } else {
      this.drawCloud()
    }
  },
  methods: {
    drawCloud() {
      cloud()
        .size([w, h])
        .words(getFeatureWords(this.result))
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
            .style('font-weight', 'bold')
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
          let apiUrl = ''
          let localFlag = false
          if (process.env.NODE_ENV === 'development') {
            apiUrl = 'http://localhost:5001/e-personality/us-central1/svg'
            localFlag = true
          } else {
            apiUrl = 'https://us-central1-e-personality.cloudfunctions.net/svg'
            localFlag = false
          }
          this.$axios
            .$get(apiUrl, {
              params: {
                svgHTML: document.getElementById('cloud-area').innerHTML,
                userId: this.userId,
                isLocal: localFlag
              }
            })
            .then((v) => {
              db.collection('results')
                .doc(this.userId)
                .set(
                  {
                    imageUrl: v.url
                  },
                  { merge: true }
                )
            })
            .catch((e) => {
              console.log(e)
            })
        }) // 描画関数の読み込み
        .start()
    }
  }
}
</script>

<style scoped></style>
