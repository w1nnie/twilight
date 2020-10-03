<template lang="pug">
  .content
    #img-container
      img.middle.far(:src='layers[0]' :style="{filter: farFilter, transform: middleZoom, opacity: farOpacity}")
      img.middle.far(:src='layers[1]' :style="{filter: farFilter, transform: middleZoom, opacity: blurOpacities[0]}")
      img.middle(:src='layers[2]' :style="{filter: middleFilter,transform: middleZoom}")
      img.middle(:src='layers[3]' :style="{filter: middleFilter,transform: middleZoom, opacity: blurOpacities[1]}")
      img.near(:src='layers[4]' :style="{filter: nearFilter,transform: nearZoom}")
      img.near(:src='layers[5]' :style="{filter: nearFilter,transform: nearZoom, opacity: blurOpacities[2]}")
    .text
      lottie.g-svg(:options="lottieGallery" :width="logoWidth" v-on:animCreated="handleAnimGallery")
      lottie.a-svg(:options="lottieAbout" :width="logoWidth" v-on:animCreated="handleAnimAbout")
    .links(@neutralize="neutral")
      router-link.about(to="/about" @mouseover.native="showProfileHover" 
       @mouseout.native="neutral" @click.native="showProfile")
      router-link.works(to="/gallery" :style="{left:`${windowSize.x * 0.53 - windowSize.y * 0.5}px`}" 
       @mouseover.native="goToGalleryHover" @mouseout.native="neutral" @click.native="goToGallery")

    transition(name="fade")
      router-view
  
</template>

<script>
import Lottie from "@/components/Lottie.vue";
import * as svgGallery from "@/assets/svgGallery.json";
import * as svgAbout from "@/assets/svgAbout.json";

import router from "@/router.js";
import p_f from "@/assets/bg/p_f.png";
import p_m from "@/assets/bg/p_m.png";
import p_n from "@/assets/bg/p_n.png";
import p_f_b from "@/assets/bg/p_f_b.png";
import p_m_b from "@/assets/bg/p_m_b.png";
import p_n_b from "@/assets/bg/p_n_b.png";

export default {
  name: "Top",
  data() {
    return {
      layers: [p_f, p_f_b, p_m, p_m_b, p_n, p_n_b],
      windowSize: {
        x: window.innerWidth,
        y: window.innerHeight
      },
      farFilter: "none",
      middleFilter: "none",
      nearFilter: "none",
      middleZoom: "translate3D(0,0,0)",
      nearZoom: "translate3D(0,0,0)",
      isClicked: false,
      farOpacity: 1,
      blurOpacities: [0, 0, 0]
    };
  },
  components: { Lottie },
  methods: {
    goToGalleryHover() {
      this.play(this.ganim);
      this.farFilter = "brightness(110%)";
      this.middleFilter = "brightness(70%)";
      this.nearFilter = "brightness(70%)";
      this.nearZoom = "translate3D(10px,0,8px)";
      this.middleZoom = "translate3D(0,0,5px)";
      this.blurOpacities = [0, 1, 1];
    },
    goToGallery() {
      this.stop(this.ganim);
      this.farOpacity = 0;
      this.middleZoom = "translate3D(110px,0,15px)";
      this.nearZoom = "translate3D(400px,0,20px)";
      this.isClicked = true;
      this.blurOpacities = [0, 0, 0];
    },
    showProfileHover() {
      this.play(this.aanim);
      this.farFilter = "brightness(70%)";
      this.middleFilter = "brightness(70%)";
      this.middleZoom = "translate3D(0,0,2px)";
      this.nearFilter = "brightness(130%)";
      this.nearZoom = "translate3D(-20px,0,5px)";
      this.blurOpacities = [1, 1, 0];
    },
    showProfile() {
      this.stop(this.aanim);
    },
    neutral() {
      if (!this.isClicked) {
        this.stop(this.aanim);
        this.stop(this.ganim);
        this.farFilter = "none";
        this.farOpacity = 1;
        this.middleFilter = "none";
        this.nearFilter = "none";
        this.middleZoom = "translate3D(0,0,0)";
        this.nearZoom = "translate3D(0,0,0)";
        this.blurOpacities = [0, 0, 0];
      } else {
        this.isClicked = false;
        setTimeout(() => {
          this.neutral();
        }, 1500);
      }
    },
    onResize() {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight };
    },
    handleAnimGallery(anim) {
      this.ganim = anim;
      this.ganim.setSpeed(2);
    },
    handleAnimAbout(anim) {
      this.aanim = anim;
      this.aanim.setSpeed(2);
    },
    stop(anim) {
      anim.stop();
    },
    play(anim) {
      anim.play();
    }
  },
  mounted() {
    window.addEventListener("resize", this.onResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
  computed: {
    calcWorksLeft() {
      let left = this.windowSize.x * 0.62 - this.windowSize.y * 0.5;
      return left + "px";
    },
    lottieGallery() {
      return {
        animationData: svgGallery,
        loop: false,
        autoplay: false
      };
    },
    lottieAbout() {
      return {
        animationData: svgAbout,
        loop: false,
        autoplay: false
      };
    },
    logoWidth() {
      return this.windowSize.x / 3;
    }
  }
};
</script>

<style scoped lang="sass">

@import "@/assets/colors.sass"

.content
  width: 100%
  height: 100%
  position: absolute
  top: 0
  left: 0
  display: flex
  flex-wrap: wrap
  justify-content: center
  align-items: center
  background-color: $color-bg
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
    transition: all .5s
    transition-timing-function: ease

  .near
    transform: translate3d(0,0,0)
    transition: all .5s
    transition-timing-function: ease


.links
  position: absolute
  width: inherit
  height: inherit
  opacity: 1

.button
  position: inherit
  background-color: rgba(255,255,255,0)

.about
  @extend .button
  top: 20%
  left: 60%
  width: 35vh
  height: 80%

.works
  @extend .button
  top: 0%
  width: 60vh
  height: 70%

.text
  font-size: 4rem
  font-family: fantasy
  color: white
  z-index: 100
  pointer-events: none

  .g-svg
    position: absolute
    pointer-events: none
    right: 4%
    top: 0%

  .a-svg
    position: absolute
    pointer-events: none
    left: 20%
    top: 0%

.fade-enter-active, .fade-leave-active
  transition: all 0.9s ease
  transition-delay: 0.5s

.fade-enter, .fade-leave-to
  opacity: 0
  transition-delay: 0s
</style>
