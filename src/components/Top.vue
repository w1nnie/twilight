<template lang="pug">
  .content
    img(:src="a")
    .bu
      router-link.about(:to="About")
    //-   router-link.product(:to="Product")
    //-   router-link.gallery(:to="Gallery")

    
  
</template>

<script>
import About from "@/components/About.vue";
// import Product from "./Product.vue";
// import Gallery from "./Gallery.vue";

export default {
  name: "Top",
  data() {
    return{
      a: ['img/top.png']
    }
  }
}
</script>

<style scoped lang="sass">
.content img
  height: 100vh

.bu
  position: absolute
  top: 10%
  width: 100vw
  height: 100vh
  background-color: #000
  opacity: 0.3

.button
  position: absolute
  width: 20vw
  height: 15vh
  opacity: 0.7


.about
  @extend .button
  top: 25%
  left: 40%
  background-color: #0ff

.product
  @extend .button
  top: 40%
  left: 10%
  background-color: #ff0

.gallery
  @extend .button
  top: 40%
  left: 70%
  background-color: #f0f

</style>