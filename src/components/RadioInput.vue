<template>
  <div class="button-radio">
    <div class="mt-0 mt-md-4 mt-lg-4"></div>
    <div :class="className">
      <div>
        <b-row>
          <b-col cols="1" />
          <b-col
            :id="selectorId"
            cols="10"
            class="text-left text-white mt-5 mb-4"
          >
            <h3>{{ title }}</h3>
          </b-col>
          <b-col cols="1" />
        </b-row>
      </div>
      <b-row align-h="center" class="mt-5 mb-5">
        <b-col cols="2">
          <radio-selection
            :name="questionId"
            :keyed="keyed"
            :selected-value="value"
            @select="selectedRadioItem2"
            type="double"
          />
        </b-col>
        <b-col cols="2">
          <radio-selection
            :name="questionId"
            :keyed="keyed"
            :selected-value="value"
            @select="selectedRadioItem2"
            type="circle"
          />
        </b-col>
        <b-col cols="2">
          <radio-selection
            :name="questionId"
            :keyed="keyed"
            :selected-value="value"
            @select="selectedRadioItem2"
            type="bar"
          />
        </b-col>
        <b-col cols="2">
          <radio-selection
            :name="questionId"
            :keyed="keyed"
            :selected-value="value"
            @select="selectedRadioItem2"
            type="triangle"
          />
        </b-col>
        <b-col cols="2">
          <radio-selection
            :name="questionId"
            :keyed="keyed"
            :selected-value="value"
            @select="selectedRadioItem2"
            type="cross"
          />
        </b-col>
      </b-row>
    </div>
    <div class="mt-4 mt-md-5 mt-lg-5"></div>
  </div>
</template>

<script>
import Choices from '../assets/choices.json'
import RadioSelection from '~/components/RadioSelection'

export default {
  name: 'RadioInput',
  components: {
    RadioSelection
  },
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
    questionNumber: {
      type: Number,
      default: 0
    },
    callback: {
      type: Function,
      default() {}
    }
  },
  data() {
    return {
      selectorId: 'question' + this.questionNumber,
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
    console.log(this.value)
  },
  methods: {
    selectedRadioItem() {
      const selectItemInfo = this.options.find(
        (answer) => answer.text === this.value
      )
      this.callback(this.questionId, selectItemInfo.score, this.value)
    },
    selectedRadioItem2(value) {
      const selectItemInfo = this.options.find(
        (answer) => answer.text === value
      )
      this.callback(this.questionId, selectItemInfo.score, value)
    }
  }
}
</script>

<style lang="scss" scoped>
$iconWidth: 2rem;
$iconHeight: 2rem;
$boxInnerColor: #b5b5b5;

.mt-4-5 {
  margin-top: 2.5rem !important;
}

.double-circle {
  width: $iconWidth;
  height: $iconHeight;
  border: double 7px $boxInnerColor;
  border-radius: 50%;
  margin: auto;
}

.double {
  width: $iconWidth;
  height: $iconHeight;
  border: solid 2px $boxInnerColor;
  border-radius: 50%;
  margin: auto;
}

.bar-box {
  width: $iconWidth;
  height: $iconHeight;
  margin: auto;
  padding-top: 1rem;
}
.bar {
  width: 100%;
  margin-top: 0;
  margin-bottom: 0;
  border: 1px solid $boxInnerColor;
}

.triangle {
  border-right: 1rem solid transparent;
  border-bottom: 1.73rem solid $boxInnerColor;
  border-left: 1rem solid transparent;
}
@media (min-width: 768px) and (max-width: 992px) {
  .col-2 {
    padding-right: 7.5px !important;
    padding-left: 7.5px !important;
  }
}
@media (min-width: 576px) and (max-width: 768px) {
  .col-2 {
    padding-right: 5px !important;
    padding-left: 5px !important;
  }
}

@media (max-width: 576px) {
  //576px まで
  .col-2 {
    padding-right: 2px !important;
    padding-left: 2px !important;
  }
}
</style>
