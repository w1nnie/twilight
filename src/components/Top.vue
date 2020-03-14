<template lang="pug">
  .content
    img(:src="bgIllust")
    .links
      router-link.about(to="/about") about
      router-link.works(to="/works/graphics") works
    transition(name="fade")
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
  object-fit: cover
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
  text-decoration: none

.about
  @extend .button
  top: 25%
  left: 40%
  background-color: rgba(255,255,255,0.9)

.works
  @extend .button
  top: 40%
  left: 10%
  background-color: rgba(255,255,255,0.9)

.fade-enter-active, .fade-leave-active
  transition: all 0.6s ease

.fade-enter, .fade-leave-to
  opacity: 0
</style>
