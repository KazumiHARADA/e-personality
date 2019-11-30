<script>
import { Bar } from 'vue-chartjs'
import Agreeableness from '~/assets/data/ja-agreeableness'

export default {
  name: 'Chart',
  extends: Bar,
  data() {
    return {
      data: {
        labels: ['信頼', '道徳', '利他', '協力', '謙虚', '共感'],
        datasets: [
          {
            label: 'スコア',
            data: [13, 9, 11, 4, 8, 10],
            backgroundColor: [
              Agreeableness.chartSettings.backgroundColor,
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              Agreeableness.chartSettings.borderColor,
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
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
