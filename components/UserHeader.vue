<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand to="/">ePersonality Test</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <!--        <b-nav-item to="/inputs/1" right>Test</b-nav-item>-->
        <!--        <b-nav-item to="/result" right>Result</b-nav-item>-->
        <b-nav-item-dropdown right class="test">
          <template slot="button-content">
            <b-img
              width="30"
              height="30"
              thumbnail
              rounded="circle"
              :src="url"
              alt="UserImage"
            ></b-img>
          </template>
          <b-dropdown-item @click="clickLoginButton()">
            Result
          </b-dropdown-item>
          <b-dropdown-item @click="clickLogoutButton()">
            Logout
          </b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import firebase from '~/plugins/firebase'
import 'firebase/auth'
export default {
  name: 'UserHeader',
  data() {
    return {
      url: this.$store.state.user.photoURL
    }
  },
  asyncData({ store }) {
    return {
      url: store.state.user.photoURL
    }
  },
  methods: {
    clickLoginButton() {
      firebase
        .auth()
        .signInWithRedirect(new firebase.auth.GoogleAuthProvider())
        .then((res) => console.log(res))
        .catch((e) => console.log(e))
    },
    clickLogoutButton() {
      firebase
        .auth()
        .signOut()
        .then((res) => {
          console.log(res)
          this.$store.dispatch('user/logout')
        })
        .catch((e) => {
          console.log(e)
          this.$store.dispatch('user/logout')
        })
    }
  }
}
</script>

<style>
.test .dropdown-toggle::after {
  display: none;
}
</style>
