<template>
  <footer :class="{ invert: invert }" class="footer">
    <v-container class="max-lg">
      <v-row class="spacing4">
        <v-col
          class="pa-4"
          md="3"
          cols="12"
        >
          <div class="logo">
            <img
              :src="logo"
              alt="Open Pool"  
            >
          </div>
        </v-col>
        <v-col
          md="6"
          cols="12"
          class="pa-4"
        >
          <div class="socmed">
            <v-btn class="mx-2" fab dark large color="btn-cta" href="https://github.com/livepeer-openpool" target="_blank">
              <v-icon dark>fab fa-github</v-icon>
            </v-btn>
            <v-btn class="mx-2" fab dark large color="btn-cta" href="https://t.me/openpoolcom" target="_blank">
              <v-icon dark class="fab fa-telegram-plane"></v-icon>
            </v-btn>
          </div>
        </v-col>
                <v-col
          class="px-6 py-0"
          md="3"
          cols="12"
        >
         <v-select
            :items="langList"
            :value="lang"
            v-model="lang"
            @change="switchLang(lang)"
            label=""
            outlined
            class="select-lang"
            prepend-inner-icon="mdi-web"
          />
        </v-col>
      </v-row>
    </v-container>
  </footer>
</template>

<style scoped lang="scss">
@import './footer-style';
</style>

<script>
import logo from '~/static/images/open-pool-logo.png'
import brand from '~/static/text/brand'

export default {
  props: {
    invert: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    logo,
    brand,
    lang: 'en'
  }),
  computed: {
    isDesktop() {
      const mdUp = this.$store.state.breakpoints.mdUp
      return mdUp.includes(this.$mq)
    },
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.includes(this.$mq)
    },
    langList() {
      const list = []
      this.$i18n.locales.map((item) => {
        list.push({ text: this.$t('common.' + item.code), value: item.code })
      })
      return list
    }
  },
  mounted() {
    this.lang = this.$i18n.locale
  },
  methods: {
    switchLang(val) {
      this.$i18n.setLocale(val)
    }
  }
}
</script>
