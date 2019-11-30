<template>
  <div class="container">
    <div>
      <logo />
      <chart />
      <h1 class="title">
        e-personality
      </h1>
      <h2 class="subtitle">
        My spectacular Nuxt.js project
      </h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
      <nuxt-link to="/inputs/1">input page</nuxt-link>
      <div v-for="(question, key) in questions" :key="key">
        <radio-input
          :question-id="question.id"
          :keyed="question.keyed"
          :title="question.text"
          :callback="selectedItem"
        />
      </div>
      <div>
        <b-button block variant="primary" @click="calc"
          >Block Level Button</b-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import calculateScore from 'b5-calculate-score'
import Logo from '~/components/Logo.vue'
import Chart from '~/components/Chart.vue'
import Questions from '~/assets/ja-edited-questions.json'
import RadioInput from '~/components/RadioInput.vue'
import TestResult from '~/assets/test-data.json'

export default {
  components: {
    Logo,
    Chart,
    RadioInput
  },
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
