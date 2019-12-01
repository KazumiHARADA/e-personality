<template>
  <b-container class="text-light" style="height: 100%;">
    <h1 class="title pt-4">Big Five 精密 <br />パーソナリティ診断</h1>
    <h5 class="subtitle pt-4">
      Big Five 理論に基づいて、精密に自身の<br />パーソナリティを分析できます。
    </h5>

    <b-row class="pt-5" align-h="center">
      <b-col class="col-xs-10 col-sm-10 col-md-7">
        <blockquote class="blockquote text-left lead">
          <p><small>所要時間：10分</small></p>
          <p class="mt-n3"><small>オススメのやり方</small></p>
          <ul class="mt-n3">
            <li>
              <small
                >将来なりたい自分ではなく、今の自分はどうなのかで回答しましょう</small
              >
            </li>
            <li><small>正直に回答しましょう</small></li>
            <li><small>一人でやりましょう</small></li>
          </ul>
        </blockquote>
      </b-col>
    </b-row>
    <b-row class="pt-5" align-h="center">
      <b-col class="col-xs-10 col-sm-10 col-md-6">
        <div>
          <b-button block variant="success" to="/inputs/1"
            >テストを始める</b-button
          >
        </div>
      </b-col>
    </b-row>
    <nuxt-link to="/result">result page</nuxt-link>
  </b-container>
</template>

<script>
import calculateScore from 'b5-calculate-score'
import Questions from '~/assets/ja-edited-questions.json'
import TestResult from '~/assets/test-data.json'

export default {
  data() {
    return {
      questions: Questions
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        // `hid` は一意の識別子として使用されます。 `vmid` は動作しないので使わないでください。
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description'
        }
      ]
    }
  },
  computed: {
    state() {
      return Boolean(this.value)
    }
  },
  methods: {
    selectedItem(questionId, selectedScore) {
      const questionInfo = this.questions.find(
        (question) => questionId === question.id
      )
      const entry = {
        id: questionId,
        domain: questionInfo.domain,
        facet: questionInfo.facet,
        score: selectedScore
      }
      this.$store.commit('inputs/upsert', entry)

      console.log(this.$store.state.inputs.answerList)
    },
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

<style scoped>
h1 > br {
  display: none;
}
@media screen and (max-width: 800px) {
  h1 > br {
    display: block;
  }
}

h5 > br {
  display: none;
}
@media screen and (max-width: 800px) {
  h5 > br {
    display: block;
  }
}

@media screen and (max-width: 576px) {
  .container {
    padding-left: 75px;
    padding-right: 75px;
  }
}
</style>
