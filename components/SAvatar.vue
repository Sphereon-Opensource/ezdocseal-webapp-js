<template>
  <div
    :class="[ 's-avatar', color ]"
    :style="styles"
  >
    <img
      :src="src"
      alt=""
    >
  </div>
</template>

<script>
  export default {
    name: 'SAvatar',

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

      color: {
        type: String,
        default: ''
      }
    },

    computed: {
      styles() {
        const perc = .4;

        return {
          width: `${this.width}px`,
          height: `${this.height}px`,
          padding: `${(this.width * perc) / 2}px ${(this.height * perc) / 2}px`
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .s-avatar {
    display: flex;

    align-items: center;
    justify-content: center;

    border-radius: 50%;

    img {
      display: block;

      width: 100%;
      height: 100%;
    }
  }
</style>
