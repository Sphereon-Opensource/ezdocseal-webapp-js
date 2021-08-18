<template>
  <layout-two>
    <template v-slot:left>
      <h2 class="display-2 font-weight-bold mb-4">
        {{ _title }}
      </h2>
      <p class="body-1 primary--text">
        {{ _text }}
      </p>
      <h3 class="title font-weight-bold">
        {{ _subtitle }}
      </h3>
      <p class="body-1">
        {{ _subtext }}
      </p>
    </template>
    <template v-slot:right>
      <s-card class="mx-sm-3 mx-md-6 mx-lg-12">
        <s-card-title
          icon="/sign.svg"
          class="primary--text"
        >
          {{ _card_title }}
        </s-card-title>
        <s-card-text>
          {{ _card_text }}
        </s-card-text>
        <form-sign />
      </s-card>
    </template>
  </layout-two>
</template>

<script>
  import LayoutTwo from '@/components/LayoutTwo';
  import SCard from '@/components/SCard';
  import SCardTitle from '@/components/SCardTitle';
  import SCardText from '@/components/SCardText';
  import FormSign from "../../components/FormSign";
  //import FormVerify from '@/components/FormVerify';

  export default {
    components: {FormSign, SCardText, SCardTitle, SCard, LayoutTwo},

    computed: {
      _title() {
        return process.env.sign_title;
      },

      _text() {
        return process.env.sign_text;
      },

      _subtitle() {
        return process.env.sign_sub_title;
      },

      _subtext() {
        return process.env.sign_sub_text;
      },

      _card_title() {
        return process.env.sign_card_title;
      },

      _card_text() {
        return process.env.sign_card_text;
      }
    },

    head: () => ({
      title: process.env.sign_title,
      meta: [
        {hid: 'description', name: 'description', content: process.env.sign_text}
      ]
    })
  }
</script>
