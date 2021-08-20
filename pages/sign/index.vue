<template>
  <h-layout-two>
    <template v-slot:left>
      <h3 class="display-1 font-weight-bold mb-4">
        {{ _title }}
      </h3>
      <h3 class="primary--text">
        {{ _text }}
        <s-link :to="'https://sphereon.com/privacy-policy/'">privacy policy</s-link>
      </h3>
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
        <form-sign/>
      </s-card>
    </template>
  </h-layout-two>
</template>

<script>
import HLayoutTwo from '@/components/HLayoutTwo';
import SCard from '@/components/SCard';
import SCardTitle from '@/components/SCardTitle';
import SCardText from '@/components/SCardText';
import FormSign from "../../components/FormSign";
import SLink from "../../components/SLink";
//import FormVerify from '@/components/FormVerify';

export default {
  components: {SLink, FormSign, SCardText, SCardTitle, SCard, HLayoutTwo},

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
