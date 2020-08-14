<template lang="pug">
  .about-card-container
    about-text.at
    .illust え
</template>

<script>
import AboutText from "@/components/about/AboutText.vue";

export default {
  name: "AboutCard",
  data() {
    return {};
  },
  components: { AboutText }
};
</script>

<style scoped lang="sass">

@import "@/assets/colors.sass"

.morph
  background-color: $color-bg
  color: $color-text
  box-shadow: $color-shadow
  border-radius: 30px

.about-card-container
  @extend .morph
  box-shadow: 25px 25px 25px $color-dark, -25px -25px 25px $color-light
  border: 0px solid #000
  box-sizing: border-box
  position: absolute
  width: 80%
  height: 80%
  display: flex
  justify-content: space-around
  align-items: center

  .at
    width: 50%
    height: 85%
    background-color: $color-bg
    box-shadow: inset -10px -10px 15px $color-light, inset 10px 10px 15px $color-dark
    border-radius: 40px

  .illust
    width: 35%
    height: 85%
    background-color: $color-bg
    box-shadow: inset -10px -10px 15px $color-light, inset 10px 10px 15px $color-dark
    border-radius: 40px
    display: flex
    justify-content: center
    align-items: center
    font-size: 3rem
</style>
