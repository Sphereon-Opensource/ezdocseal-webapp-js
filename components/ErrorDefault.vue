<!-- eslint-disable vue/max-attributes-per-line vue/singleline-html-element-content-newline -->
<template>
  <s-card>
    <s-card-title>
      Er is een fout opgetreden.
    </s-card-title>
    <s-card-text>
      <p>Klik <nuxt-link to="/" title="Home">hier</nuxt-link> om terug te keren naar de homepagina.</p>
    </s-card-text>
  </s-card>
</template>

<script>
	import SCard from '@/components/SCard';
  import SCardTitle from '@/components/SCardTitle';
  import SCardText from '@/components/SCardText';

  export default {
    name: 'ErrorDefault',

    components: { SCardText, SCardTitle, SCard }
  }
</script>
