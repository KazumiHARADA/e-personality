<template>
  <b-container>
    <b-progress :max="10" height="1rem" class="mt-n10">
      <b-progress-bar :value="5">
        <strong>{{ 5 }} / {{ 10 }}</strong>
      </b-progress-bar>
    </b-progress>
    <b-card class="mt-5 pb-5 shadow" bg-variant="light" text-variant="black">
      <div v-for="(question, key) in questions" :key="key">
        <radio-input
          :question-id="question.id"
          :keyed="question.keyed"
          :title="question.text"
          :callback="selectedItem"
        />
      </div>
    </b-card>
    <b-row class="pt-5 pb-4" align-h="center">
      <b-col class="col-xs-6 col-sm-4 col-md-3">
        <b-button block :to="prev" variant="primary">&lt; Prev</b-button>
      </b-col>
      <b-col class="col-xs-6 col-sm-4 col-md-3">
        <b-button block :to="next" variant="primary">Next &gt;</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Questions from '~/assets/ja-edited-questions.json'
import RadioInput from '~/components/RadioInput.vue'

const pageCount = 8

export default {
  name: 'InputPage',
  components: {
    RadioInput
  },
  asyncData({ params }) {
    return {
      next: ((page) => {
        const next = Number(page) + 1
        const maxPage = Questions.length / pageCount
        if (next > maxPage) {
          return '/result'
        } else {
          return '/inputs/' + next
        }
      })(params.page),
      prev: ((page) => {
        const prev = Number(page) - 1
        if (prev <= 0) {
          return '/'
        } else {
          return '/inputs/' + prev
        }
      })(params.page),
      questions: ((page) => {
        if (page === undefined) {
          return Questions.slice(0, pageCount)
        } else {
          const realPage = page - 1 // change first index to one
          const start = pageCount * realPage
          const end =
            start + pageCount > Questions.length
              ? Questions.length
              : start + pageCount
          return Questions.slice(start, end)
        }
      })(params.page)
    }
  },
  transition(to, from) {
    if (!from) {
      return 'slide-left'
    }
    return +to.params.page < +from.params.page ? 'slide-right' : 'slide-left'
  },
  methods: {
    selectedItem(questionId, itemScore, radioValue) {
      const questionInfo = this.questions.find(
        (question) => questionId === question.id
      )
      const entry = {
        id: questionId,
        domain: questionInfo.domain,
        facet: questionInfo.facet,
        score: itemScore,
        value: radioValue
      }
      this.$store.commit('inputs/upsert', entry)

      console.log(this.$store.state.inputs.answerList)
    }
  }
}
</script>

<style scoped>
.mt-n10 {
  margin-top: -11rem !important;
}
</style>
