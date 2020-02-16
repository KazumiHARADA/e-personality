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
        <b-button
          :disabled="disableNextButton"
          @click="clickResultButton()"
          block
          variant="primary"
          >Result</b-button
        >
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import calculateScore from 'b5-calculate-score'
import RadioInput from '~/components/RadioInput.vue'
import SimpleQuestions from '~/assets/ja-simple-questions.json'
import firebase from '~/plugins/firebase'
import 'firebase/firestore'

export default {
  name: 'SimpleInput',
  components: {
    RadioInput
  },
  data() {
    return {
      questions: SimpleQuestions,
      disableNextButton: true
    }
  },
  mounted() {
    this.disableNextButton = !this.isFilledCurrentPage()
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
      this.$store.dispatch('simpleInputs/selectAnswer', entry)
      this.disableNextButton = !this.isFilledCurrentPage()
    },
    clickResultButton(next) {
      this.$gtag('event', 'simple-result', {
        event_category: 'click',
        event_label: this.$route.path
      })
      const entry = {
        answers: this.$store.state.simpleInputs.answerList
      }
      const calculatedResult = calculateScore(entry)
      const db = firebase.firestore()
      db.collection('simple-results')
        .add({
          answers: calculatedResult,
          email: this.$store.state.user.email,
          displayName: this.$store.state.user.displayName,
          photoURL: this.$store.state.user.photoURL
        })
        .then((v) => {
          console.log(v)
          this.$router.push('/simple/result' + '/?id=' + v.id)
        })
        .catch((e) => {
          console.log(e)
        })
    },
    isFilledCurrentPage() {
      if (this.questions === undefined) {
        return false
      }
      let result = true
      this.questions.forEach((question) => {
        const index = this.$store.state.simpleInputs.answerList.findIndex(
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
