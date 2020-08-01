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
$color-text: #fff9e8
$color-box: #1d1d1d
$color-border: #999285

.works-container
  position: absolute
  width: 100vw
  height: 100vh
  top: 0
  left: 0
  background-color: hsl(51,47%,81%)
  color: $color-text

  .header
    width: 100%
    height: 8vh
    top: 0
    background-color: rgba(255,255,255,0.1)
    display: flex
    align-items: center
    justify-content: center
    font-size: 4rem

  .genre-tab
    width: 100%
    height: 5vh
    display: flex
    align-items: center
    justify-content: center
    // background-color: blue

    .works-links
      width: 5rem
      height: 70%
      margin: 1.5%
      display: flex
      align-items: center
      justify-content: center
      text-decoration: none
      color: $color-text
      background-color: rgba(0,0,0,0.6)

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
