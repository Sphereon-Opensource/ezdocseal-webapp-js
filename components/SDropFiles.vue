<template>
  <div class="s-drop-files">
    <div
      :class="[ 'dropzone', { over } ]"
      @dragenter.stop.prevent="dragenter"
      @dragleave.stop.prevent="dragleave"
      @dragover.stop.prevent
      @drop.stop.prevent="drop"
    >
      <v-icon class="mr-1">
        mdi-cloud-download
      </v-icon> or drag your files here
    </div>
    <v-expand-transition v-if="preview">
      <div
        v-if="names.length"
        class="files mt-3"
      >
        <v-chip
          v-for="(name, index) in names"
          :key="index"
          close
          class="mr-1 mb-1"
          @click:close="files.splice(index, 1)"
        >
          {{ name }}
        </v-chip>
      </div>
    </v-expand-transition>
  </div>
</template>

<script>
  import isEqual from 'lodash/isEqual';

  import { truncate } from '@/assets/js/text';

  export default {
    name: 'SDropFiles',

    props: {
      value: {
        type: Array,
        default: () => ([])
      },

      truncateLength: {
        type: Number,
        default: 22
      },

      preview: {
        type: Boolean,
        default: false
      }
    },

    data() {
      return {
        files: this.value,
        over: false
      };
    },

    computed: {
      names() {
        return this.files.map(file => truncate(file.name));
      }
    },

    watch: {
      value(value) {
        this.files = value;
      },

      files(value) {
        !isEqual(value, this.value) && this.$emit('input', value);
      }
    },

    methods: {
      dragenter() {
        this.over = true;
      },

      dragleave() {
        this.over = false;
      },

      drop(e) {
        this.files = [
          ...this.files,
          ...Array.from(e.dataTransfer.files).filter(a => !this.files.some(b => b.name === a.name))
        ];

        this.over = false;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .s-drop-files {
    .dropzone {
      background-color: #f2f2f2;

      padding: 3rem 1rem;

      border-radius: .75rem;

      transition: background-color .2s ease-out;

      text-align: center;

      &.over {
        background-color: #ccc;
      }
    }
  }
</style>
