<template>
  <div class="s-card-text body-1 flex-grow-1 mb-3">
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'SCardText'
  }
</script>

<style lang="scss" scoped>
  .s-card-text {
    p:last-child {
      margin-bottom: 0;
    }

    ul, ol {
      &:not(:last-child) {
        margin-bottom: 1rem;
      }
    }
  }
</style>
