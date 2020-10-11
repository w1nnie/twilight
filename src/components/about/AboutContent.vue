<template lang="pug">
  .about-content-wrapper(:style="height" @scroll="scroll()")
    img.bg(:src="bg" :style="`transform: translateY(${scrollY*0.8}px)`")
    img.negi(:src="negi" :style="`transform: translateY(${negiY}px)`")
    drop.section(:scrollY="scrollY")
    profile.section(:scrollY="scrollY")
    skills.section(:scrollY="scrollY")
    study.section
    catch.section
    link(href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@200&display=swap" rel="stylesheet")
</template>

<script>
import Drop from "@/components/about/Drop.vue";
import Profile from "@/components/about/Profile.vue";
import Skills from "@/components/about/Skills.vue";
import Study from "@/components/about/Study.vue";
import Catch from "@/components/about/Catch.vue";
import bg from "@/assets/fall/bg.png";
import negi from "@/assets/fall/negi.png";

export default {
  name: "AboutContent",
  data() {
    return {
      bg: bg,
      negi: negi,
      scrollY: 0,
      scrollBreakPoint: 0
    };
  },
  // mounted: function() {
  //   // this.scrollBreakPoint = window.innerHeight;
  // },
  computed: {
    height() {
      return {
        "--height": window.innerHeight + "px"
      };
    },
    negiY() {
      let y;
      if (this.scrollY < window.innerHeight * 2.5) {
        y = this.scrollY * 1.2;
      } else {
        y = this.scrollY * 0.3 + window.innerHeight * 2.75;
      }
      return y;
    },
    isScrollProfile() {
      let is = this.scrollY > 800;
      console.log(is);
      return is;
    }
  },
  methods: {
    scroll() {
      let acw = document.getElementsByClassName("about-content-wrapper")[0];
      this.scrollY = acw.scrollTop;
    }
  },
  components: { Drop, Profile, Skills, Study, Catch }
};
</script>

<style scoped lang="sass">

@import "@/assets/colors.sass"
@import "@/assets/media.sass"


.about-content-wrapper
  --height: 0

  position: absolute
  top: 0
  left: 0
  width: 100vw
  height: var(--height)
  overflow: scroll
  // font-family: 'Noto Serif JP', serif;
  font-family: a-otf-futo-min-a101-pr6n, serif
  font-weight: 400;
  font-style: normal;

  .bg
    position: absolute
    top: 0
    left: 0
    width: 100%
    z-index: -10
    overflow: hidden

  .negi
    position: absolute
    width: 50%
    height: auto
    top: 36%
    z-index: -5

  .section
    width: 100%
    heigth: 100%
</style>
