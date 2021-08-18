<template>
  <v-container>
    <v-row
      justify="center"
      :style="{ margin }"
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
    name: 'LayoutContent',

    computed: {
      margin() {
        return `${this.$store.state.header.height}px 0`
      }
    },

    mounted() {
      this.$store.commit('page/setLayout', 'content');
    }
  }
</script>
