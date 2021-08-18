<!-- eslint-disable vue/max-attributes-per-line vue/singleline-html-element-content-newline -->
<template>
  <s-card>
    <s-card-title>
      De pagina kan niet gevonden worden.
    </s-card-title>
    <s-card-text>
      <p>
        The requested page could not be found. The page may not exists or was removed.<br>
        Click <nuxt-link to="/" title="Home">here</nuxt-link> to return to the home page.
      </p>
    </s-card-text>
  </s-card>
</template>

<script>
  import SCard from '@/components/SCard';
  import SCardTitle from '@/components/SCardTitle';
  import SCardText from '@/components/SCardText';

  export default {
    name: 'Error404',

    components: { SCardText, SCardTitle, SCard }
  };
</script>
