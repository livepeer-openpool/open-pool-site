<template>
  <div class="terminalroot">
    <div id="termynal" data-termynal data-ty-typeDelay="40" data-ty-lineDelay="700">
    <span data-ty="input">livepeer -ethAcctAddr 0xF5ba856B4DBfBf3A56b01eFd0697fc188cE1aFD8 -nvidia 0,1</span>
    <!--
    <span data-ty="progress"></span>
    <span data-ty>Successfully installed spacy</span>
    -->
</div>
  </div>
</template>

<script>
import { Termynal } from './termynal'

export default {
  mounted() {
    new Termynal('#termynal')
  }
}
</script>

<style lang="scss" scoped>
@import './termynal.scss';
@import './animated-terminal.scss';
</style>
