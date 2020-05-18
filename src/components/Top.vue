<template lang="pug">
  .content
    img(v-for="layer in layers" :src="layer")
    .links
      router-link.about(to="/about")
      router-link.works(to="/works/graphics" :style="{left:(0.64*ww-0.47*wh)+'px'}")
    transition(name="fade")
      router-view
  
</template>

<script>
import router from "@/router.js";

export default {
  name: "Top",
  data() {
    return {
      layers: [
        "img/topBackground/p_f.png",
        "img/topBackground/p_m.png",
        "img/topBackground/p_n.png"
      ],
      ww: window.parent.screen.width,
      wh: window.parent.screen.height
    };
  },
  components: {},
  methods: {
    goToGallery: function(message) {
      alert(message);
    },
    showProfile: function(message) {}
  }
};
</script>

<style scoped lang="sass">
.content
  width: 100vw
  height: 100vh
  position: absolute
  top: 0
  left: 0
  display: flex
  flex-wrap: wrap
  justify-content: center
  align-items: center
  background-color: #bbb
  overflow: hidden

  img
    position: absolute
    object-fit: cover
    object-position: 60% top
    width: 100%
    height: 100%
    top: 0
    left: 0

.links
  position: absolute
  width: inherit
  height: inherit
  background-color: #000
  opacity: 0.3

.button
  position: inherit

.about
  @extend .button
  top: 25%
  left: 60%
  width: 35vh
  height: 75%
  background-color: rgba(255,255,255,0.9)

.works
  @extend .button
  top: 20%
  width: 43vh
  height: 50%
  background-color: rgba(255,255,255,0.9)

.fade-enter-active, .fade-leave-active
  transition: all 0.6s ease

.fade-enter, .fade-leave-to
  opacity: 0
</style>
