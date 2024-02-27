<template>
  <div class="root">
    <v-container :class="{ fixed: isDesktop }">
      <v-row class="slider-wrap">
        <v-col cols=12 md=6 sm=12>
           <div class="d-flex align-center justify-center my-6">
            <!-- <img :src="logo" class="banner-logo" /> -->
            <h2 class="use-text-title">{{$t('common.title')}}</h2>
          </div>
          <div class="d-flex align-center justify-center  my-6">
          <h3 class="use-text-title2">
              {{ $t('saasLanding.banner_titlestrong') }}
          </h3>
          </div>
          <div class="d-flex align-center justify-center  my-6">
                      <div class="use-text-subtitle text-center">
            {{ $t('saasLanding.banner_subtitle') }}
          </div>
          </div>
                    <div class="d-flex justify-center btn-area my-6">
            <v-btn
              href="#get_started"
              color="btn-cta"
              large
            >
              {{ $t('saasLanding.getstarted') }}
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
    
  </div>
</template>

<style lang="scss" scoped>
@import './banner-style.scss';
</style>

<script>
import Hidden from '../Hidden'
import logo from '~/static/images/open-pool-logo.png'
import youtube from '~/youtube'
import imgAPI from '~/static/images/imgAPI'
import link from '~/static/text/link'

export default {
  components: {
    Hidden
  },
  data() {
    return {
      logo,
      videoId: 'KxZAdEGpYAw',
      hide: false,
      link,
      imgAPI,
      dialog: false,
      player: null,
      playerVars: {
        autoplay: 0,
        controls: 1,
        rel: 0,
        showinfo: 1,
        mute: 0,
        origin: 'https://localhost:8008'
      },
      yt: youtube
    }
  },
  computed: {
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp
      return lgUp.includes(this.$mq)
    },
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.includes(this.$mq)
    }
  },
  methods: {
    handleVideoOpen() {
      if (!this.yt.use) {
        return false
      }
      this.dialog = true
      setTimeout(() => {
        this.player = this.$refs.youtube.player
        this.player.playVideo()
      }, 100)
    },
    handleVideoClose() {
      this.dialog = false
      this.player.pauseVideo()
    }
  }
}
</script>
