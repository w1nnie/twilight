<template lang="pug">
  .catch
    .sunlight
    .mt-container
      img.mt(:src="mt")
    .footer
      .text shironegi, 2020
</template>

<script>
import mt from "@/assets/fall/fall_mt.png";

export default {
  name: "Catch",
  data() {
    return {
      mt: mt
    };
  },
  computed: {}
};
</script>

<style scoped lang="sass">
.catch
  position: relative
  width: 100%
  height: 100%
  color: hsl(220, 5%, 60%)

  .sunlight
    position: absolute
    width: 100%
    height: 100%

  .mt-container
    position: absolute
    top: 30%
    height: 70%
    width: 100%

    .mt
      height: 100%
      width: 100%
      object-fit: cover
      object-position: 40% 100%

  .footer
    position: absolute
    width: 100%
    height: 5%
    bottom: 0
    display: flex
    justify-content: center
    align-items: center

    .text
      font-size: 20px
</style>
