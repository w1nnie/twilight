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

@import "@/assets/colors.sass"


.about-text-container
  .textbox
    height: 100%
    display: flex
    flex-direction: column
    justify-content: center

    .bullet
      display: flex
      font-size: 1.2rem
      justify-content: space-around
      margin: 1rem 0 1rem 0
      color: $color-text

      .matters
        border-right: 2px solid $color-text
        width: 40%

      .description
        width: 40%
</style>
