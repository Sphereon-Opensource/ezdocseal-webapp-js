<!-- eslint-disable vue/singleline-html-element-content-newline -->
<template>
  <nav
    v-intersect="intersect"
    v-resize.quiet="resize"
    v-click-outside="closeMore"
    class="s-priority-plus"
    role="navigation"
  >
    <ul
      class="list"
      role="menubar"
    >
      <li
        v-for="(item, index) in items"
        :key="item._uid"
        ref="item"
        class="item"
      >
        <v-btn
          v-if="index === items.length - 1 && !moreItems.length"
          :to="item.to"
          color="tertiary"
          rounded
          role="menuitem"
          class="black--text"
        >
          {{ item.name }}
        </v-btn>
        <s-link
          v-else
          :to="item.to"
          role="menuitem"
        >
          <span>{{ item.name }}</span>
        </s-link>
      </li>
      <li
        v-if="moreItems.length"
        :class="[ 'item', 'more', { open } ]"
      >
        <v-btn
          rounded
          color="tertiary"
          class="black--text toggle-more"
          aria-label="Toon meer menu items"
          :aria-expanded="open.toString()"
          :aria-controls="uid"
          type="button"
          role="button"
          @click="open = !open"
        >
          Meer <v-icon small>mdi-chevron-down</v-icon>
        </v-btn>
        <v-slide-y-transition>
          <ul
            v-show="open"
            :id="uid"
            ref="more"
            :class="[ 'list', position ]"
          >
            <li
              v-for="item in moreItems"
              :key="item._uid"
              ref="item"
              class="item"
            >
              <s-link
                :to="item.to"
                role="menuitem"
              >
                <span>{{ item.name }}</span>
              </s-link>
            </li>
          </ul>
        </v-slide-y-transition>
      </li>
    </ul>
  </nav>
</template>

<script>
  import { Intersect, Resize } from 'vuetify/lib/directives';

  import { uid } from '@/assets/js/uid';

  import SLink from '@/components/SLink';

  export default {
    name: 'SPriorityPlus',

    components: { SLink },

    directives: { Intersect, Resize },

    props: {
      value: {
        type: Boolean,
        default: false
      }
    },

    data() {
      return {
        items: [],
        moreItems: [],
        accumulatedWidths: [],
        offset: 0,
        visible: false,
        open: !!this.value,
        position: 'left'
      };
    },

    computed: {
      uid() {
        return uid();
      },

      navItems() {
        return this.$store.state.settings.mainNav || [];
      }
    },

    watch: {
      $route() {
        this.open = false;
      },

      async open(value) {
        if (value) {
          await this.positionMore();
        }

        !!value !== this.value && this.$emit('input', value);
      },

      value(value) {
        this.open = !!value;
      }
    },

    methods: {
      closeMore() {
        this.open = false;
      },

      async positionMore() {
        this.position = 'left';

        await this.$nextTick();

        const bounds = this.$refs.more.getBoundingClientRect();

        // exceeding viewport bounds
        if (bounds.left + bounds.width > document.body.clientWidth) {
          this.position = 'right';
        }
      },

      accumulateWidths() {
        const items = this.$refs.item || [];

        this.accumulatedWidths = items.map(item => {
          let width = item.offsetWidth;

          const style = window.getComputedStyle(item);
          width += parseInt(style.marginLeft, 10);
          width += parseInt(style.marginRight, 10);

          return width;
        });

        // use average of highest and lowest value
        this.offset = (Math.min(...this.accumulatedWidths) + Math.max(...this.accumulatedWidths)) / 2;
      },

      async resize() {
        if (!this.visible) {
          return;
        }

        let totalWidth = 0;
        let exceeded = false;

        this.items = [];
        this.moreItems = [];

        await this.$nextTick();

        for (let [ index, width ] of this.accumulatedWidths.entries()) {
          totalWidth += width;

          if (totalWidth >= (this.$el.offsetWidth - this.offset)) {
            this.items = this.navItems.slice(0, index);
            this.moreItems = this.navItems.slice(index);

            if (this.open) {
              await this.positionMore();
            }

            exceeded = true;
            break;
          }
        }

        if (!exceeded) {
          this.items = this.navItems;
          this.open = false;
        }
      },

      async intersect(entries, observer, isIntersecting) {
        this.visible = isIntersecting;

        if (isIntersecting && !this.accumulatedWidths.length) {
          this.items = this.navItems;

          await this.$nextTick();

          this.accumulateWidths();
          this.resize();
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  $z-index: 300;
  $color: #fff;
  $color-hover: var(--v-tertiary-base);
  $dropdown-background-color: #fff;
  $dropdown-color: #333;
  $dropdown-color-hover: var(--v-tertiary-base);

  .s-priority-plus {
    display: flex;

    position: relative;
    z-index: $z-index;

    max-width: 100%;

    .list {
      list-style: none;

      margin: 0;
      padding: 0;

      display: flex;

      .list {
        flex-direction: column;

        position: absolute;
        top: 100%;
        left: 0;

        &.right {
          right: 0;
          left: auto;
        }

        background-color: $dropdown-background-color;

        box-shadow: 1px 1px 3px rgba(#000, .3);

        .s-link {
          color: $dropdown-color;

          &:hover {
            color: $dropdown-color-hover;

            span {
              border-color: $dropdown-color-hover;
            }
          }
        }
      }
    }

    > .list {
      flex-wrap: nowrap;

      > .item > .s-link {
        white-space: nowrap;

        text-shadow: 1px 1px 2px rgba(#000, .3);

        color: $color;

        &:hover {
          color: $color-hover;

          span {
            border-color: $color-hover;
          }
        }
      }
    }

    .item {
      user-select: none;

      position: relative;

      text-transform: uppercase;

      font-weight: 700;

      &.more {
        .v-icon {
          transition: transform .2s ease-out;
        }

        &.open .v-icon {
          transform: rotate(180deg);
        }
      }
    }

    .s-link {
      display: flex;

      align-items: center;

      padding: .5rem 1rem;

      text-decoration: none;

      white-space: nowrap;

      transition: color .2s ease-out;

      &.nuxt-link-active:not([href='/']),
      &.nuxt-link-exact-active {
        span {
          border-bottom: 1px solid;

          transition: border-color .2s ease-out;
        }
      }
    }

    .toggle-more {
      text-transform: uppercase;
    }

    &::v-deep .v-btn--active .v-btn__content {
      border-bottom: 1px solid;
    }
  }
</style>
