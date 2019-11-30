<script>
import { Bar } from 'vue-chartjs'
import Agreeableness from '~/assets/factor/agreeableness'
import Conscientiousness from '~/assets/factor/conscientiousness'
import Extraversion from '~/assets/factor/extraversion'
import Neuroticism from '~/assets/factor/neuroticism'
import OpennessToExperience from '~/assets/factor/openness_to_experience'

export default {
  name: 'Chart',
  extends: Bar,
  props: {
    result: {
      type: Object,
      default() {}
    },
    factor: {
      type: String,
      default: ''
    }
  },
  data() {
    console.log(this.factor)
    let targetFactor
    switch (this.factor) {
      case 'A':
        targetFactor = Agreeableness
        break
      case 'C':
        targetFactor = Conscientiousness
        break
      case 'O':
        targetFactor = OpennessToExperience
        break
      case 'E':
        targetFactor = Extraversion
        break
      case 'N':
        targetFactor = Neuroticism
        break
    }

    const facet1 = targetFactor.facets.find(
      (facetInfo) => facetInfo.facet === 1
    )
    const facet2 = targetFactor.facets.find(
      (facetInfo) => facetInfo.facet === 2
    )
    const facet3 = targetFactor.facets.find(
      (facetInfo) => facetInfo.facet === 3
    )
    const facet4 = targetFactor.facets.find(
      (facetInfo) => facetInfo.facet === 4
    )
    const facet5 = targetFactor.facets.find(
      (facetInfo) => facetInfo.facet === 5
    )
    const facet6 = targetFactor.facets.find(
      (facetInfo) => facetInfo.facet === 6
    )

    return {
      data: {
        labels: [
          facet1.title,
          facet2.title,
          facet3.title,
          facet4.title,
          facet5.title,
          facet6.title
        ],
        datasets: [
          {
            label: 'スコア',
            data: [
              this.result[this.factor].facet[1].score,
              this.result[this.factor].facet[2].score,
              this.result[this.factor].facet[3].score,
              this.result[this.factor].facet[4].score,
              this.result[this.factor].facet[5].score,
              this.result[this.factor].facet[6].score
            ],
            backgroundColor: [
              targetFactor.chartSettings.backgroundColor,
              targetFactor.chartSettings.backgroundColor,
              targetFactor.chartSettings.backgroundColor,
              targetFactor.chartSettings.backgroundColor,
              targetFactor.chartSettings.backgroundColor,
              targetFactor.chartSettings.backgroundColor
            ],
            borderColor: [
              targetFactor.chartSettings.borderColor,
              targetFactor.chartSettings.borderColor,
              targetFactor.chartSettings.borderColor,
              targetFactor.chartSettings.borderColor,
              targetFactor.chartSettings.borderColor,
              targetFactor.chartSettings.borderColor
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [
            {
              scaleLabel: {
                display: true
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                stepSize: 5
              }
            }
          ]
        }
      }
    }
  },
  mounted() {
    this.renderChart(this.data, this.options)
  }
}
</script>
