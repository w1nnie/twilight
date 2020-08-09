<template lang="pug">
  .content
    #img-container
      img.middle.far(:src='layers[0]' :style="{filter: farFilter,transform: middleZoom, opacity: farOpacity}")
      img.middle(:src='layers[1]' :style="{filter: middleFilter,transform: middleZoom}")
      img.near(:src='layers[2]' :style="{filter: nearFilter,transform: nearZoom}")
    .text
      lottie.g-svg(:options="lottieGallery" :width="500" v-on:animCreated="handleAnimGallery")
      lottie.a-svg(:options="lottieAbout" :width="500" v-on:animCreated="handleAnimAbout")
      .a(:style="{opacity: o}")
      .g(:style="{opacity: g}")
    .links(@neutralize="neutral")
      router-link.about(to="about" @mouseover.native="showProfileHover" 
       @mouseout.native="neutral" @click.native="showProfile")
      router-link.works(to="works/graphics" :style="{left:`${windowSize.x * 0.62 - windowSize.y * 0.5}px`}" 
       @mouseover.native="goToGalleryHover" @mouseout.native="neutral" @click.native="goToGallery")

    transition(name="fade")
      router-view
  
</template>

<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=UA-171648104-1"
></script>
<script>
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());

gtag("config", "UA-171648104-1");
</script>

<script>
import Lottie from "@/components/Lottie.vue";
import * as svgGallery from "@/assets/svgGallery.json";
import * as svgAbout from "@/assets/svgAbout.json";

import router from "@/router.js";
import p_f from "@/assets/bg/p_f.png";
import p_m from "@/assets/bg/p_m.png";
import p_n from "@/assets/bg/p_n.png";

export default {
  name: "Top",
  data() {
    return {
      layers: [p_f, p_m, p_n],
      windowSize: {
        x: window.innerWidth,
        y: window.innerHeight
      },
      farFilter: "blur(0px)",
      middleFilter: "blur(0px)",
      nearFilter: "blur(0px)",
      middleZoom: "translate3D(0,0,0)",
      nearZoom: "translate3D(0,0,0)",
      isClicked: false,
      farOpacity: 1,
      o: "0",
      g: "0"
    };
  },
  components: { Lottie },
  methods: {
    goToGalleryHover() {
      this.play(this.ganim);
      this.farFilter = "brightness(110%)";
      this.middleFilter = "brightness(70%)";
      this.nearFilter = "blur(3px) brightness(70%)";
      this.nearZoom = "translate3D(0px,0,8px)";
      this.middleZoom = "translate3D(0,0,5px)";
      this.g = "1";
    },
    goToGallery() {
      this.stop(this.ganim);
      this.farOpacity = 0;
      this.middleZoom = "translate3D(100px,0,18px)";
      this.nearZoom = "translate3D(0,0,25px)";
      this.isClicked = true;
      this.g = "0";
    },
    showProfileHover() {
      this.play(this.aanim);
      this.farFilter = "blur(5px) brightness(70%)";
      this.middleFilter = "blur(5px) brightness(70%)";
      this.middleZoom = "translate3D(0,0,2px)";
      this.nearFilter = "brightness(130%)";
      this.nearZoom = "translate3D(0,0,5px)";
      this.o = "1";
    },
    showProfile() {
      this.stop(this.aanim);
      this.o = "0";
    },
    neutral() {
      if (!this.isClicked) {
        this.stop(this.aanim);
        this.stop(this.ganim);
        this.farFilter = "blur(0px)";
        this.farOpacity = 1;
        this.middleFilter = "blur(0px)";
        this.nearFilter = "blur(0px)";
        this.middleZoom = "translate3D(0,0,0)";
        this.nearZoom = "translate3D(0,0,0)";
        this.o = "0";
        this.g = "0";
      } else {
        this.isClicked = false;
        setTimeout(() => {
          this.neutral();
        }, 1000);
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
    }
  }
};
</script>

<style scoped lang="sass">

@import "@/assets/colors.sass"

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
  background-color: rgba(255,255,255,0)

.about
  @extend .button
  top: 25%
  left: 60%
  width: 35vh
  height: 75%

.works
  @extend .button
  top: 0%
  width: 43vh
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
  transition: all 0.6s ease

.fade-enter, .fade-leave-to
  opacity: 0
</style>
