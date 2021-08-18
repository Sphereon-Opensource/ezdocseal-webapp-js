<template>
  <div class="s-card d-flex flex-column pa-3 pa-sm-6">
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'SCard'
  }
</script>

<style lang="scss" scoped>
  @import '~assets/scss/breakpoint.scss';

  .s-card {
    background-color: white;

    border-radius: $spacer * 3;

    @include breakpoint(sm-and-up) {
      border-radius: $spacer * 6;
    }
  }
</style>
