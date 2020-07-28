<template lang="pug">
  .content
    #img-container
      img.middle.far(:src='layers[0]' :style="{filter: middleBlur,transform: middleZoom}")
      img.middle(:src='layers[1]' :style="{filter: middleBlur,transform: middleZoom}")
      img.near(:src='layers[2]' :style="{filter: nearBlur,transform: nearZoom}")
    .links(@neutralize="neutral")
      router-link.about(to="about" @mouseover.native="showProfile" 
       @mouseout.native="neutral" @click.native="showProfile")
      router-link.works(to="works/graphics" :style="{left:`${windowSize.x * 0.62 - windowSize.y * 0.5}px`}" 
       @mouseover.native="goToGalleryHover" @mouseout.native="neutral" @click.native="goToGallery")
    .text
      .a(:style="{opacity: o}") about me ! →
      .g(:style="{opacity: g}") ← go to gallery !
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
      middleBlur: "blur(0px)",
      nearBlur: "blur(0px)",
      middleZoom: "translate3D(0,0,0)",
      nearZoom: "translate3D(0,0,0)",
      isClicked: false,
      o: "0",
      g: "0"
    };
  },
  components: {},
  methods: {
    goToGalleryHover() {
      this.nearBlur = "blur(3px)";
      this.nearZoom = "translate3D(0px,0,8px)";
      this.middleZoom = "translate3D(0,0,5px)";
      this.g = "1";
    },
    goToGallery() {
      this.middleZoom = "translate3D(100px,0,18px)";
      this.nearZoom = "translate3D(0,0,25px)";
      this.isClicked = true;
    },
    showProfile() {
      this.middleBlur = "blur(5px)";
      this.middleZoom = "translate3D(0,0,2px)";
      this.nearZoom = "translate3D(0,0,5px)";
      this.o = "1";
    },
    neutral() {
      if (!this.isClicked) {
        this.middleBlur = "blur(0px)";
        this.nearBlur = "blur(0px)";
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
  color: white
  z-index: 100

  .a
    position: absolute
    transition: all .3s
    left: 20%
    top: 30%

  .g
    position: absolute
    transiton: all .3s
    right: 5%
    top: 30%

.fade-enter-active, .fade-leave-active
  transition: all 0.6s ease

.fade-enter, .fade-leave-to
  opacity: 0
</style>
