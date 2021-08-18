<template>
  <div
    class="s-logo"
    :style="{ paddingTop }"
  >
    <img
      :src="src"
      :width="width"
      :height="height"
      :alt="alt"
    >
  </div>
</template>

<script>
  export default {
    name: 'SLogo',

    props: {
      src: {
        type: String,
        required: true
      },
      width: {
        type: Number,
        required: true
      },
      height: {
        type: Number,
        required: true
      },
      alt: {
        type: String,
        default: ''
      }
    },

    computed: {
      paddingTop() {
        return `${(this.height / this.width) * 100}%`;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .s-logo {
    position: relative;

    overflow: hidden;

    img {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;

      display: block;

      max-width: 100%;

      height: auto;
    }
  }
</style>
