<template>
  <div>
    <b-navbar toggleable="lg" class="bg-transparent" variant="info">
      <b-navbar-brand @click="clickBrandButton()" class="text-white"
        >ePersonality</b-navbar-brand
      >

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item class="about" to="/about" right>About</b-nav-item>
          <b-nav-item-dropdown right class="test">
            <template slot="button-content">
              <b-img
                :src="imageUrl"
                width="30"
                height="30"
                thumbnail
                rounded="circle"
                alt="UserImage"
              ></b-img>
            </template>
            <b-dropdown-item
              :disabled="disableResult"
              @click="clickResultButton()"
            >
              Result
            </b-dropdown-item>
            <b-dropdown-item @click="clickLogoutButton()">
              Logout
            </b-dropdown-item>
          </b-nav-item-dropdown>
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
  name: 'UserHeader',
  data() {
    return {
      imageUrl: this.$store.state.user.photoURL
    }
  },
  computed: {
    disableResult() {
      return this.$store.state.user.beforeId === ''
    }
  },
  methods: {
    clickBrandButton() {
      this.$gtag('event', 'brand', {
        event_category: 'click',
        event_label: this.$route.path
      })
      this.$router.push('/')
    },
    clickResultButton() {
      this.$gtag('event', 'userResult', {
        event_category: 'click',
        event_label: this.$route.path
      })
      this.$router.push('/result?id=' + this.$store.state.user.beforeId)
    },
    clickLogoutButton() {
      this.$gtag('event', 'logout', {
        event_category: 'click',
        event_label: this.$route.path
      })
      firebase
        .auth()
        .signOut()
        .then((res) => {
          this.$store.dispatch('user/logout')
        })
        .catch((e) => {
          this.$gtag('event', 'exception', {
            description: e.toString(),
            fatal: false
          })
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
.navbar-brand {
  cursor: pointer;
}

.about a {
  margin: 7px;
  color: #fff !important;
}

.test a {
  margin: 4px;
}
</style>
