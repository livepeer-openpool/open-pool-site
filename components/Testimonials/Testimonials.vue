<template>
  <div class="root">
    <v-container :class="{ fixed: isDesktop }">
      <div class="item">
        <title-main>
          <span>
            {{ $t('saasLanding.testi_title') }}
          </span>
        </title-main>
        <p :class="[isMobile ? 'text-center' : 'text-left']"
            v-html="$t('saasLanding.testi_content')"
            class="testi-subtitle use-text-subtitle2 text-left"
            ></p>

        <v-btn class="button btn-cta" target="_blank" href="https://explorer.livepeer.org/accounts/0x5263e0ce3a97b634d8828ce4337ad0f70b30b077/delegating" color="btn-cta">
          Stake LPT<v-icon dark right>fas fa-external-link-alt</v-icon>
        </v-btn>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './testi-style.scss';
</style>

<script>
import Parallax from 'vue-parallaxy'
import Hidden from '../Hidden'
import imgAPI from '~/static/images/imgAPI'
import Title from '../Title'

export default {
  components: {
    Parallax,
    Hidden,
    Slick: () => import('vue-slick'),
    'title-main': Title
  },
  data() {
    return {
      imgAPI,
      loaded: false,
      currentSlide: 0,
      slickOptions: {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        fade: true,
        arrows: false,
        pauseOnHover: false
      }
    }
  },
  computed: {
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp
      return lgUp.includes(this.$mq)
    },
    isMobile() {
      const smDown = this.$store.state.breakpoints.mdDown
      return smDown.includes(this.$mq)
    }
  },
  mounted() {
    this.loaded = true
  },
  methods: {
    handleAfterChange(event, slick, currentSlide) {
      this.currentSlide = currentSlide
    },
    gotoSlide(index) {
      this.$refs.slider.goTo(index)
    }
  }
}
</script>
