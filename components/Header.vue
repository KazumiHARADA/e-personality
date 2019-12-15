<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand @click="clickBrandButton()"
      >ePersonality Test</b-navbar-brand
    >

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <!--        <b-nav-item to="/inputs/1" right>Test</b-nav-item>-->
        <!--        <b-nav-item to="/result" right>Result</b-nav-item>-->
        <b-nav-item right @click="clickLoginButton()">Login</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
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
