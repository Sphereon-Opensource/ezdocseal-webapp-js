<template>
  <layout-content>
    <s-card>
      <s-card-title>
        Contact
      </s-card-title>
      <s-card-text>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt magna quis nulla facilisis tristique sagittis sed dolor. Etiam consequat leo sed purus sagittis, accumsan elementum enim tristique. Quisque finibus congue orci quis fermentum. Aenean sagittis, metus sed porttitor blandit, velit mi luctus lorem, in porttitor lectus turpis et urna. Etiam lacinia, nulla et pharetra facilisis, ante est tristique diam, sit amet accumsan orci ante sed turpis. Curabitur ipsum est, dignissim vitae ultricies at, euismod at quam. Nulla est elit, semper ac sem quis, aliquet fringilla velit. Vestibulum sed imperdiet risus, quis hendrerit leo. Ut posuere finibus sem ac pretium. Curabitur hendrerit orci sed orci efficitur mattis. Cras ut quam volutpat, vulputate quam sit amet, interdum mauris. Donec a nunc a enim ultricies eleifend ut sit amet dui.</p>
      </s-card-text>
    </s-card>
  </layout-content>
</template>

<script>
  import LayoutContent from '@/components/LayoutContent';
  import SCard from '@/components/SCard';
  import SCardTitle from '@/components/SCardTitle';
  import SCardText from '@/components/SCardText';

  export default {
    components: { SCardText, SCardTitle, SCard, LayoutContent },

    head: () => ({
      title: 'Contact - Document Sign',
      meta: [
        { hid: 'description', name: 'description', content: 'Document Sign' }
      ]
    })
  }
</script>
