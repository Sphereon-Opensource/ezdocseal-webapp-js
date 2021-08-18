<template>
  <v-container
    fluid
    class="fill-height py-0"
  >
    <v-row class="fill-height">
      <v-col
        cols="12"
        sm="6"
        class="d-flex flex-column justify-center mb-4 mb-sm-0"
      >
        <div :style="{ margin: marginLeftSide }">
          <slot name="left" />
        </div>
      </v-col>
      <v-col
        cols="12"
        sm="6"
        class="d-flex flex-column justify-center white"
      >
        <div
          class="pa-sm-4 pa-md-8"
          :style="{ margin: marginRightSide }"
        >
          <slot name="right" />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'LayoutOne',

    computed: {
      marginLeftSide() {
        return this.$vuetify.breakpoint.xsOnly ?
          `${this.$store.state.header.height}px 0 0` :
          `${this.$store.state.header.height}px 0`;
      },

      marginRightSide() {
        return this.$vuetify.breakpoint.smAndUp ?
          `${this.$store.state.header.height}px 0` :
          '';
      }
    },

    mounted() {
      this.$store.commit('page/setLayout', 'one');
    }
  }
</script>
