<template lang="pug">
  .md
    .images
      img(class="layer8" :src="ImageLayer8")
      img(class="layer7" :src="ImageLayer7")
      img(class="layer6" :src="ImageLayer6")
      img(class="layer5" :src="ImageLayer5")
      img(class="layer4" :src="ImageLayer4")
      img(class="layer3" :src="ImageLayer3")
      img(class="layer2" :src="ImageLayer2")
      img(class="layer1" :src="ImageLayer1")
    button(v-on:click="po")='po'
  
</template>

<script>
export default {
  name: "MikageDelta",
  data() {
    return{
      ImageLayer1: 'img/th/th_1.png',
      ImageLayer2: 'img/th/th_2.png',
      ImageLayer3: 'img/th/th_3.png',
      ImageLayer4: 'img/th/th_4.png',
      ImageLayer5: 'img/th/th_5.png',
      ImageLayer6: 'img/th/th_6.png',
      ImageLayer7: 'img/th/th_7.png',
      ImageLayer8: 'img/th/th_8.png'
    }
  },
  props: {
    message: String
  },
  computed: {
    // poyo: 
  }
};
</script>

<style scoped lang="sass">
.images
  display: flex
  justify-content: center
  align-items: center
  height: 100vh

.images img
  position: absolute
  top: 0
  left: 0
  height: 100vh
  opacity: 0.2

.surface
  max-height: 100%

.underLayer 
  position: absolute
  display: flex
  justify-content: center
  align-items: center
  box-sizing: border-box
  height: 100vh

.under
  position: absolute
  max-height: 100%
  opacity: 0.1
</style>
