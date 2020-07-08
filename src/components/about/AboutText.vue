<template lang="pug">
  .about-text-container
    .textbox
      .bullet
        .matters Handle Name
        .description うぃにおん

      .bullet
        .matters Creator Name
        .description 白葱

      .bullet
        .matters Name
        .description Yuma Watanabe

      .bullet
        .matters Date of Birth
        .description 1997/05/30

      .bullet
        .matters Education
        .description Tokyo Institute of Technology

      .bullet
        .matters Likes
        .description Illust / Pixelart 

</template>

<script>
export default {
  name: "AboutText",
  data() {
    return {};
  },
  components: {}
};
</script>

<style scoped lang="sass">
$color-border: #999285
$color-text: #fff9e8
// $color-text: hsl(30,30%,40%)


.about-text-container
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: 100%
  pointer-events: none

  .textbox
    position: absolute
    top: 5%
    left: 10%
    width: 50%
    height: 90%
    background: rgba(255,255,255,0.1)

    .bullet
      display: flex
      font-size: 1.5rem
      justify-content: space-around
      margin: 1.5rem 0 1.5rem 0
      color: $color-text

      .matters
        border-right: 2px solid $color-text
        width: 40%

      .description
        width: 40%
</style>
