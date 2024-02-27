<template>
  <fragment>
    <v-navigation-drawer
      v-if="isMobile"
      v-model="openDrawer"
      fixed
      temporary
      class="mobile-nav"
    >
      <mobile-menu :open="openDrawer" />
    </v-navigation-drawer>
    <v-app-bar
      v-scroll="handleScroll"
      :class="{ fixed: fixed, 'open-drawer': openDrawer }"
      id="header"
      class="header"
      fixed
      app
    >
      <v-container :class="{ 'fixed-width': isDesktop }">
        <div class="header-content">
          <nav
            :class="{ invert: invert }"
            class="nav-logo nav-menu"
          >
            <v-btn
              v-if="isMobile"
              :class="{ 'is-active': openDrawer }"
              @click.stop="handleToggleOpen"
              class="hamburger hamburger--spin mobile-menu"
              text
              icon
            >
              <span class="hamburger-box">
                <span class="bar hamburger-inner" />
              </span>
            </v-btn>
            <div v-if="isDesktop">
              <scrollactive
                v-if="loaded"
                :offset="navOffset"
                active-class="active"
                tag="ul"
              >
                <li
                  v-for="(item, index) in menuList"
                  :key="index"
                >
                  <v-btn
                    v-if="!invert"
                    :href="item.url"
                    @click="setOffset(item.offset)"
                    class="anchor-link scrollactive-item"
                    text
                  >
                    {{ $t('saasLanding.header_'+item.name) }}
                  </v-btn>
                  <v-btn
                    v-if="invert"
                    :href="'/' + item.url"
                    text
                  >
                    {{ $t('saasLanding.header_'+item.name) }}
                  </v-btn>
                </li>
                <li style="display: none;">
                  <v-btn
                    :href="link.saas.contact"
                    text
                  >
                    {{ $t('saasLanding.header_contact') }}
                  </v-btn>
                </li>
              </scrollactive>
            </div>
          </nav>
          <nav
            :class="{ invert: invert }"
            class="nav-menu"
          >
            <hidden point="xsDown">
              <v-btn :href="link.saas.openapp" target="_blank" color="btn-cta" class="button btn-cta">
              {{ $t('saasLanding.header_openapp') }}  <v-icon right>fas fa-external-link-alt</v-icon>  
              </v-btn>
            </hidden>
          </nav>
        </div>
      </v-container>
    </v-app-bar>
  </fragment>
</template>

<style lang="scss" scoped>
@import './header-style.scss';
</style>

<script>
import Hidden from '../Hidden'
import navMenu from './menu'
import Settings from './Settings'
import MobileMenu from './MobileMenu'
import brand from '~/static/text/brand'
import link from '~/static/text/link'
import logo from '~/static/images/open-pool-logo.png'

let counter = 0
function createData(name, url, offset) {
  counter += 1
  return {
    id: counter,
    name,
    url,
    offset
  }
}

export default {
  components: {
    'setting-menu': Settings,
    Hidden,
    MobileMenu
  },
  props: {
    invert: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      logo,
      link,
      loaded: false,
      brand,
      section: 0,
      fixed: false,
      openDrawer: null,
      navOffset: 60,
      menuList: [
        createData(navMenu[0], '#' + navMenu[0], 60),
        createData(navMenu[1], '#' + navMenu[1]),
        createData(navMenu[2], '#' + navMenu[2], 60),
        createData(navMenu[3], "#" + navMenu[3])
      ]
    }
  },
  computed: {
    isMobile() {
      const mdDown = this.$store.state.breakpoints.mdDown
      return mdDown.includes(this.$mq)
    },
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp
      return lgUp.includes(this.$mq)
    }
  },
  mounted() {
    this.loaded = true
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 80) {
        return (this.fixed = true)
      }
      return (this.fixed = false)
    },
    setOffset(offset) {
      this.navOffset = offset
    },
    handleToggleOpen() {
      this.openDrawer = !this.openDrawer
    }
  }
}
</script>
