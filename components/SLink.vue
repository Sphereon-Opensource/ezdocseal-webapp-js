<template>
  <component
    :is="component"
    v-bind="properties"
    class="s-link"
  >
    <slot />
  </component>
</template>

<script>
  export default {
    name: 'SLink',

    props: {
      to: {
        type: [ Object, String ],
        required: true
      },
      target: {
        type: String,
        default: '_blank',
        validator: value => [
          '_blank',
          '_self',
          '_top',
          '_parent'
        ].includes(value)
      }
    },

    computed: {
      component() {
        return typeof this.to === 'string' && this.to.includes(':') ? 'a' : 'nuxt-link';
      },

      properties() {
        return this.component === 'nuxt-link' ? {
          to: this._to
        } : {
          href: this.to,
          target: this.to.includes('://') ? this.target : null,
          rel: 'noopener'
        };
      },

      _to() {
        if (typeof this.to === 'string' && !this.to.startsWith('/')) {
          return `/${this.to}`;
        }

        return this.to;
      }
    }
  }
</script>
