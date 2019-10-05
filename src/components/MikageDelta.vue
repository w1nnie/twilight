<template lang="pug">
  .md
    .images
      transition-group(name="fade" tag="div")
        img(v-for="(layer,index) in layers" v-if="show[index]" :src="layer" :key="layer")
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
      layers: ['img/th/th_1.png','img/th/th_2.png','img/th/th_3.png','img/th/th_4.png','img/th/th_5.png','img/th/th_6.png','img/th/th_7.png','img/th/th_8.png'],
      currentLayer: 1,
      show: [true,false,false,false,false,false,false,false,false]
    }
  },
  props: {
    message: String
  },
  methods: {
    transitionUnder: function() {
      if (this.currentLayer < 8){
        this.show[this.currentLayer] = true;
        this.currentLayer ++;
      }
    },
    transitionUp: function() {
      if (this.currentLayer > 1){
        this.currentLayer --;
        this.show[this.currentLayer] = false;
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
