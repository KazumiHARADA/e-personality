<template>
  <div class="container">
    <div>
      <logo />
      <chart />
      <h1 class="title">
        e-personality
      </h1>
      <h2 class="subtitle">
        My spectacular Nuxt.js project
      </h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
      <div>
        <radio-input title="tes" name="test" :selected-item="selectedItem" />
        <radio-input title="tes" name="test2" />
        <b-form-radio-group
          v-model="value"
          :options="options"
          :state="state"
          name="radio-validation3"
          @change="selectedItem()"
        >
          <b-form-invalid-feedback :state="state"
            >Please select one
          </b-form-invalid-feedback>
          <b-form-valid-feedback :state="state"
            >Thank you
          </b-form-valid-feedback>
        </b-form-radio-group>
        <b-form-radio-group
          v-model="value2"
          :options="options"
          :state="state"
          name="radio-validation2"
          @change="selectedItem()"
        >
          <b-form-invalid-feedback :state="state"
            >Please select one
          </b-form-invalid-feedback>
          <b-form-valid-feedback :state="state"
            >Thank you
          </b-form-valid-feedback>
        </b-form-radio-group>
        <div v-for="(question, key) in questions" :key="key">
          {{ question.text }}
          <b-form-radio-group
            v-model="value"
            :options="options"
            :state="state"
            name="radio-validation"
            @change="selectedItem()"
          >
            <b-form-invalid-feedback :state="state"
              >Please select one
            </b-form-invalid-feedback>
            <b-form-valid-feedback :state="state"
              >Thank you
            </b-form-valid-feedback>
          </b-form-radio-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Chart from '~/components/Chart.vue'
import jsonData from '~/assets/en-questions.json'
import RadioInput from '~/components/RadioInput.vue'

export default {
  components: {
    Logo,
    Chart,
    RadioInput
  },
  data() {
    return {
      result: [],
      value: null,
      value2: 1,
      options: [
        { text: 'First radio', value: 'first' },
        { text: 'Second radio', value: 'second' },
        { text: 'Third radio', value: 'third' }
      ],
      questions: jsonData
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
  methods: {
    selectedItem() {
      console.log(this)
      this.result.push('test')
      console.log(this.result)
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
