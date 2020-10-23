<template lang="pug">
  .catch
    .sunlight
    .mt-container
      img.mt(:src="mt")
</template>

<script>
import mt from "@/assets/fall/fall_mt.png";

export default {
  name: "Catch",
  data() {
    return {
      size: window.innerWidth / 10,
      pct: 1.2,
      mt: mt
    };
  },
  computed: {
    styles() {
      return {
        "--dashArray": this.radius * 2 * Math.PI * this.pct,
        "--strokeWidth": this.size / 10
      };
    },
    radius() {
      return this.size / 2.3;
    }
  }
};
</script>

<style scoped lang="sass">
.catch
  position: relative
  width: 100%
  height: 100%
  color: white

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
</style>
