<template>
  <div class="root">
    <v-container :class="{ fixed: isDesktop }">
      <div class="item">
        <title-main >
          <span>
            {{ $t('saasLanding.feature_title1') }}
            <strong>
              {{ $t('saasLanding.feature_titlestrong1') }}
            </strong>
          </span>
        </title-main>
        <div class="tab">
          <v-row class="spacing6">
            <v-col class="pa-6">
              <section>
                <h6 class="use-text-subtitle2">
                  {{ $t('saasLanding.feature_desc1') }}
                </h6>
              </section>
            </v-col>
          </v-row>
        </div>
      </div>
      <div class="item last">
        <u-animate-container>
          <v-row :class="[isMobile ? 'column-reverse' : 'row align-center']">
            <v-col cols="12">
              <u-animate
                :offset="-100"
                name="fadeInLeftShort"
                delay="0.2s"
                duration="0.4s"
              >
                <div class="desc">
                  <title-main :align="isMobile ? 'center' : 'left'">
                    <span>
                      {{ $t('saasLanding.feature_title4') }}
                      <strong>
                        {{ $t('saasLanding.feature_titlestrong4') }}
                      </strong>
                    </span>
                  </title-main>
                  <h6 :class="[isMobile ? 'text-center' : 'text-left']" class="use-text-subtitle2">
                    {{ $t('saasLanding.feature_desc4') }}
                  </h6>
                </div>
              </u-animate>
            </v-col>
          </v-row>
        </u-animate-container>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './feature-style.scss';
</style>

<script>
import Parallax from 'vue-parallaxy'
import Title from '../Title'
import imgAPI from '~/static/images/imgAPI'

export default {
  components: {
    Parallax,
    'title-main': Title
  },
  data() {
    return {
      tab: null,
      imgAPI,
      loaded: false
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
  mounted() {
    this.loaded = true
  }
}
</script>