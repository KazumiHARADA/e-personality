<template>
  <div>
    <b-navbar toggleable="lg" class="bg-transparent" variant="info">
      <b-navbar-brand class="text-white" @click="clickBrandButton()"
        >ePersonality Test</b-navbar-brand
      >

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <!--        <b-nav-item to="/inputs/1" right>Test</b-nav-item>-->
          <!--        <b-nav-item to="/result" right>Result</b-nav-item>-->
          <b-nav-item right @click="clickLoginButton()"
            ><b-button variant="outline-secondary">Login</b-button></b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <hr class="mt-0 mb-0" />
  </div>
</template>

<script>
import firebase from '~/plugins/firebase'
import 'firebase/auth'
export default {
  name: 'Header',
  methods: {
    clickBrandButton() {
      this.$gtag('event', 'brand', {
        event_category: 'click',
        event_label: this.$route.path
      })
      this.$router.push('/')
    },
    clickLoginButton() {
      this.$gtag('event', 'login', { method: 'Google' })
      firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider())
    }
  }
}
</script>

<style scoped></style>
