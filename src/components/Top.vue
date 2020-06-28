<template lang="pug">
  .content
    //- img(v-for="layer in layers" :src="layer")
    #img-container
      img.middle.far(:src='layers[0]' :style="{filter: middleBlur,transform: middleZoom}")
      img.middle(:src='layers[1]' :style="{filter: middleBlur,transform: middleZoom}")
      img.near(:src='layers[2]' :style="{filter: nearBlur,transform: nearZoom}")
    .links(@neutralize="neutral")
      router-link.about(to="/about" @mouseover.native="showProfile" 
       @mouseout.native="neutral" @click.native="showProfile")
      router-link.works(to="/works/graphics" :style="{left:calcWorksLeft}" 
       @mouseover.native="goToGalleryHover" @mouseout.native="neutral" @click.native="goToGallery")
    transition(name="fade")
      router-view
  
</template>

<script>
import router from "@/router.js";
import p_f from "@/assets/bg/p_f.png";
import p_m from "@/assets/bg/p_m.png";
import p_n from "@/assets/bg/p_n.png";

export default {
  name: "Top",
  data() {
    return {
      layers: [p_f, p_m, p_n],
      ww: window.innerWidth,
      wh: window.innerHeight,
      middleBlur: "blur(0px)",
      nearBlur: "blur(0px)",
      middleZoom: "translate3D(0,0,0)",
      nearZoom: "translate3D(0,0,0)",
      isClicked: false
    };
  },
  components: {},
  methods: {
    goToGalleryHover() {
      this.nearBlur = "blur(3px)";
      this.nearZoom = "translate3D(0px,0,8px)";
      this.middleZoom = "translate3D(0,0,5px)";
    },
    goToGallery() {
      this.middleZoom = "translate3D(100px,0,25px)";
      this.nearZoom = "translate3D(0,0,25px)";
      this.isClicked = true;
    },
    showProfile() {
      this.middleBlur = "blur(5px)";
      this.middleZoom = "translate3D(0,0,2px)";
      this.nearZoom = "translate3D(0,0,5px)";
    },
    neutral() {
      if (!this.isClicked) {
        this.middleBlur = "blur(0px)";
        this.nearBlur = "blur(0px)";
        this.middleZoom = "translate3D(0,0,0)";
        this.nearZoom = "translate3D(0,0,0)";
      } else {
        this.isClicked = false;
        setTimeout(() => {
          this.neutral();
        }, 1000);
      }
    }
  },
  computed: {
    calcWorksLeft() {
      let left = this.ww * 0.62 - this.wh * 0.5;
      return left + "px";
    }
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

  #img-container
    position: absolute
    width: 100%
    height: 100%
    perspective: 20px
    perspective-origin: 60% 50%

  img
    position: absolute
    object-fit: cover
    object-position: 60% 50%
    width: 100%
    height: 100%
    top: 0
    left: 0

  .middle
    transform: translate3d(0,0,0)
    transition: all .3s

  .near
    transform: translate3d(0,0,0)
    transition: all .3s


.links
  position: absolute
  width: inherit
  height: inherit
  opacity: 1

.button
  position: inherit

.about
  @extend .button
  top: 25%
  left: 60%
  width: 35vh
  height: 75%
  background-color: rgba(255,255,255,0)
.works
  @extend .button
  top: 20%
  width: 43vh
  height: 50%
  background-color: rgba(255,255,255,0)

.fade-enter-active, .fade-leave-active
  transition: all 0.6s ease

.fade-enter, .fade-leave-to
  opacity: 0
</style>
