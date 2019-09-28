<template lang="pug">
  .md
    .images
      transition-group(name="fade" tag="img" :key="img")
        img(v-if="shows[7]" :src="layer8")
        img(v-if="shows[6]" :src="layer7")
        img(v-if="shows[5]" :src="layer6")
        img(v-if="shows[4]" :src="layer5")
        img(v-if="shows[3]" :src="layer4")
        img(v-if="shows[2]" :src="layer3")
        img(v-if="shows[1]" :src="layer2")
        img(v-if="shows[0]" :src="layer1")
    button(v-on:click="transitionUnder")='+'
    button(v-on:click="transitionUp")='-'
    p {{currentLayer}}

  
</template>

<script>
import { setInterval } from 'timers';
export default {
  name: "MikageDelta",
  data() {
    return{
      layer8: 'img/th/th_8.png',
      layer7: 'img/th/th_7.png',
      layer6: 'img/th/th_6.png',
      layer5: 'img/th/th_5.png',
      layer4: 'img/th/th_4.png',
      layer3: 'img/th/th_3.png',
      layer2: 'img/th/th_2.png',
      layer1: 'img/th/th_1.png',
      currentLayer: 1,
      shows: [true,false,false,false,false,false,false,false,false]

    }
  },
  props: {
    message: String
  },
  methods: {
    transitionUnder: function() {
      if (this.currentLayer < 8){
        this.shows[this.currentLayer] = true;
        this.currentLayer ++;
      }
    },
    transitionUp: function() {
      if (this.currentLayer > 1){
        this.currentLayer --;
        this.shows[this.currentLayer] = false;
      }
    },
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

.fade-enter-active, .fade-leave-active
  transition: opacity .5s

p
  margin-left: 3%
</style>
