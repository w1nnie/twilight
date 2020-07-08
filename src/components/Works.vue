<template lang="pug">
  .works-container(:style="{backgroundImage:'url(' + bgImg + ')'}")
    .header works
    .genre-tab
      router-link.works-links(:to="'/works/graphics'") graphics
      router-link.works-links(:to="'/works/tools'") tools
      router-link.works-links(:to="'/works/games'") games
    .body
      router-view
    router-link.collapse(:to="'/'") ×
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
  height: auto
  top: 0
  left: 0
  background-color: rgba(0,0,0,0.6)
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column
  color: $color-text


  .header
    width: 100%
    height: 10%
    top: 0
    background-color: rgba(255,255,255,0.1)
    display: flex
    align-items: center
    justify-content: center
    font-size: 4rem

  .genre-tab
    width: 100%
    height: 10%
    top: 10%
    position: fixed
    display: flex
    align-items: center
    justify-content: center
    // background-color: blue

    .works-links
      margin: 5%

  .body
    width: 100%
    height: 80%
    top: 20%
    position: fixed
    overflow: scroll
    // background-color: black


  .collapse
    position: absolute
    top: 0vh
    right: 0vw
    width: 4rem
    height: 4rem
    background-color: rgba(0,0,0,0.3)
    z-index: 1000
    font-size: 3rem
    text-align: center
    text-decoration: none
    color: $color-text
</style>
