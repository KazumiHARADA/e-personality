<template>
  <div class="container">
    <div v-for="(question, key) in questions" :key="key">
      <radio-input
        :question-id="question.id"
        :keyed="question.keyed"
        :title="question.text"
        :callback="selectedItem"
      />
    </div>
    <nuxt-link :to="prev">prev</nuxt-link>
    <nuxt-link :to="next">next</nuxt-link>
  </div>
</template>

<script>
import Questions from '~/assets/ja-edited-questions.json'
import RadioInput from '~/components/RadioInput.vue'

export default {
  name: 'InputPage',
  components: {
    RadioInput
  },
  asyncData({ params }) {
    return {
      next: ((page) => {
        const next = Number(page) + 1
        const maxPage = Questions.length / 10
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
          return Questions.slice(0, 10)
        } else {
          const realPage = page - 1 // change first index to one
          const start = 10 * realPage
          const end =
            start + 10 > Questions.length ? Questions.length : start + 10
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

<style scoped></style>
