<template lang="pug">
  .md
    .images
      img(:style="{ opacity: opacities[7] }" :src="ImageLayer8")
      img(:style="{ opacity: opacities[6] }" :src="ImageLayer7")
      img(:style="{ opacity: opacities[5] }" :src="ImageLayer6")
      img(:style="{ opacity: opacities[4] }" :src="ImageLayer5")
      img(:style="{ opacity: opacities[3] }" :src="ImageLayer4")
      img(:style="{ opacity: opacities[2] }" :src="ImageLayer3")
      img(:style="{ opacity: opacities[1] }" :src="ImageLayer2")
      img(:style="{ opacity: opacities[0] }" :src="ImageLayer1")
    button(v-on:click="transitionUnder")='+'
    button(v-on:click="transitionUp")='-'
    p {{nowLayer}}

  
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
      ImageLayer8: 'img/th/th_8.png',
      nowLayer: 1,
      opacities: [1,1,1,1,1,1,1,1]
    }
  },
  props: {
    message: String
  },
  methods: {
    transitionUnder: function() {
      if (this.nowLayer < 8){
        this.opacities[this.nowLayer-1] = 0
        this.nowLayer ++
      }
    },
    transitionUp: function() {
      if (this.nowLayer > 1){
        this.nowLayer --
        this.opacities[this.nowLayer-1] = 1
      }
      return this.nowLayer
    }
  }
};
</script>

<style scoped lang="sass">
.md
  display: flex
  justify-content: center
  align-items: center

.images
  width: 20%

.images img
  position: absolute
  top: 0
  left: 0
  height: 100vh
  opacity: 0

p
  margin-left: 3%
</style>
