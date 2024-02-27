<template>
  <v-container class="fixed-width">
      <div class="row align-center justify-center">
        <h3 class="use-text-title2">Built On</h3>
        <img :src="livepeerLogo" />
        </div>
  </v-container>
</template>

<style lang="scss" scoped>
@import './logo-style.scss';
</style>

<script>
export default {
  data() {
    return {
      livepeerLogo: '/images/livepeer-white.png'
    }
  }
}
</script>
