<template lang="pug">
  .drop
    img(:src="fall" :style="`transform: translateY(${scrollY*0.3}px) scale(${1-scrollY/5000}) rotate(${scrollY/25}deg)`")
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
    z-index: 0
    transform-origin: center
    user-select: none
    animation: pop 3s ease-out

@keyframes pop
  0%
    transform: translateY(200px)
  100%
    transform: translateY(0px)
</style>
