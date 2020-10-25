<template lang="pug">
  .loading(v-show="loading")
    img.loading-spacer(:src="p_load")
</template>

<script>
import p_load from "@/assets/p_load.gif";

export default {
  name: "Loading",
  data() {
    return {
      loading: true,
      p_load: p_load
    };
  }
};
</script>

<style scoped lang="sass">
.loading
  height: 100%
  width: 100%
  background: #dcdcdc
  position: fixed
  top: 0
  left: 0
  animation: fadeout 5s
  display: flex
  justify-content: center
  align-items: center

  img
    height: 30vh
    image-rendering: pixelated
    animation: fadeout 5s

@keyframes fadeout
  0%
    opacity: 1
  90%
    opacity: 1
  100%
    opacity: 0
</style>
