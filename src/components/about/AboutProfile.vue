<template lang="pug">
  .ap-container
    svg(:width="size" :height="size")
      circle(:cx="size/2" :cy="size/2" :r="radius" :style="styles")
</template>

<script>
export default {
  name: "AboutProfile",
  data() {
    return {
      size: window.innerWidth / 10,
      pct: 0.75
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
.ap-container
  width: 100%
  height: 100%
  display: flex
  justify-content: center
  align-items: center

  svg
    transform: rotate(-90deg)

    circle
      --dashArray: 0
      --strokeWidth: 0

      fill: transparent
      stroke: #ffffff
      stroke-width: var(--strokeWidth)
      stroke-linecap: round
      animation: circle 2s ease infinite

@keyframes circle
  0%
    stroke-dasharray: 0 10000
  50%
    stroke-dasharray: var(--dashArray) 10000
  100%
    stroke-dasharray: 0 10000
</style>
