<template>
  <header
    v-scroll="scroll"
    v-resize.quiet="resize"
    :class="[ 's-header', layout, { sticky } ]"
  >
    <v-container
      fluid
      :class="{ 'py-1': sticky }"
    >
      <v-row>
        <v-col
          cols="9"
          sm="6"
          class="d-flex align-center white logo-padding"
        >
          <a
            href="https://www.sphereon.com"
            target="_blank"
            title="Sphereon.com"
            class="logo"
          >
            <s-logo
              :src="logo1"
              :width="280"
              :height="50"
              alt="Sphereon.com"
            />
          </a>
          <nuxt-link
            to="/"
            title="Home"
            class="logo"
          >
            <s-logo
              :src="logo2"
              :width="330"
              :height="68"
              alt="Document Sign"
            />
          </nuxt-link>
        </v-col>
        <v-col
          cols="3"
          sm="6"
          class="d-flex align-center justify-end py-0"
        >
          <div class="hidden-sm-and-up">
            <s-mobile-menu v-model="mobileMenuOpen">
              <template v-slot:open="{ open, attrs }">
                <v-btn
                  fab
                  depressed
                  small
                  color="tertiary"
                  class="black--text"
                  v-bind="attrs"
                  @click="open"
                >
                  <v-icon>mdi-menu</v-icon>
                </v-btn>
              </template>
            </s-mobile-menu>
          </div>
          <div class="hidden-xs-only flex-grow-1">
            <s-priority-plus
              v-model="priorityPlusOpen"
              class="justify-end"
            />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </header>
</template>

<script>
  import SMobileMenu from '@/components/SMobileMenu';
  import SPriorityPlus from '@/components/SPriorityPlus';
  import SLogo from '@/components/SLogo';

  export default {
    name: 'SHeader',

    components: { SLogo, SMobileMenu, SPriorityPlus },

    data: () => ({
      sticky: false,
      height: Infinity, // War
      mobileMenuOpen: false,
      priorityPlusOpen: false
    }),

    computed: {
      layout() {
        return `layout-${this.$store.state.page.layout}`;
      },

      logo1() {
        return '/sphereon-zwart.svg';
      },

      logo2() {
        return '/logo-light.svg';
      }
    },

    watch: {
      mobileMenuOpen(value) {
        this.$store.commit('page/setNoScroll', value);
      }
    },

    mounted() {
      this.calcHeight();

      this.scroll();
    },

    methods: {
      scroll() {
        //this.sticky = window.scrollY > this.height / 2;

        this.$store.commit('header/setSticky', this.sticky);
      },

      resize() {
        this.calcHeight();
      },

      calcHeight() {
        this.priorityPlusOpen = false;
        this.height = this.$el.offsetHeight;

        this.$store.commit('header/setHeight', this.height);
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~assets/scss/breakpoint.scss';

  $transition: .2s ease-out;
  $color: #333;
  $color-hover: var(--v-tertiary-base);

  .s-header {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 200;
    backround: white;

    transition: $transition;
    transition-property: background-color, box-shadow;

    .container {
      transition: all #{$transition};
    }

    .logo-padding {
      padding: 10px;
    }

    .logo {
      display: block;

      width: 100%;

      max-width: 200px;

      @include breakpoint(sm-and-up) {
        max-width: 330px;
      }

      transition: all #{$transition};
    }

    &.sticky,
    &.layout-one {
      .s-priority-plus::v-deep {
        > .list > .item > .s-link {
          color: $color;

          text-shadow: none;

          span {
            border-color: $color;
          }

          &:hover {
            color: $color-hover;

            span {
              border-color: $color-hover;
            }
          }
        }
      }
    }

    &.sticky {
      background-color: #fff;

      box-shadow: 0 0 5px rgba(#000, .3);

      @include breakpoint(sm-and-up) {
        .logo {
          max-width: 50%;
        }
      }
    }

    .s-mobile-menu .v-btn {
      transition: all #{$transition};
    }
  }
</style>
