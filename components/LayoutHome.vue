<template>
  <v-container class="fill-height py-0">
    <v-row
      align="center"
      justify="center"
      :style="{ margin }"
      no-gutters
    >
      <v-col
        lg="10"
        xl="9"
      >
        <slot />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'LayoutHome',

    computed: {
      margin() {
        return this.$vuetify.breakpoint.xsOnly ?
          `${this.$store.state.header.height}px 0 0` :
          `${this.$store.state.header.height}px 0`;
      }
    },

    mounted() {
      this.$store.commit('page/setLayout', 'home');
    }
  }
</script>
