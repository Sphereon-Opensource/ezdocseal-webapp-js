<template>
  <layout-content>
    <component :is="is" />
  </layout-content>
</template>

<script>
  import ErrorDefault from '@/components/ErrorDefault';
  import Error404 from '@/components/Error404';
  import LayoutContent from '@/components/LayoutContent';

  export default {
    name: 'Error',

    layout: 'default',

    components: { LayoutContent, ErrorDefault, Error404 },

    props: {
      error: {
        type: Object,
        default: () => ({})
      }
    },

    computed: {
      is() {
        return this.error.statusCode === 404 ? 'error-404' : 'error-default';
      }
    }
  }
</script>
