<template>
  <div>
    <div :class="className">
      <div>
        <strong>{{ title }}</strong>
      </div>
      <b-form-radio-group
        v-model="value"
        class="mt-2 ml-2"
        :options="options"
        :state="state"
        :name="questionId"
        :stacked="stacked"
        size="lg"
        @input="selectedRadioItem()"
      >
        <b-form-valid-feedback :state="state" />
      </b-form-radio-group>
    </div>
    <div class="mt-4"></div>
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
      options: Choices[this.keyed],
      stacked: false,
      className: ''
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
  mounted() {
    if (process.browser) {
      console.log(this.$nuxt.$device)
      this.stacked = !this.$nuxt.$device.isDesktopOrTablet
      if (!this.$nuxt.$device.isDesktopOrTablet) {
        this.className = 'text-left'
      }
    }
  },
  methods: {
    selectedRadioItem() {
      const selectItemInfo = this.options.find(
        (answer) => answer.text === this.value
      )
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
