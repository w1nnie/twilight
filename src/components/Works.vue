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

@import "@/assets/colors.sass"

.morph
  background-color: $color-bg
  color: $color-text
  box-shadow: $color-shadow
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
      box-shadow: 5px 5px 10px $color-dark, -5px -5px 10px $color-light
      overflow: hidden


  .body
    width: 100%
    height: 87vh
    overflow: scroll


  .collapse
    @extend .morph
    position: absolute
    top: 0vh
    right: 0vw
    width: 8vh
    height: 8vh
    z-index: 1000
    font-size: 6vh
    text-align: center
    text-decoration: none
    color: $color-text
    overflow: hidden
    box-shadow: 5px 5px 10px $color-dark, -5px -5px 10px $color-light

    &:active
      background-color: $color-active
      box-shadow: 5px 5px 10px $color-light, -5px -5px 10px $color-dark
</style>
