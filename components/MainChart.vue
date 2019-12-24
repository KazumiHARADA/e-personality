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
    step: {
      type: Number,
      default: 10
    }
  },
  data() {
    return {
      data: {
        labels: [
          Agreeableness.title,
          Conscientiousness.title,
          Extraversion.title,
          Neuroticism.title,
          OpennessToExperience.title
        ],
        datasets: [
          {
            label: 'スコア',
            data: [
              this.result.A.score,
              this.result.C.score,
              this.result.E.score,
              this.result.N.score,
              this.result.O.score
            ],
            backgroundColor: [
              Agreeableness.chartSettings.backgroundColor,
              Conscientiousness.chartSettings.backgroundColor,
              Extraversion.chartSettings.backgroundColor,
              Neuroticism.chartSettings.backgroundColor,
              OpennessToExperience.chartSettings.backgroundColor
            ],
            borderColor: [
              Agreeableness.chartSettings.borderColor,
              Conscientiousness.chartSettings.borderColor,
              Extraversion.chartSettings.borderColor,
              Neuroticism.chartSettings.borderColor,
              OpennessToExperience.chartSettings.borderColor
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        legend: {
          display: false,
          labels: {
            fontColor: '#000000',
            fontSize: 18
          }
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              scaleLabel: {
                display: true
              },
              ticks: { fontColor: '#000000', fontSize: 18 }
            }
          ],
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                stepSize: this.step,
                fontColor: '#000000',
                fontSize: 16
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
