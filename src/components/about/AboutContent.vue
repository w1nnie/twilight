<template lang="pug">
  .about-content-wrapper(:style="height" @scroll="scroll()")
    img.bg(:src="bg" :style="`transform: translateY(${scrollY*0.8}px)`")
    img.negi(:src="negi" :style="`transform: translateY(${scrollY*0.9}px)`")
    drop.section(:scr="scrollY")
    profile.section
    skills.section
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
      scrollY: 0
    };
  },
  computed: {
    height() {
      return {
        "--height": window.innerHeight + "px"
      };
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

  .section
    width: 100%
    heigth: 100%
</style>
