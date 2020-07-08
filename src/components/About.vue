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
$color-text: #fff9e8
$color-box: #1d1d1d
$color-border: #999285

.about-container
  position: absolute
  width: 100vw
  height: 100vh
  background-color: rgba(0,0,0,0.7)
  display: flex
  justify-content: center
  align-items: center
  color: $color-text

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
