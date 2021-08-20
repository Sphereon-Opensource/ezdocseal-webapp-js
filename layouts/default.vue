<template>
  <v-app>
    <s-header/>
    <v-main role="main">
      <slot>
        <nuxt/>
      </slot>
    </v-main>
  </v-app>
</template>

<script>
  import {mapState} from 'vuex';

  import SHeader from '@/components/SHeader';

  export default {
    name: 'Default',

    components: {SHeader},

    data: () => ({
      scrollY: 0
    }),

    computed: {
      ...mapState('page', ['noScroll'])
    },

    watch: {
      noScroll(value) {
        if (value) {
          this.scrollY = window.scrollY;

          return document.documentElement.classList.add('no-scroll');
        }

        document.documentElement.classList.remove('no-scroll');

        window.scrollTo(0, this.scrollY);
      }
    }
  }
</script>

<style lang="scss">
  html, body {
    height: 100%;
  }

  html.no-scroll {
    overflow: hidden;

    body {
      overflow: hidden;
    }
  }

  a {
    transition: color .2s ease-out;
  }

  .v-file-input {
    overflow-x: hidden;
  }
</style>

<style lang="scss" scoped>
  .theme--light.v-application {
    background: var(--v-secondary_dark-base) url('/background.jpg') no-repeat center top / cover;
  }
</style>
