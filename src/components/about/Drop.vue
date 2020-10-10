<template lang="pug">
  .drop
    img(:src="fall" :style="`transform: translateY(${scr*0.3}px)`")
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
  props: ["scr"]
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
</style>
