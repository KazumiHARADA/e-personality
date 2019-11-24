<template>
  <div>
    <div>{{ title }}</div>
    <b-form-radio-group
      v-model="value"
      :options="options"
      :state="state"
      :name="name"
      @change="selectedItem()"
    >
      <b-form-invalid-feedback :state="state"
        >Please select one</b-form-invalid-feedback
      >
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
    name: {
      type: String,
      default: ''
    },
    keyed: {
      type: String,
      default: ''
    },
    selectedItem: {
      type: Function,
      default() {}
    }
  },
  data() {
    return {
      value: null,
      options: Choices[this.keyed]
    }
  }
}
</script>

<style scoped></style>
