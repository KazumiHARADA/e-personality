<template>
  <b-container class="text-light pt-2 pl-4 pr-4">
    <h1 class="title pt-4">Big Five 精密 <br />パーソナリティ診断</h1>
    <h5 class="subtitle pt-1">
      Big Five 理論に基づいて、精密に自身のパーソナリティを分析できます。
    </h5>
    <b-row class="mt-box" align-h="center">
      <b-col sm="10" md="4" lg="3" lx="3">
        <div class="squareBox top-box bg-dark-shades">
          <div class="content">
            <img class="top-icon" src="icon1.png" />
            <div class="top-text p-2">
              <p><small>将来なりたい自分ではなく、 今の</small></p>
              <p><small>自分はどうなのかで回答しましょう</small></p>
            </div>
          </div>
        </div>
      </b-col>
      <b-col
        sm="10"
        md="4"
        lg="3"
        lx="3"
        class="ml-lg-2 mr-lg-2 ml-lx-2 mr-lx-2 ml-md-0 mr-md-0"
        ><div class="squareBox top-box bg-dark-shades">
          <div class="content">
            <img class="top-icon" src="icon2.png" style="left: 20px;" />
            <div class="top-text pb-4">
              <small>正直に回答しましょう</small>
            </div>
          </div>
        </div></b-col
      >
      <b-col sm="10" md="4" lg="3" lx="3"
        ><div class="squareBox top-box bg-dark-shades">
          <div class="content">
            <img class="top-icon" src="icon3.png" />
            <div class="top-text pb-4">
              <small>一人でやりましょう</small>
            </div>
          </div>
        </div></b-col
      >
    </b-row>
    <b-row class="button-area mt-button-area" align-h="center" align-v="end">
      <b-col v-if="enableResume" sm="10" md="4" lg="3" lx="3"
        ><b-button
          class="sub-button-restart"
          variant="outline-secondary"
          @click="clickStartButton()"
        >
          <div class="triangle-sub"></div
        ></b-button>
        <h4 class="button-title mt-1">テストを始める</h4>
        <small class="button-description">所要時間：10分</small></b-col
      >
      <b-col v-else sm="10" md="4" lg="3" lx="3"></b-col>
      <b-col v-if="enableResume" sm="10" md="4" lg="4" lx="4">
        <b-button
          class="main-button"
          variant="outline-secondary"
          @click="clickResumetButton()"
        >
          <div class="triangle-top"></div
        ></b-button>
        <h2 class="button-title mt-1">テストを再開する</h2>
        <small class="button-description">所要時間：10分</small>
      </b-col>
      <b-col v-else sm="10" md="4" lg="4" lx="4">
        <b-button
          class="main-button"
          variant="outline-secondary"
          @click="clickStartButton()"
        >
          <div class="triangle-top"></div
        ></b-button>
        <h2 class="button-title mt-1">テストを始める</h2>
        <small class="button-description">所要時間：10分</small>
      </b-col>
      <b-col sm="10" md="4" lg="3" lx="3"
        ><b-button
          class="sub-button-short"
          variant="outline"
          @click="clickSimpleStartButton()"
        >
          <div class="triangle-sub-short"></div
        ></b-button>
        <h4 class="button-title mt-1">短縮版はこちら</h4>
        <small class="button-description">所要時間：2分</small>
      </b-col>
    </b-row>
    <b-row class="fixed-bottom p-3 bg-transparent text-right font-weight-light">
      <b-col>
        <span style="font-size:15px"
          ><nuxt-link class="text-light" to="/result?id=177LI3975Wk78cuHqgLi"
            >v{{ version }}</nuxt-link
          ></span
        >
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Questions from '~/assets/ja-edited-questions.json'
import Package from '~/package.json'

export default {
  layout: 'top',
  data() {
    return {
      questions: Questions,
      version: Package.version,
      enableResume: false,
      resumeClass: 'd-none',
      isLogin: this.$store.state.user.isLogin,
      colSize: '3',
      windowSize: {
        x: 0,
        y: 0
      }
    }
  },
  computed: {
    state() {
      return Boolean(this.value)
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        // `hid` は一意の識別子として使用されます。 `vmid` は動作しないので使わないでください。
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description'
        }
      ]
    }
  },
  mounted() {
    this.resumeTest()
    if (this.enableResume) {
      this.resumeClass = 'pt-3'
    } else {
      this.resumeClass = 'd-none'
    }
    // this.handleResize()
    // window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      if (window.innerWidth < 992) {
        this.colSize = '10'
      } else {
        this.colSize = '3'
      }
    },
    resumeTest() {
      if (this.$store.state.inputs.answerList.length !== 0) {
        this.enableResume = true
      }
    },
    clickResumetButton() {
      this.$gtag('event', 'resume', {
        event_category: 'click',
        event_label: this.$route.path
      })
      this.$router.push('/inputs/1')
    },
    clickStartButton() {
      this.$gtag('event', 'start', {
        event_category: 'click',
        event_label: this.$route.path
      })
      this.$store.dispatch('inputs/resetAnswers')
      this.$router.push('/inputs/1')
    },
    clickSimpleStartButton() {
      this.$gtag('event', 'simple-start', {
        event_category: 'click',
        event_label: this.$route.path
      })
      this.$store.dispatch('simpleInputs/resetAnswers')
      this.$router.push('/simple/input')
    }
  }
}
</script>

<style scoped lang="scss">
.top-box {
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
}

h1 > br {
  display: none;
}
@media screen and (max-width: 800px) {
  h1 > br {
    display: block;
  }
}

h5 > br {
  display: none;
}
@media screen and (max-width: 800px) {
  h5 > br {
    display: block;
  }
}

@media screen and (max-width: 576px) {
  .container {
    padding-left: 75px;
    padding-right: 75px;
  }
}

@media (max-width: 1200px) {
  h2,
  .h2 {
    font-size: calc(1.325rem + 0.7vw);
  }
}
.squareBox {
  position: relative;
}

.squareBox::before {
  display: block;
  content: '';
  padding-top: 100%;
}

.content {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.top-icon {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 35px;
  margin: auto;
  width: 41%;
}

.top-text {
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
}

.top-text p {
  line-height: 2px;
}

small {
  font-size: 60%;
}

.main-button {
  width: 150px;
  height: 150px;
  border: 8px solid;
  border-radius: 50%;
}

.main-button:hover {
  color: #212529;
  background-color: #5ec84e;
  border-color: #212529;
}

.main-button:hover div {
  border-left-color: #212529;
}

.sub-button-restart {
  width: 75px;
  height: 75px;
  border: 6px solid;
  border-radius: 50%;
}

.sub-button-restart:hover {
  color: #212529;
  background-color: #5ec84e;
  border-color: #212529;
}

.sub-button-restart:hover div {
  border-left-color: #212529;
}

.sub-button-short {
  width: 75px;
  height: 75px;
  border: 6px solid #ffffff;
  border-radius: 50%;
}

.sub-button-short:hover {
  color: #212529;
  background-color: #ffffff;
  border-color: #212529;
}

.sub-button-short:hover div {
  border-left-color: #212529;
}

.button-area {
  line-height: 2px;
}
.mt-box {
  margin-top: 4rem !important;
}

.mt-button-area {
  margin-top: 4rem !important;
}
</style>
