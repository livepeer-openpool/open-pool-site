<template>
  <div class="mobile-nav">
    <div
      :class="{ 'menu-open': open }"
      class="menu"
    >
      <v-list
        dense
        tag="nav"
      >
        <v-list-item
          v-for="(item, index) in navMenu"
          :key="index"
          :href="'#' + item"
          :style="{ animationDuration: index * 0.15 + 's' }"
          link
        >
          <v-list-item-content>
            <v-list-item-title class="menu-list">
              {{ $t('saasLanding.header_'+item) }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          :href="link.saas.contact"
          :style="{ animationDuration: navMenu.length * 0.15 + 's' }"
          link
        >
          <v-list-item-content style="display:none;">
            <v-list-item-title class="menu-list">
              {{ $t('saasLanding.header_contact') }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider class="divider-sidebar" />

      </v-list>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './header-style';
</style>

<script>
import navMenu from './menu'
import link from '~/static/text/link'

export default {
  props: {
    open: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      link,
      navMenu
    }
  }
}
</script>
