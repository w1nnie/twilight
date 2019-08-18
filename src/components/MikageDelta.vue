<template lang="pug">
  div
    .images
      img(v-for="image in imageNames" :src="image")     
</template>

<script>
export default {
  name: "MikageDelta",
  data() {
    return{
      imagePath: '../assets/th/',
      imageNames: [
        require('../assets/th/th_1.png'),
        require('../assets/th/th_2.png'),
        require('../assets/th/th_3.png'),
        require('../assets/th/th_4.png'),
        require('../assets/th/th_5.png'),
        require('../assets/th/th_6.png'),
        require('../assets/th/th_7.png'),
        require('../assets/th/th_8.png'),
      ],
    }
  },
  props: {
    message: String
  },
  computed: {
    imageNamesWithPath: function(){
      return this.imageNames.map((value) => {
        return `${this.imagePath}${value}`
      })
    }
  }
};
</script>

<style scoped lang="sass">
.images
  display: flex
  justify-content: center
  align-items: center
  height: 100vh
  &.underLayer
    position: absolute
    opacity: 0.1
</style>
