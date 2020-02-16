<template>
  <span class="radio-selection">
    <div
      v-if="type === 'double'"
      class="doubleInput"
      @input="selectedRadioItem(doubleValue)"
    >
      <input
        :id="'double' + name"
        v-model="value"
        type="radio"
        :name="name"
        :value="doubleValue"
      />
      <label :for="'double' + name">
        <div class="content">
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
            <circle
              id="double_1"
              class="double"
              cx="31"
              cy="31"
              r="30"
            ></circle>
            <circle
              id="double_2"
              class="double"
              cx="31"
              cy="31"
              r="20"
            ></circle>
          </svg>
          <div class="selectionText">
            {{ doubleValue }}
          </div>
        </div>
      </label>
    </div>
    <div
      v-else-if="type === 'circle'"
      class="circleInput"
      @input="selectedRadioItem(circleValue)"
    >
      <input
        :id="'circle' + name"
        v-model="value"
        type="radio"
        :name="name"
        :value="circleValue"
      />
      <label :for="'circle' + name">
        <div class="content">
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
            <circle
              id="circle_1"
              class="circle"
              cx="26"
              cy="26"
              r="25"
            ></circle>
          </svg>
          <div class="selectionText">
            {{ circleValue }}
          </div>
        </div>
      </label>
    </div>
    <div
      v-else-if="type === 'bar'"
      class="barInput"
      @input="selectedRadioItem(barValue)"
    >
      <input
        :id="'bar' + name"
        v-model="value"
        type="radio"
        :name="name"
        :value="barValue"
      />
      <label :for="'bar' + name">
        <div class="content">
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
          <div class="selectionText">
            {{ barValue }}
          </div>
        </div>
      </label>
    </div>
    <div
      v-else-if="type === 'triangle'"
      class="triangleInput"
      @input="selectedRadioItem(triangleValue)"
    >
      <input
        :id="'triangle' + name"
        v-model="value"
        type="radio"
        :name="name"
        :value="triangleValue"
      />
      <label :for="'triangle' + name">
        <div class="content">
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
          <div class="selectionText">
            {{ triangleValue }}
          </div>
        </div>
      </label>
    </div>
    <div
      v-else-if="type === 'cross'"
      class="crossInput"
      @input="selectedRadioItem(crossValue)"
    >
      <input
        :id="'cross' + name"
        v-model="value"
        type="radio"
        :name="name"
        :value="crossValue"
      />
      <label :for="'cross' + name">
        <div class="content">
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
          <div class="selectionText">
            {{ crossValue }}
          </div>
        </div>
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
    },
    keyed: {
      type: String,
      default: ''
    },
    selectedValue: {
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
      value: this.selectedValue,
      doubleValue: 'とてもそう',
      circleValue: '少しそう',
      barValue: 'どちらでもない',
      triangleValue: '少し違う',
      crossValue: '全然違う'
    }
  },
  mounted() {
    console.log(this.selectedValue)
  },
  methods: {
    selectedRadioItem(value) {
      console.log(value)
      console.log(this.selectedValue)
      this.$emit('select', value)
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
  position: relative;
  width: 100%;
  color: #fff;
  background-color: transparent;
  border: solid 4px $borderColor;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .selectionText {
    margin-bottom: 0.5vw;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
}

.radio-selection label:before {
  content: '';
  display: block;
  padding-top: 100%;
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

.radio-selection {
  svg {
    display: block;
    margin: 2.75vw auto 0;
  }
  .doubleInput svg {
    width: 3.5vw;
  }
  .circleInput svg {
    width: 3.5vw;
  }
  .barInput svg {
    margin-top: 4.5vw;
    width: 3vw;
  }
  .triangleInput svg {
    width: 3.5vw;
  }
  .crossInput svg {
    margin-top: 3vw;
    width: 3vw;
  }
}

@media (min-width: 1200px) {
  //1200px から
  $baseWidth: 45px;
  $baseMarginTop: 42px;
  .radio-selection {
    svg {
      display: block;
      margin: $baseMarginTop auto 0;
    }
    .doubleInput svg {
      width: $baseWidth;
    }
    .circleInput svg {
      width: $baseWidth;
    }
    .barInput svg {
      margin-top: $baseMarginTop + 18px;
      width: $baseWidth;
    }
    .triangleInput svg {
      width: $baseWidth;
    }
    .crossInput svg {
      margin-top: $baseMarginTop + 3px;
      width: $baseWidth - 5px;
    }
  }
  .selectionText {
    font-size: 21px;
  }
}

@media (min-width: 992px) and (max-width: 1200px) {
  //992px から 1200pxまで
  $baseWidth: 40px;
  $baseMarginTop: 30px;
  .radio-selection {
    svg {
      display: block;
      margin: $baseMarginTop auto 0;
    }
    .doubleInput svg {
      width: $baseWidth;
    }
    .circleInput svg {
      width: $baseWidth;
    }
    .barInput svg {
      margin-top: $baseMarginTop + 18px;
      width: $baseWidth;
    }
    .triangleInput svg {
      width: $baseWidth;
    }
    .crossInput svg {
      margin-top: $baseMarginTop + 3px;
      width: $baseWidth - 5px;
    }
  }
  .selectionText {
    font-size: 18px;
  }
}

@media (min-width: 768px) and (max-width: 992px) {
  //768px から 992pxまで
  $baseWidth: 35px;
  $baseMarginTop: 20px;
  .radio-selection {
    svg {
      display: block;
      margin: $baseMarginTop auto 0;
    }
    .doubleInput svg {
      width: $baseWidth;
    }
    .circleInput svg {
      width: $baseWidth;
    }
    .barInput svg {
      margin-top: $baseMarginTop + 18px;
      width: $baseWidth;
    }
    .triangleInput svg {
      width: $baseWidth;
    }
    .crossInput svg {
      margin-top: $baseMarginTop + 3px;
      width: $baseWidth - 5px;
    }
  }
  .selectionText {
    font-size: 15px;
  }
}

@media (min-width: 576px) and (max-width: 768px) {
  //576px から 768pxまで
  $baseWidth: 32px;
  $baseMarginTop: 10px;
  .radio-selection {
    svg {
      display: block;
      margin: $baseMarginTop auto 0;
    }
    .doubleInput svg {
      width: $baseWidth;
    }
    .circleInput svg {
      width: $baseWidth;
    }
    .barInput svg {
      margin-top: $baseMarginTop + 18px;
      width: $baseWidth;
    }
    .triangleInput svg {
      width: $baseWidth;
    }
    .crossInput svg {
      margin-top: $baseMarginTop + 3px;
      width: $baseWidth - 5px;
    }
  }
  .selectionText {
    font-size: 11px;
  }
}

@media (max-width: 576px) {
  //576px まで
  $baseWidth: 6vw;
  $baseMarginTop: 4vw;
  .radio-selection {
    svg {
      display: block;
      margin: $baseMarginTop auto 0;
    }
    .doubleInput svg {
      width: $baseWidth;
    }
    .circleInput svg {
      width: $baseWidth;
    }
    .barInput svg {
      margin-top: $baseMarginTop + 2.8vw;
      width: $baseWidth;
    }
    .triangleInput svg {
      width: $baseWidth;
    }
    .crossInput svg {
      margin-top: $baseMarginTop + 0.25vw;
      width: $baseWidth - 0.5vw;
    }
  }
  .selectionText {
    display: none !important;
  }
}
// svg style
.double {
  fill: none;
  stroke: #fff;
  stroke-width: 2px;
}

.circle {
  fill: none;
  stroke: #fff;
  stroke-width: 2px;
}

.bar {
  fill: #fff;
  fill-rule: evenodd;
}

.triangle {
  fill: none;
  stroke: #fff;
  stroke-width: 2px;
  fill-rule: evenodd;
}

.cross {
  fill: none;
  stroke: #fff;
  stroke-width: 2px;
  fill-rule: evenodd;
}
</style>
