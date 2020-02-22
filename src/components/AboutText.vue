<template lang="pug">
  .about-text-container
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
      .matters Affiliation
      .description Tokyo Institute of Technology

    .bullet
      .matters Likes
      .description Drawing Illust / Pixelart 

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


.about-text-container
  .bullet
    display: flex
    font-size: 1.5rem
    justify-content: space-around
    margin-bottom: 3rem

    .matters
      border-right: 2px solid $color-text
      width: 40%

    .description
      width: 40%
</style>
