<template lang="pug">
  .works-container
    .header Gallery
      router-link.collapse(:to="'/'") ×
    .genre-tab
      router-link.works-links(:to="'/works/graphics'" @click.native="clickGraphics" :class="[activeFlags[0] ? activeClass : '', inactiveClass]") graphics
      router-link.works-links(:to="'/works/products'" @click.native="clickProducts" :class="[activeFlags[1] ? activeClass : '', inactiveClass]") products
    .body
      transition(name="slide-fade")
        router-view
</template>

<script>
import Graphics from "@/components/works/Graphics.vue";

export default {
  name: "Works",
  data() {
    return {
      activeFlags: [true, false],
      activeClass: "active-tag",
      inactiveClass: "inactive-tag"
    };
  },
  components: {
    Graphics
  },
  methods: {
    clickGraphics() {
      this.activeFlags = [true, false];
      console.log(this.activeFlags);
    },
    clickProducts() {
      this.activeFlags = [false, true];
      console.log(this.activeFlags);
    }
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
    font-size: 3rem

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

    .active-tag
      box-shadow: inset 1px 1px 2px $color-dark, inset -1px -1px 2px $color-light

    .inactive-tag


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
    transition: all .1s

    &:active
      box-shadow: inset 1px 1px 2px $color-dark, inset -1px -1px 2px $color-light

.slide-fade-enter-active, .slide-fade-leave-active
  transition: all .4s

.slide-fade-enter, .slide-fade-leave-to
  transform: translateX(-50px)
  opacity: 0
</style>
