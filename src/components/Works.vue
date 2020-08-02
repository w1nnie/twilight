<template lang="pug">
  .works-container
    .header works
      router-link.collapse(:to="'/'") ×
    .genre-tab
      router-link.works-links(:to="'/works/graphics'") graphics
      router-link.works-links(:to="'/works/tools'") tools
      //- router-link.works-links(:to="'/works/games'") games
    .body
      router-view
</template>

<script>
import Graphics from "@/components/works/Graphics.vue";
import p_g from "@/assets/bg/p_g.png";

export default {
  name: "Works",
  data() {
    return {
      bgImg: p_g,
      bg: "url(" + this.bgImg + ")"
    };
  },
  components: {
    Graphics
  }
};
</script>

<style scoped lang="sass">
$color-text: #011f40
$color-border: #999285
$color-bg: #bce1d5

.morph
  background-color: $color-bg
  color: $color-text
  box-shadow: 10px 10px 50px #a0bfb5, -10px -10px 50px #d8fff5
  border-radius: 10px

.works-container
  position: absolute
  width: 100vw
  height: 100vh
  top: 0
  left: 0
  background-color: $color-bg
  color: $color-text

  .header
    @extend .morph
    width: 100%
    height: 8vh
    top: 0
    display: flex
    align-items: center
    justify-content: center
    font-size: 4rem

  .genre-tab
    @extend .morph
    width: 100%
    height: 5vh
    display: flex
    align-items: center
    justify-content: center
    box-shadow: none

    .works-links
      @extend .morph
      width: 5rem
      height: 70%
      margin: 1.5%
      display: flex
      align-items: center
      justify-content: center
      text-decoration: none
      box-shadow: 5px 5px 10px #a0bfb5, -5px -5px 10px #d8fff5
      overflow: hidden


  .body
    width: 100%
    height: 87vh
    overflow: scroll
    // background-color: black


  .collapse
    position: absolute
    top: 0vh
    right: 0vw
    width: 8vh
    height: 8vh
    background-color: rgba(0,0,0,0.3)
    z-index: 1000
    font-size: 3rem
    text-align: center
    text-decoration: none
    color: $color-text
</style>
