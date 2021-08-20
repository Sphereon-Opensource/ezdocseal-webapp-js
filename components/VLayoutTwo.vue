<template>
  <v-container
    fluid
    class="py-0"
  >
    <v-row>
      <v-col
        cols="12"
        sm="6"
        class="d-flex flex-column white">
        <div
          class="pa-sm-4 pa-md-8"
          :style="{ margin: marginTopSide }">
          <slot name="top"/>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="1"
        sm="12"
        class="d-flex flex-column order-sm-1 mb-4 mb-sm-0"
      >
        <div :style="{ margin: marginBottomSide }">
          <slot name="bottom"/>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'VLayoutTwo',

  computed: {
    marginTopSide() {
      return this.$vuetify.breakpoint.smAndUp ?
        `${this.$store.state.header.height}px 0 -40` :
        '';
    },

    marginBottomSide() {
      return this.$vuetify.breakpoint.xsOnly ?
        `4px 0 0` :
        `4px 0`;
    }
  },

  mounted() {
    this.$store.commit('page/setLayout', 'vtwo')
  }
}
</script>
