<template>
  <div :class="[ 's-mobile-menu-item', { active, 'exact-active': exactActive } ]">
    <div class="inner">
      <div class="prepend">
        <s-link
          :to="to"
          role="menuitem"
        >
          {{ blok.name }}
        </s-link>
      </div>
      <div
        v-if="children.length"
        class="append"
      >
        <v-btn
          text
          icon
          aria-label="Toon onderliggende menu items"
          aria-haspopup="true"
          :aria-expanded="open.toString()"
          :aria-controls="uid"
          @click="open = true"
        >
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </div>
    </div>
    <v-slide-x-reverse-transition v-if="children.length">
      <div
        v-show="open"
        :id="uid"
        class="list"
      >
        <div class="header">
          <div class="prepend">
            <v-btn
              text
              icon
              aria-label="Toon vorige menu items"
              aria-haspopup="true"
              :aria-expanded="open.toString()"
              :aria-controls="uid"
              @click="open = false"
            >
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
          </div>
          <div class="heading">
            <span>{{ blok.name }}</span>
          </div>
        </div>
        <div class="children">
          <s-mobile-menu-item
            v-for="item in children"
            :key="item._uid"
            :blok="item"
          />
        </div>
      </div>
    </v-slide-x-reverse-transition>
  </div>
</template>

<script>
  import { uid } from '@/assets/js/uid';

  import SLink from '@/components/SLink';

  export default {
    name: 'SMobileMenuItem',

    components: { SLink },

    props: {
      blok: {
        type: Object,
        required: true
      }
    },

    data: () => ({
      open: false
    }),

    computed: {
      uid() {
        return uid();
      },

      children() {
        return this.blok.children || [];
      },

      to() {
        return this.blok.to || '';
      },

      exactActive() {
        return this.$route.path === this.to;
      },

      active() {
        return this.to !== '/' && this.$route.path.startsWith(`${this.to}/`);
      }
    },

    watch: {
      $route() {
        if (!this.$vuetify.breakpoint.xsOnly) {
          return;
        }

        this.open = this.isActive()
      }
    },

    mounted() {
      this.open = this.isActive();
    },

    methods: {
      isActive() {
        return !!this.children.length && (this.exactActive || this.active);
      }
    }
  }
</script>

<style lang="scss" scoped>
  $z-index: 300;
  $color: #fff;
  $background-color: var(--v-secondary-lighten1);
  $background-color-active: var(--v-secondary-lighten2);
  $border-color: var(--v-secondary-lighten2);
  $border-color-active: var(--v-secondary-lighten3);
  $list-background-color: var(--v-secondary-base);
  $btn-color: #fff;
  $btn-size: 36px;

  .s-mobile-menu-item {
    padding: 0 .75rem;

    color: $color;

    background-color: $background-color;

    border: solid $border-color;
    border-width: 0 0 1px 0;

    &:first-child {
      border-width: 1px 0;
    }

    &.active,
    &.exact-active {
      background-color: $background-color-active;

      border-bottom-color: $border-color-active;
    }

    .inner {
      display: flex;

      align-items: center;

      .prepend {
        flex-grow: 1;
      }

      .append .v-btn {
        color: $btn-color;
      }
    }

    .list {
      display: flex;

      flex-direction: column;

      padding: .75rem 0;

      position: absolute;
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

      .prepend {
        flex: 0 0 $btn-size;
        max-width: $btn-size;

        .v-btn {
          color: $btn-color;
        }
      }

      .heading {
        $width: calc(100% - #{$btn-size * 2});

        flex: 0 0 $width;
        max-width: $width;

        text-align: center;

        padding: 0 .5rem;

        span {
          display: block;

          font-size: 1.25rem;

          text-overflow: ellipsis;
          white-space: nowrap;
          max-width: 100%;
          overflow: hidden;
        }
      }
    }

    .children {
      flex-grow: 1;

      max-height: 100%;

      overflow-x: hidden;
      overflow-y: auto;
    }

    .s-link {
      display: block;

      text-decoration: none;
      text-transform: uppercase;

      color: inherit;

      padding: .625rem 0;
    }
  }
</style>
