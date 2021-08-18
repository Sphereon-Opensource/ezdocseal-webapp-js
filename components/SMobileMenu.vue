<template>
  <div
    v-intersect.once="intersect"
    v-resize="resize"
    class="s-mobile-menu"
    role="menu"
  >
    <v-slide-y-transition>
      <div
        v-if="load"
        v-show="open"
        :id="uid"
        class="list"
      >
        <div class="header">
          <div class="append">
            <slot
              name="close"
              :close="() => toggle(false)"
              :attrs="attrsClose"
            >
              <v-btn
                text
                icon
                v-bind="attrsClose"
                @click="open = false"
              >
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </slot>
          </div>
        </div>
        <nav
          class="overflow"
          role="navigation"
        >
          <s-mobile-menu-item
            v-for="item in items"
            :key="item._uid"
            :blok="item"
          />
        </nav>
      </div>
    </v-slide-y-transition>
    <slot
      name="open"
      :open="() => toggle(true)"
      :attrs="attrsOpen"
    >
      <v-btn
        text
        icon
        v-bind="attrsOpen"
        @click="open = true"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </slot>
  </div>
</template>

<script>
  import { Intersect, Resize } from 'vuetify/lib/directives';

  import { uid } from '@/assets/js/uid';

  import SMobileMenuItem from '@/components/SMobileMenuItem';

  export default {
    name: 'SMobileMenu',

    components: { SMobileMenuItem },

    directives: { Intersect, Resize },

    props: {
      value: {
        type: Boolean,
        default: false
      }
    },

    data() {
      return {
        open: !!this.value,
        load: false
      };
    },

    computed: {
      uid() {
        return uid();
      },

      items() {
        return [
          ...[
            {
              name: 'Home',
              to: '/'
            },
            {
              name: 'sign',
              to: '/sign'
            }
          ].map(value => ({ ...value, _uid: uid() })),
          ...this.$store.state.settings.mainNav || []
        ];
      },

      attrsOpen() {
        return {
          'aria-label': 'Open menu',
          'aria-haspopup': 'true',
          'aria-expanded': this.open.toString(),
          'aria-controls': this.uid
        };
      },

      attrsClose() {
        return {
          'aria-label': 'Sluit menu',
          'aria-haspopup': 'true',
          'aria-expanded': this.open.toString(),
          'aria-controls': this.uid
        };
      }
    },

    watch: {
      $route() {
        this.open = false;
      },

      open(value) {
        !!value !== this.value && this.$emit('input', value);
      },

      value(value) {
        this.open = !!value;
      }
    },

    methods: {
      toggle(value) {
        this.open = value;
      },

      resize() {
        if (!this.$vuetify.breakpoint.xsOnly) {
          this.open = false;
        }
      },

      intersect(entries, observer, isIntersecting) {
        if (isIntersecting) {
          this.load = true;
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  $z-index: 300;
  $color: #fff;
  $list-background-color: var(--v-secondary-base);
  $btn-color: #fff;
  $btn-size: 36px;

  .s-mobile-menu {
    position: relative;
    z-index: $z-index;

    color: $color;

    .list {
      display: flex;

      flex-direction: column;

      padding: .75rem 0;

      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: $z-index + 1;

      background-color: $list-background-color;
    }

    .header {
      display: flex;

      align-items: center;

      margin-bottom: .5rem;

      padding: 0 .75rem;

      .append {
        flex: 0 0 $btn-size;
        max-width: $btn-size;

        margin-left: calc(100% - #{$btn-size});

        position: relative;
        z-index: $z-index + 10;

        .v-btn {
          color: $btn-color;
        }
      }
    }

    .overflow {
      flex-grow: 1;

      max-height: 100%;

      overflow-x: hidden;
      overflow-y: auto;
    }
  }
</style>
