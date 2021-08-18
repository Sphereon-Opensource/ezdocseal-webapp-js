<template>
  <layout-content>
    <s-card>
      <s-card-title>
        Zo werkt het!
      </s-card-title>
      <s-card-text>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt magna quis nulla facilisis tristique sagittis sed dolor. Etiam consequat leo sed purus sagittis, accumsan elementum enim tristique. Quisque finibus congue orci quis fermentum. Aenean sagittis, metus sed porttitor blandit, velit mi luctus lorem, in porttitor lectus turpis et urna. Etiam lacinia, nulla et pharetra facilisis, ante est tristique diam, sit amet accumsan orci ante sed turpis. Curabitur ipsum est, dignissim vitae ultricies at, euismod at quam. Nulla est elit, semper ac sem quis, aliquet fringilla velit. Vestibulum sed imperdiet risus, quis hendrerit leo. Ut posuere finibus sem ac pretium. Curabitur hendrerit orci sed orci efficitur mattis. Cras ut quam volutpat, vulputate quam sit amet, interdum mauris. Donec a nunc a enim ultricies eleifend ut sit amet dui.</p>
        <p>Aenean hendrerit, arcu vitae rhoncus lobortis, purus nibh fermentum mauris, in rhoncus erat ligula sit amet massa. Nulla consectetur ac sem ut laoreet. Vivamus congue semper fringilla. Vestibulum dignissim, dolor sed tincidunt dictum, enim felis venenatis risus, aliquam lacinia sapien magna fermentum purus. Praesent euismod odio quis tempor scelerisque. Nam in interdum diam, aliquam dignissim purus. Proin sit amet dictum nisi, non dictum metus. Integer luctus ipsum justo. Curabitur vehicula nunc sit amet dolor semper, non interdum leo dictum. Donec convallis sollicitudin justo et gravida.</p>
        <p>Aenean condimentum eleifend lacus, quis varius nisl convallis viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin sollicitudin ligula ante. Praesent dictum nisl sem, vitae pretium libero maximus sit amet. Sed in sem pulvinar, tincidunt dolor eget, tristique diam. Morbi ut nibh nunc. Suspendisse potenti. Duis bibendum eu orci ut tincidunt. Pellentesque feugiat luctus mi eget posuere. Etiam maximus metus id congue sodales. In pharetra at tellus nec ullamcorper. Suspendisse vulputate risus ante, et hendrerit nulla pellentesque at.</p>
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
      title: 'Zo werkt het! - Document Sign',
      meta: [
        { hid: 'description', name: 'description', content: 'Document Sign' }
      ]
    })
  }
</script>
