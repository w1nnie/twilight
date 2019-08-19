<template lang="pug">
  .images
    img(class="surface" :src="surfaceImageName")
    .underLayer
      img(v-for="image in underImageNames" :src="image" class="under")     
</template>

<script>
export default {
  name: "MikageDelta",
  data() {
    return{
      surfaceImageName: 'img/th/th_1.png',
      underImageNames: [
        'img/th/th_2.png',
        'img/th/th_3.png',
        'img/th/th_4.png',
        'img/th/th_5.png',
        'img/th/th_6.png',
        'img/th/th_7.png',
        'img/th/th_8.png'
      ],
    }
  },
  props: {
    message: String
  },
  computed: {
  }
};
</script>

<style scoped lang="sass">
.images
  display: flex
  justify-content: center
  align-items: center
  opacity: 0.3
  height: 100vh

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
