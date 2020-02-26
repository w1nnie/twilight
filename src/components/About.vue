<template lang="pug">
  .about-container
    .modal
      .character
      .text
        about-text
    router-link.collapse(:to="'/'") ×
</template>

<script>
import AboutText from "@/components/AboutText.vue";

export default {
  name: "About",
  data() {
    return {};
  },
  components: {
    AboutText
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
  background-color: rgba(0,0,0,0.6)
  display: flex
  justify-content: center
  align-items: center
  color: $color-text

  .modal
    position: absolute
    width: 70vw
    height: 70vh
    background-color: rgba($color-box,0.5)
    display: flex
    align-items: center
    justify-content: space-around
    border: 1px solid #999285

    .character
      width: 25%
      height: 85%
      background-color: #c77

    .text
      width: 60%
      height: 85%
      background-color: (0,0,0,0.1)

  .collapse
    position: absolute
    top: 15vh
    right: 15vw
    width: 4rem
    height: 4rem
    background-color: rgba(0,0,0,0.3)
    z-index: 1000
    font-size: 3rem
    text-align: center
    text-decoration: none
    color: $color-text
</style>
