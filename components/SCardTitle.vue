<template>
  <component
    :is="tag"
    class="s-card-title display-1 font-weight-bold mb-3 d-flex align-center"
  >
    <s-avatar
      v-if="icon"
      :src="icon"
      :width="48"
      :height="48"
      color="primary"
      class="mr-2"
    />
    <slot />
  </component>
</template>

<script>
  import SAvatar from '@/components/SAvatar';

  export default {
    name: 'SCardTitle',

    components: { SAvatar },

    props: {
      tag: {
        type: String,
        default: 'div'
      },
      icon: {
        type: [ String, Boolean ],
        default: false
      }
    }
  }
</script>
