<template lang="pug">
  .content
    .img-container
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
      router-link.about.rl(to="/about" @mouseover.native="showProfileHover" 
       @mouseout.native="neutral" @click.native="showProfile")
       .hover-sign(:style="{opacity: hoverSignOpacity}")
      router-link.works.rl(to="/gallery" :style="{left:`${Math.max(windowSize.x * 0.54 - windowSize.y * 0.5, 0)}px`}" 
       @mouseover.native="goToGalleryHover" @mouseout.native="neutral" @click.native="goToGallery")
       .hover-sign(:style="{opacity: hoverSignOpacity}")

    .shutter(:style="`pointer-events: ${shutter}`")

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
      blurOpacities: [0, 0, 0],
      shutter: "auto",
      hoverSignOpacity: 1
    };
  },
  components: { Lottie },
  methods: {
    goToGalleryHover() {
      this.play(this.ganim);
      this.farFilter = "brightness(110%)";
      this.middleFilter = "brightness(70%)";
      this.nearFilter = "brightness(70%)";
      this.nearZoom = "translate3D(10px,60px,8px)";
      this.middleZoom = "translate3D(0,60px,5px)";
      this.blurOpacities = [0, 1, 1];
      this.hoverSignOpacity = 0;
    },
    goToGallery() {
      this.stop(this.ganim);
      this.farOpacity = 0;
      this.middleZoom = "translate3D(110px,0,15px)";
      this.nearZoom = "translate3D(400px,0,20px)";
      this.isClicked = true;
      this.blurOpacities = [0, 0, 0];
      this.hoverSignOpacity = 0;
    },
    showProfileHover() {
      this.play(this.aanim);
      this.farFilter = "brightness(70%)";
      this.middleFilter = "brightness(70%)";
      this.middleZoom = "translate3D(0,0,2px)";
      this.nearFilter = "brightness(130%)";
      this.nearZoom = "translate3D(-20px,0,5px)";
      this.blurOpacities = [1, 1, 0];
      this.hoverSignOpacity = 0;
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
        this.hoverSignOpacity = 1;
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
      this.ganim.setSpeed(1.7);
    },
    handleAnimAbout(anim) {
      this.aanim = anim;
      this.aanim.setSpeed(1.7);
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
    setTimeout(() => {
      this.shutter = "none";
    }, 7000);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
  computed: {
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
@import "@/assets/media.sass"

$hover-sign-size: 50px

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
  background-color: #000
  overflow: hidden

  .img-container
    position: absolute
    width: 100%
    height: 100%
    perspective: 20px
    perspective-origin: 60% 50%
    user-select: none
    animation: fadein 2s
    will-change: filter, transform, opacity

    @media only screen and (max-width: $md)
      height: 70%

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

  .shutter
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%

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

  .links
    position: absolute
    width: inherit
    height: inherit
    opacity: 1

    .button
      position: inherit

    .about
      @extend .button
      top: 20%
      left: 58%
      width: 35vh
      height: 80%

      @media only screen and (max-width: $md)
        top: auto
        width: 40%
        bottom: 15%
        height: 55%


    .works
      @extend .button
      top: 0%
      width: 50vh
      height: 70%

      @media only screen and (max-width: $md)
        top: 15%
        width: 50%
        height: 50%

    .rl
      display: flex
      justify-content: center
      align-items: center

      .hover-sign
        position: relative
        width: $hover-sign-size
        height: $hover-sign-size
        opacity: 0%
        border: 3px solid #ccc
        border-radius: 50%
        box-sizing: border-box
        transition: opacity .3s
        will-change: opacity
        pointer-events: none
        user-select: none

        &:after
          content: ""
          position: absolute
          top: -3px
          left: -3px
          width: $hover-sign-size
          height: $hover-sign-size
          opacity: 100%
          border: 3px solid #ccc
          border-radius: 50%
          box-sizing: border-box
          animation: pikon 2s infinite
          will-change: transform, opacity


.fade-enter-active, .fade-leave-active
  transition: all 0.9s ease
  transition-delay: 0.5s

.fade-enter, .fade-leave-to
  opacity: 0
  transition-delay: 0s

@keyframes fadein
  0%
  opacity: 0
  100%
  opacity: 1

@keyframes pikon
  0%
    transform: scale(1)
    opacity: 1
  100%
    transform: scale(2)
    opacity: 0
</style>
