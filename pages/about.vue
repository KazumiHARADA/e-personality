<template>
  <b-container class="text-light pt-2 pl-4 pr-4">
    <h1 class="title pt-4">About this App</h1>
    <h2 class="title pt-4">Release Note</h2>
    <b-row class="mt-box" align-h="center">
      <b-col class="text-dark pt-3 pb-3" sm="10" md="10" lg="10" lx="10">
        <div v-for="(note, key) in notes" :key="key">
          <b-card :title="note.version" class="mb-2">
            <div class="release-card">{{ note.date }}</div>
            <b-card-text>
              {{ note.content }}
            </b-card-text>
          </b-card>
        </div>
      </b-col>
    </b-row>
    <hr />
    <h3>Created by</h3>
    <b-img
      width="120"
      height="120"
      thumbnail
      rounded="circle"
      src="myphoto.png"
      alt="UserImage"
    ></b-img>
    <h5 class="mt-2">Kazumi HARADA</h5>
    <p class="mt-2">Full stack engineer</p>
    <b-row class="mt-box" align-h="center">
      <b-col sm="1" md="1" lg="1" lx="1">
        <a class="icon-button" href="https://github.com/KazumiHARADA">
          <b-img
            width="60"
            height="60"
            rounded="circle"
            src="github.png"
            alt="GithubImage"
          />
        </a>
      </b-col>
      <b-col sm="1" md="1" lg="1" lx="1">
        <a class="icon-button" href="https://twitter.com/kazu04r">
          <b-img
            width="60"
            height="60"
            rounded="circle"
            src="twitter.png"
            alt="TwitterImage"
          />
        </a>
      </b-col>
      <b-col sm="1" md="1" lg="1" lx="1">
        <a class="icon-button" href="https://qiita.com/kazu04r">
          <b-img
            width="60"
            height="60"
            rounded="circle"
            src="qiita.png"
            alt="QiitaImage"
          />
        </a>
      </b-col>
    </b-row>
    <h4 class="mt-5">Designed by</h4>
    <b-img
      width="60"
      height="60"
      thumbnail
      rounded="circle"
      src="https://coconala.com/img/resized/172x172/b0f4f5fe93c290b75aeddbe9b284fc247e02155eab14e2b1611884162aa85772.PNG"
      alt="UserImage"
    ></b-img>
    <h5 class="mt-2">KAL san</h5>
    <p class="mt-2">Web Designer</p>
    <b-row class="mt-box" align-h="center">
      <b-col sm="1" md="1" lg="1" lx="1">
        <a class="icon-button" href="https://profile.coconala.com/users/515123">
          <b-img
            width="60"
            height="60"
            rounded="circle"
            src="coconala.png"
            alt="coconalaImage"
          />
        </a>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import ReleaseNote from '~/assets/release-note.json'
export default {
  data() {
    return {
      notes: ReleaseNote
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
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description'
        }
      ]
    }
  },
  mounted() {}
}
</script>

<style scoped lang="scss">
.icon-button {
  width: 60px;
  height: 60px;
}
.icon-button .rounded-circle {
}

.release-note-box {
  height: 200px;
}

.release-card {
  position: absolute;
  right: 10px;
  top: 4px;
  font-size: 17px;
}
</style>
