<template>
  <div class="button-radio">
    <div class="mt-0 mt-md-4 mt-lg-4"></div>
    <div :class="className">
      <div>
        <b-row>
          <b-col cols="1" />
          <b-col cols="10" class="text-left text-white mt-5 mb-4">
            <h3>{{ title }}</h3>
          </b-col>
          <b-col cols="1" />
        </b-row>
      </div>
      <b-row align-h="center" class="mt-5 mb-5">
        <b-col cols="2">
          <radio-selection
            type="double"
            :name="questionId"
            :keyed="keyed"
            :selected-value="value"
            @select="selectedRadioItem2"
          />
        </b-col>
        <b-col cols="2">
          <radio-selection
            type="circle"
            :name="questionId"
            :keyed="keyed"
            :selected-value="value"
            @select="selectedRadioItem2"
          />
        </b-col>
        <b-col cols="2">
          <radio-selection
            type="bar"
            :name="questionId"
            :keyed="keyed"
            :selected-value="value"
            @select="selectedRadioItem2"
          />
        </b-col>
        <b-col cols="2">
          <radio-selection
            type="triangle"
            :name="questionId"
            :keyed="keyed"
            :selected-value="value"
            @select="selectedRadioItem2"
          />
        </b-col>
        <b-col cols="2">
          <radio-selection
            type="cross"
            :name="questionId"
            :keyed="keyed"
            :selected-value="value"
            @select="selectedRadioItem2"
          />
        </b-col>
      </b-row>
      <!--      <b-form-radio-group-->
      <!--        id="test"-->
      <!--        v-model="value"-->
      <!--        class="mt-2 ml-3"-->
      <!--        :options="options"-->
      <!--        :state="state"-->
      <!--        :name="questionId"-->
      <!--        :stacked="stacked"-->
      <!--        :plain="true"-->
      <!--        size="lg"-->
      <!--        @input="selectedRadioItem()"-->
      <!--      >-->
      <!--        <p slot="first">a</p>-->
      <!--        <b-form-valid-feedback :state="state" />-->
      <!--      </b-form-radio-group>-->
    </div>
    <div class="mt-4 mt-md-5 mt-lg-5"></div>
  </div>
</template>

<script>
import Choices from '../assets/choices.json'
import RadioSelection from '~/components/RadioSelection'
import Log from '~/libs/log'

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
    console.log(this.value)
  },
  methods: {
    selectedRadioItem() {
      Log.d(this.value)
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
</style>
