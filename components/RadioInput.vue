<template>
  <div>
    <div>{{ title }}</div>
    <b-form-radio-group
      v-model="value"
      :options="options"
      :state="state"
      :name="questionId"
      @input="selectedRadioItem()"
    >
      <b-form-invalid-feedback :state="state"
        >Please select one
      </b-form-invalid-feedback>
      <b-form-valid-feedback :state="state">Thank you</b-form-valid-feedback>
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
      value: null,
      options: Choices[this.keyed]
    }
  },
  computed: {
    state() {
      return Boolean(this.value)
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
      this.callback(this.questionId, selectItemInfo.score)
    }
  }
}
</script>

<style scoped></style>
