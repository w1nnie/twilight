<template lang="pug">
  .about-container
    about-svg
    about-text
</template>

<script>
import AboutText from "@/components/about/AboutText.vue";
import AboutSvg from "@/components/about/AboutSvg.vue";
import p_a from "@/assets/bg/p_n.png";

export default {
  name: "About",
  data() {
    return {
      charaImg: p_a
    };
  },
  components: {
    AboutText,
    AboutSvg
  }
};
</script>

<style scoped lang="sass">

@import "@/assets/colors.sass"

.about-container
  position: absolute
  width: 100vw
  height: 100vh
  display: flex
  justify-content: center
  align-items: center
  color: $color-text
  background-color: $color-dark

  .collapse
    position: absolute
    top: 0
    right: 0
    width: 4rem
    height: 4rem
    background-color: rgba(0,0,0,0.3)
    z-index: 1000
    font-size: 3rem
    text-align: center
    text-decoration: none
    color: $color-text
</style>
