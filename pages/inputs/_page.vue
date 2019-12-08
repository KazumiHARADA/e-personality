<template>
  <b-container class="pt-0">
    <b-card class="mt-3 shadow" bg-variant="light" text-variant="black">
      <div v-for="(question, key) in questions" :key="key">
        <radio-input
          :question-id="question.id"
          :keyed="question.keyed"
          :title="question.text"
          :callback="selectedItem"
        />
      </div>
    </b-card>
    <b-row class="pt-3 pb-7" align-h="center">
      <b-col class="col-xs-6 col-sm-4 col-md-3">
        <b-button block :to="prev" variant="primary">&lt; Prev</b-button>
      </b-col>
      <b-col class="col-xs-6 col-sm-4 col-md-3">
        <b-button
          block
          variant="primary"
          :disabled="disableNextButton"
          @click="clickNextButton(next)"
          >Next &gt;</b-button
        >
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
  layout: 'input',
  components: {
    RadioInput
  },
  data() {
    return {
      next: '/',
      prev: '/',
      total: Questions.length,
      disableNextButton: true
    }
  },
  computed: {
    completed() {
      return this.$store.state.progress.completed
    }
  },
  asyncData({ params, store }) {
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
  mounted() {
    this.disableNextButton = !this.isFilledCurrentPage()
  },
  transition(to, from) {
    if (from === undefined || from.fullPath === '/') {
      return 'page'
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
      const resultIndex = this.$store.state.inputs.answerList.findIndex(
        (answer) => answer.id === entry.id
      )
      if (resultIndex === -1) {
        // 新規登録のため進捗をカウントアップ
        this.$store.commit('progress/countUp')
      }
      this.$store.commit('inputs/upsert', entry)
      this.disableNextButton = !this.isFilledCurrentPage()
    },
    clickNextButton(next) {
      if (next === '/result') {
        const entry = {
          answers: this.$store.state.inputs.answerList
        }
        this.$axios
          .$post('/api/v1/save', {
            result: entry
          })
          .then((res) => {
            this.$store.commit('inputs/clear')
            this.$store.commit('progress/clear')
            this.$router.push(next + '/?id=' + res)
          })
      } else {
        this.$router.push(next)
      }
    },
    isFilledCurrentPage() {
      if (this.questions === undefined) {
        return false
      }
      let result = true
      this.questions.forEach((question) => {
        const index = this.$store.state.inputs.answerList.findIndex(
          (answer) => answer.id === question.id
        )
        if (index === -1) {
          result = false
        }
      })
      return result
    }
  }
}
</script>

<style scoped></style>
