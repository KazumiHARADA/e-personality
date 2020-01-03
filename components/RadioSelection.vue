<template>
  <span class="radio-selection">
    <div v-if="type === 'double'" @input="selectedRadioItem()">
      <input
        :id="'double' + name"
        v-model="selectedItems"
        type="radio"
        :name="name"
        value="aaa"
      />
      <label :for="'double' + name">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 62 62">
          <defs>
            <style>
              .double {
                fill: none;
                stroke: #fff;
                stroke-width: 2px;
              }
            </style>
          </defs>
          <circle id="double_1" class="double" cx="31" cy="31" r="30"></circle>
          <circle id="double_2" class="double" cx="31" cy="31" r="20"></circle>
        </svg>
        とてもそう
      </label>
    </div>
    <div v-else-if="type === 'circle'" @input="selectedRadioItem()">
      <input :id="'circle' + name" type="radio" :name="name" value="circle" />
      <label :for="'circle' + name">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
          <defs>
            <style>
              .circle {
                fill: none;
                stroke: #fff;
                stroke-width: 2px;
              }
            </style>
          </defs>
          <circle id="circle_1" class="circle" cx="26" cy="26" r="25"></circle>
        </svg>
        少しそう
      </label>
    </div>
    <div v-else-if="type === 'bar'" @input="selectedRadioItem()">
      <input :id="'bar' + name" type="radio" :name="name" value="bar" />
      <label :for="'bar' + name">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 2">
          <defs>
            <style>
              .bar {
                fill: #fff;
                fill-rule: evenodd;
              }
            </style>
          </defs>
          <path
            id="shape"
            class="bar"
            d="M940,435v-2h40v2H940Z"
            transform="translate(-940 -433)"
          ></path>
        </svg>
        どちらでもない
      </label>
    </div>
    <div v-else-if="type === 'triangle'" @input="selectedRadioItem()">
      <input
        :id="'triangle' + name"
        type="radio"
        :name="name"
        value="triangle"
      />
      <label :for="'triangle' + name" @input="selectedRadioItem()">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50.87 44.969">
          <defs>
            <style>
              .triangle {
                fill: none;
                stroke: #fff;
                stroke-width: 2px;
                fill-rule: evenodd;
              }
            </style>
          </defs>
          <path
            id="triangle"
            class="triangle"
            d="M1196.02,454.271l-48.86-1.283,25.54-41.67Z"
            transform="translate(-1146.16 -410.312)"
          ></path>
        </svg>
        少し違う
      </label>
    </div>
    <div v-else-if="type === 'cross'">
      <input :id="'cross' + name" type="radio" :name="name" value="cross" />
      <label :for="'cross' + name">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42.63 42">
          <defs>
            <style>
              .cross {
                fill: none;
                stroke: #fff;
                stroke-width: 2px;
                fill-rule: evenodd;
              }
            </style>
          </defs>
          <path
            id="cross"
            class="cross"
            d="M1364.35,414.707l1.07-1.468,38.92,38.554-1.08,1.468Zm38.85-1.152,1.45,1.1-39.17,38.293-1.45-1.1Z"
            transform="translate(-1363.03 -412.25)"
          ></path>
        </svg>
        全然違う
      </label>
    </div>
  </span>
</template>

<script>
export default {
  name: 'RadioSelection',
  props: {
    type: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      selectedItems: [],
      checkedClass: 'checkedLabel'
    }
  },
  methods: {
    selectedRadioItem() {
      console.log(this.selectedItems)
    }
  }
}
</script>

<style lang="scss" scoped>
$borderColor: #5ec84e;
$hoverColor: #212529;
.radio-selection div {
  display: inline;
}
.radio-selection input[type='radio'] {
  display: none;
}

.radio-selection label {
  display: inline-block;
  color: #fff;
  background-color: transparent;
  border: solid 4px $borderColor;
  padding: 5px 10px;
}

.radio-selection input[type='radio']:checked + label {
  border: solid 4px $hoverColor;
  background-color: $borderColor;
  color: $hoverColor;
  .double,
  .circle,
  .triangle,
  .cross {
    stroke: $hoverColor;
  }
  .bar {
    fill: $hoverColor;
  }
}

.radio-selection .checkedLabel label {
  border: solid 4px $hoverColor;
  background-color: $borderColor;
  color: $hoverColor;
  .double,
  .circle,
  .triangle,
  .cross {
    stroke: $hoverColor;
  }
  .bar {
    fill: $hoverColor;
  }
}
</style>
