<template>
  <div :class="align" class="title-secondary">
    <h3>
      <slot />
    </h3>
  </div>
</template>

<style lang="scss" scoped>
@import './title-style.scss';
</style>

<script>
export default {
  props: {
    align: {
      type: String,
      default: 'left'
    }
  }
}
</script>
