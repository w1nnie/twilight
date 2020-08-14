<template lang="pug">
  .about-container
    about-svg
    .shutter
    about-card.card
</template>

<script>
import AboutSvg from "@/components/about/AboutSvg.vue";
import AboutCard from "@/components/about/AboutCard.vue";
import p_a from "@/assets/bg/p_n.png";

export default {
  name: "About",
  data() {
    return {
      charaImg: p_a
    };
  },
  components: {
    AboutSvg,
    AboutCard
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

  .shutter
    position: absolute
    width: 100vw
    height: 100vh
    top: -100vh
    background-color: $color-bg
    animation: shutterAnim 1.5s forwards
    animation-timing-function: ease-in-out
    pointer-events: none

  .card
    animation: cardAnim 2.5s forwards
    opacity: 0

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

@keyframes shutterAnim
  70%
    top: -100vh
  100%
    top: 0

@keyframes cardAnim
  75%
    opacity: 0
  100%
    opacity: 1
</style>
