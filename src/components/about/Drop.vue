<template lang="pug">
  .drop
    img(:src="fall" :style="`transform: translateY(${scrollY*0.5}px) scale(${1-scrollY/5000})`")
</template>

<script>
import fall from "@/assets/fall/fall.png";

export default {
  name: "Drop",
  data() {
    return {
      fall: fall
    };
  },
  computed: {},
  methods: {},
  props: ["scrollY"]
};
</script>

<style scoped lang="sass">
.drop
  width: 100%
  height: 100%
  display: flex
  justify-content: center
  align-items: center
  color: white

  img
    width: 70%
    height: auto
    z-index: -7
    transform-origin: center
</style>
