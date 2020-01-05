<template>
  <b-container class="pt-5">
    <div v-for="(question, key) in questions" :key="key">
      <radio-input
        :question-id="question.id"
        :keyed="question.keyed"
        :title="question.text"
        :callback="selectedItem"
      />
    </div>
    <b-row class="pt-3 pb-7" align-h="center">
      <b-col cols="1">
        <b-button block variant="primary" @click="clickPrevButton(prev)">
          &lt; Prev
        </b-button>
      </b-col>
      <b-col cols="10">
        <b-button
          :class="nextButtonClass"
          variant="outline-secondary"
          :disabled="disableNextButton"
          @click="clickNextButton(next)"
        >
          <span class="next-button-text">
            Next
          </span>
          <div class="next-button-play">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63 71">
              <defs>
                <style>
                  .cls-1 {
                    fill: #ffffff;
                    fill-rule: evenodd;
                  }
                </style>
              </defs>
              <path
                id="play"
                class="cls-1"
                d="M1003,1087.5L940.007,1123v-71.01Z"
                transform="translate(-940 -1052)"
              />
            </svg>
          </div>
        </b-button>
      </b-col>
      <b-col cols="1"></b-col>
    </b-row>
  </b-container>
</template>

<script>
import calculateScore from 'b5-calculate-score'
import Questions from '~/assets/ja-edited-questions.json'
import RadioInput from '~/components/RadioInput.vue'
import firebase from '~/plugins/firebase'
import 'firebase/firestore'

const pageCount = 8

export default {
  name: 'InputPage',
  layout: 'input',
  components: {
    RadioInput
  },
  head() {
    return {
      meta: [{ hid: 'robots', name: 'robots', content: 'noindex' }]
    }
  },
  data() {
    return {
      next: '/',
      prev: '/',
      total: Questions.length,
      disableNextButton: true,
      nextButtonClass: ''
    }
  },
  computed: {
    completed() {
      return this.$store.state.inputs.completed
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
    if (this.isFilledCurrentPage()) {
      this.nextButtonClass = 'next-button ' + 'next-button-hover'
    } else {
      this.nextButtonClass = 'next-button'
    }
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
      this.$store.dispatch('inputs/selectAnswer', entry)
      this.disableNextButton = !this.isFilledCurrentPage()
      if (this.isFilledCurrentPage()) {
        this.nextButtonClass = 'next-button ' + 'next-button-hover'
      } else {
        this.nextButtonClass = 'next-button'
      }
    },
    clickNextButton(next) {
      if (next === '/result') {
        this.$gtag('event', 'result', {
          event_category: 'click',
          event_label: this.$route.path
        })
        const entry = {
          answers: this.$store.state.inputs.answerList
        }
        const calculatedResult = calculateScore(entry)
        const db = firebase.firestore()
        db.collection('results')
          .add({
            answers: calculatedResult,
            email: this.$store.state.user.email,
            displayName: this.$store.state.user.displayName,
            photoURL: this.$store.state.user.photoURL
          })
          .then((v) => {
            this.$router.push(next + '/?id=' + v.id)
          })
          .catch((e) => {
            console.log(e)
          })
      } else {
        this.$gtag('event', 'next', {
          event_category: 'click',
          event_label: this.$route.path
        })
        this.$router.push(next)
      }
    },
    clickPrevButton(prev) {
      this.$gtag('event', 'prev', {
        event_category: 'click',
        event_label: this.$route.path
      })
      this.$router.push(prev)
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

<style lang="scss" scoped>
.next-button {
  width: 150px;
  height: 150px;
  border: 8px solid;
  border-radius: 50%;

  .next-button-text {
    color: white;
    font-size: 4vw;
  }

  .next-button-play {
    width: 3vw;
    padding-top: 0.3vw;
    margin: 0 auto;
  }
}

.next-button-hover:hover {
  background-color: #5ec84e;
  border-color: #212529;

  .next-button-text {
    color: #212529;
  }

  .next-button-play path {
    fill: #212529;
  }
}
</style>
