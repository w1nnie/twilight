<template lang="pug">
  .works-container
    img.bg(:src='bgImg')
    .modal
      .header works
      .body
        .drawer
          router-link.item(to="/works/graphics") Graphics
          router-link.item(to="/works/games") Games
          router-link.item(to="/works/music") Music
        .content
          router-view
    router-link.collapse(:to="'/'") ×
</template>

<script>
import Graphics from "@/components/works/Graphics.vue";

export default {
  name: "Works",
  data() {
    return {
      bgImg: "img/topBackground/p_g.png"
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
  background-color: rgba(0,0,0,0.6)
  display: flex
  justify-content: center
  align-items: center
  color: $color-text

  .bg
    width: 100%
    height: 100%

  .modal
    position: absolute
    width: 95vw
    height: 95vh
    background-color: rgba($color-box,0.5)
    border: 1px solid #999285

    .header
      width: 100%
      height: 10%
      background-color: rgba(255,255,255,0.1)
      display: flex
      align-items: center
      justify-content: center
      font-size: 4rem

    .body
      height: 90%
      display: flex
      align-items: center
      justify-coonten: space-around

    .drawer
      display: flex
      flex-direction: column
      align-items: start
      width: 15%
      height: 100%
      //background-color: #88d

      .item
        width: 100%
        height: 8%
        font-size: 2.2rem
        background-color: rgba(100,100,100,0.6)
        color: $color-text
        text-decoration: none
        display: flex
        align-items: center
        justify-content: center
        margin: 1rem 0 1rem 0

    .content
      width: 85%
      height: 100%

  .collapse
    position: absolute
    top: 2.5vh
    right: 2.5vw
    width: 4rem
    height: 4rem
    background-color: rgba(0,0,0,0.3)
    z-index: 1000
    font-size: 3rem
    text-align: center
    text-decoration: none
    color: $color-text
</style>
