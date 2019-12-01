<template>
  <div class="mt-4-5">
    <div>{{ title }}</div>
    <b-form-radio-group
      v-model="value"
      class="mt-2"
      :options="options"
      :state="state"
      :name="questionId"
      size="lg"
      @input="selectedRadioItem()"
    >
      <b-form-valid-feedback :state="state" />
    </b-form-radio-group>
  </div>
</template>

<script>
import Choices from '../assets/choices.json'

export default {
  name: 'RadioInput',
  props: {
    title: {
      type: String,
      default: ''
    },
    keyed: {
      type: String,
      default: ''
    },
    questionId: {
      type: String,
      default: ''
    },
    callback: {
      type: Function,
      default() {}
    }
  },
  data() {
    return {
      value: ((answerList, id) => {
        return ((findResult) => {
          if (findResult === undefined) {
            return null
          } else {
            return findResult.value
          }
        })(answerList.find((answer) => answer.id === id))
      })(this.$store.state.inputs.answerList, this.questionId),
      options: Choices[this.keyed]
    }
  },
  computed: {
    state() {
      if (this.value === null) {
        return null
      } else {
        return Boolean(this.value)
      }
    }
  },
  methods: {
    selectedRadioItem() {
      console.log(Choices[this.keyed])
      const selectItemInfo = this.options.find(
        (answer) => answer.text === this.value
      )
      console.log(selectItemInfo.score)
      console.log(this.questionId)
      console.log(this.value)
      this.callback(this.questionId, selectItemInfo.score, this.value)
    }
  }
}
</script>

<style scoped>
.mt-4-5 {
  margin-top: 2.5rem !important;
}
</style>
