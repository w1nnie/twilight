<template lang="pug">
  .about-content-wrapper(:style="acw" @scroll="scroll()")
    .stars
    .stars2
    .stars3
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
    acw() {
      return {
        "--height": window.innerHeight + "px",
        "--y": this.scrollY
      };
    },
    negiY() {
      let y;
      if (this.scrollY < window.innerHeight * 2.2) {
        y = this.scrollY * 1.6 - 300;
      } else {
        y = this.scrollY * 0.4 + window.innerHeight * 2.64 - 300;
      }
      return y;
    },
    isScrollProfile() {
      let is = this.scrollY > 800;
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

@function multiple-box-shadow ($n)
  $value: '#{random(2000)}px #{random(2000)}px #FFF'
  @for $i from 2 through $n
    $value: '#{$value} , #{random(2000)}px #{random(2000)}px #FFF'

  @return unquote($value)

$shadows-small:  multiple-box-shadow(700)
$shadows-medium: multiple-box-shadow(200)
$shadows-big:    multiple-box-shadow(100)

.about-content-wrapper
  --height: 0
  --y: 0

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
  background: radial-gradient(circle at 50% 400%, hsl(213, 83%, 60%) calc(var(--y)*0.02%), hsl(223, 40%, 5%) 100%)

  .stars
    width: 1px
    height: 1px
    background: transparent
    box-shadow: $shadows-small
    animation			: animStar 50s linear infinite

    &:after
      content: " "
      position: absolute
      top: 2000px
      width: 1px
      height: 1px
      background: transparent
      box-shadow: $shadows-small

  .stars2
    width: 2px
    height: 2px
    border-radius: 50%
    background: transparent
    box-shadow: $shadows-medium
    animation			: animStar 100s linear infinite

    &:after
      content: " "
      position: absolute
      top: 2000px
      width: 2px
      height: 2px
      background: transparent
      box-shadow: $shadows-medium

  .stars3
    width: 3px
    height: 3px
    border-radius: 50%
    background: transparent
    box-shadow: $shadows-big
    animation			: animStar 150s linear infinite

    &:after
      content: " "
      position: absolute
      top: 2000px
      width: 3px
      height: 3px
      border-radius: 50%
      background: transparent
      box-shadow: $shadows-big

  .negi
    position: absolute
    width: 50%
    height: auto
    top: 36%
    z-index: -5
    user-select: none

  .section
    width: 100%
    heigth: 100%
</style>
