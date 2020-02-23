<template>
  <div class="background-top">
    <Header v-if="!isLogin" />
    <UserHeader v-if="isLogin" />
    <nuxt />
  </div>
</template>
<script>
import Header from '~/components/Header'
import UserHeader from '~/components/UserHeader'
import Auth from '~/plugins/auth'
import firebase from '~/plugins/firebase'
import 'firebase/firestore'
export default {
  components: {
    Header,
    UserHeader
  },
  computed: {
    isLogin() {
      return this.$store.state.user.isLogin
    }
  },
  created() {
    Auth()
      .then((user) => {
        if (user) {
          this.$store.dispatch('user/login', user)
          const db = firebase.firestore()
          return db
            .collection('results')
            .where('email', '==', user.email)
            .limit(1)
            .get()
            .then((v) => {
              this.$store.dispatch('user/findBeforeId', v.docs[0].id)
            })
            .catch((e) => {
              console.log(e)
            })
        } else {
          this.$store.dispatch('user/logout')
        }
      })
      .catch((e) => {
        console.log(e)
      })
  }
}
</script>
<style lang="scss">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  height: 100%;
}

@media (min-height: 842px) {
  //842pxから
  body,
  #__nuxt,
  #__layout {
    height: 100%;
  }
}

@media (max-height: 841px) {
  //841pxまで
  body,
  #__nuxt,
  #__layout {
  }
}

.background-top {
  background-position: center;
  background-image: url('/personality_top_bg_md.webp') !important;
  background-size: cover;
  height: 100%;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.container {
  text-align: center;
  padding-top: 200px;
  font-size: 20px;
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-active {
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in 0.8s;
}
.bounce-leave-active {
  animation: bounce-out 0.5s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(0);
  }
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(30px, 0);
}
.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-30px, 0);
}

.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  /* Set the fixed height of the footer here */
  background-color: #f5f5f5;
}

.sample {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  opacity: 0.7;
}
</style>
