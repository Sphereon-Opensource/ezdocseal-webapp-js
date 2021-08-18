<template>
  <div class="s-status">
    <v-card
        v-for="(verification, key) in _verified"
        :key="key"
        class="mr-2 mb-2 verified"
    >
      <div class="badge-info">
        <p>
          The Verifiable {{ getCredentialTypeDescription(verification.credentialType) }}
          &quot;{{ verification.name.replace(/\.[^/.]+$/, "") }}&quot;, was successfully
          verified.
        </p>
      </div>
    </v-card>
    <v-card
        v-for="(verification, key) in _notVerified"
        :key="key"
        class="mr-2 mb-2 not-verified"
    >
      <p>
        {{ verification.name }}
      </p>
    </v-card>
  </div>
</template>

<script>
  import {truncate} from '@/assets/js/text';
//  import {CredentialType} from "@/services/credentialFile";

  const itemWithName = (item, truncateLength) => ({
    ...item,
    name: truncate(item.name, truncateLength)
  });

  export default {
    name: 'SStatus',

    props: {
      items: {
        type: Array,
        required: true
      },

      truncateLength: {
        type: Number,
        default: 22
      }
    },
    methods: {

    },
    computed: {
      _verified() {
        return [...this.items]
        .filter(item => item.verified)
        .map(item => itemWithName(item, this.truncateLength))
      },

      _notVerified() {
        return [...this.items]
        .filter(item => !item.verified)
        .map(item => {
          if (item.message) {
            console.log("Veridication of file " + item.name + "failed: " + item.message);
          }
          return itemWithName(item, this.truncateLength)
        });
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import '~assets/scss/breakpoint.scss';

  .v-card.verified {
    display: flex;
    align-content: stretch;
    justify-content: flex-start;
    background-color: #4FE799;
  }

  .v-card.verified a {
    color: black;
    text-decoration: none;
  }

  .v-card.verified a:hover {
    text-decoration: underline;
  }

  .v-card.verified .badge-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  .v-card.verified .badge-info p {
    margin: 0 0 0 10px;
  }

  .v-card.not-verified {
    background-color: rgba(255, 255, 0, 0.2);
  }

  .v-card.not-verified p {
    padding: 10px;
  }

  .badge-image {
    max-width: 100px;
  }
</style>
