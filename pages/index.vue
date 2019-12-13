<template>
  <b-container class="text-light pt-5 pt-sm-5 pt-md-5 pt-lg-5 pl-4 pr-4">
    <h1 class="title pt-4">Big Five 精密 <br />パーソナリティ診断</h1>
    <h5 class="subtitle pt-4">
      Big Five 理論に基づいて、精密に自身のパーソナリティを分析できます。
    </h5>

    <b-row class="pt-4" align-h="center">
      <b-col class="col-xs-10 col-sm-10 col-md-7">
        <blockquote class="blockquote text-left lead">
          <p><small>所要時間：10分</small></p>
          <p class="mt-n3"><small>オススメのやり方</small></p>
          <ul class="mt-n3">
            <li>
              <small
                >将来なりたい自分ではなく、今の自分はどうなのかで回答しましょう</small
              >
            </li>
            <li><small>正直に回答しましょう</small></li>
            <li><small>一人でやりましょう</small></li>
          </ul>
        </blockquote>
      </b-col>
    </b-row>
    <b-row class="pt-5" align-h="center">
      <b-col class="col-xs-10 col-sm-10 col-md-6">
        <div>
          <b-button block variant="success" @click="clickStartButton()"
            >テストを始める</b-button
          >
        </div>
      </b-col>
    </b-row>
    <b-row :class="resumeClass" align-h="center">
      <b-col class="col-xs-10 col-sm-10 col-md-6">
        <div>
          <b-button block variant="primary" to="/inputs/1"
            >テストを再開する</b-button
          >
        </div>
      </b-col>
    </b-row>
    <b-row class="fixed-bottom p-3 bg-transparent text-right font-weight-light">
      <b-col>
        <span style="font-size:15px"
          ><nuxt-link
            class="text-light"
            to="/result?id=5deb2014a96187066e0f6921"
            >v{{ version }}</nuxt-link
          ></span
        >
      </b-col>
    </b-row>
    <b-button block variant="primary" @click="clickNextButton()">api</b-button>
    <b-button block variant="primary" @click="clickResultButton()"
      >result</b-button
    >
  </b-container>
</template>

<script>
import Questions from '~/assets/ja-edited-questions.json'
import Package from '~/package.json'
import TestResults from '~/assets/test-data.json'

export default {
  data() {
    return {
      questions: Questions,
      version: Package.version,
      enableResume: false,
      resumeClass: 'd-none'
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
  computed: {
    state() {
      return Boolean(this.value)
    }
  },
  mounted() {
    this.resumeTest()
    if (this.enableResume) {
      this.resumeClass = 'pt-3'
    } else {
      this.resumeClass = 'd-none'
    }
  },
  methods: {
    resumeTest() {
      if (this.$store.state.inputs.answerList.length !== 0) {
        this.enableResume = true
      }
    },
    clickStartButton() {
      this.$store.commit('inputs/clear')
      this.$store.commit('progress/clear')
      this.$router.push('/inputs/1')
    },
    clickNextButton() {
      this.$axios
        .$post('/api/v1/firebase/find', {
          result: 'test'
        })
        .then((res) => {
          console.log(res)
        })
    },
    clickResultButton() {
      const entry = {
        answers: TestResults
      }
      this.$axios
        .$post('/api/v1/firebase/save', {
          result: entry
        })
        .then((res) => {
          this.$router.push('result/?id=' + res)
        })
    }
  }
}
</script>

<style scoped>
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
</style>
