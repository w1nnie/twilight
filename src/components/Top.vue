<template lang="pug">
  .content
    img(:src="bgIllust")
    .links
      router-link.about(:to="'/about'") about
      router-link.works(:to="'/works'") works
    router-view
  
</template>

<script>
import router from "@/router.js";

export default {
  name: "Top",
  data() {
    return {
      bgIllust: ["img/top.png"]
    };
  },
  components: {}
};
</script>

<style scoped lang="sass">
.content
  width: 100vw
  height: 100vh
  display: flex
  flex-wrap: wrap
  justify-content: center
  align-items: center
  background-color: #bbb
  overflow: hidden


.content img
  object-fit: contain
  width: 100%
  filter: blur


.links
  position: absolute
  width: 100vw
  height: 100vh
  background-color: #000
  opacity: 0.3

.button
  position: absolute
  width: 20vw
  height: 15vh
  color: #000
  display: flex
  justify-content: center
  align-items: center
  font-size: 3rem


.about
  @extend .button
  top: 25%
  left: 40%
  background-color: #0ff

.works
  @extend .button
  top: 40%
  left: 10%
  background-color: #ff0
</style>
