<template lang="pug">
  .about-content-wrapper(:style="acw" @scroll="scroll()")
    .stars
    .stars2
    .stars3
    .negi-container
      img.negi(:src="negi" :style="{transform: negiTransform, filter: negiBrightness}")
    drop.section(:scrollY="scrollY")
    profile.section(:scrollY="scrollY")
    skills.section(:scrollY="scrollY")
    //- study.section(:scrollY="scrollY")
    catch.section
    link(href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@200&display=swap" rel="stylesheet")
</template>

<script>
import Drop from "@/components/about/Drop.vue";
import Profile from "@/components/about/Profile.vue";
import Skills from "@/components/about/Skills.vue";
import Study from "@/components/about/Study.vue";
import Catch from "@/components/about/Catch.vue";
import negi from "@/assets/fall/negi.png";

export default {
  name: "AboutContent",
  data() {
    return {
      negi: negi,
      scrollY: 0,
      scrollBreakPoint: 0
    };
  },
  computed: {
    acw() {
      return {
        "--height": window.innerHeight + "px",
        "--y": this.scrollY
      };
    },
    negiY() {
      let y;
      // with study section
      //
      // if (this.scrollY < 2.0) {
      //   y = this.scrollY * 1.6 * window.innerHeight;
      // } else {
      //   y = (this.scrollY * 0.3 + 2.6) * window.innerHeight;
      // }

      // without study section

      if (this.scrollY < 1) {
        y = this.scrollY * 2.5 * window.innerHeight;
      } else {
        y = (this.scrollY * 0.2 + 2.2) * window.innerHeight;
      }

      return y;
    },
    isScrollProfile() {
      let is = this.scrollY > 0.8;
      return is;
    },
    negiTransform() {
      return (
        // with study section
        //
        // "translateY(" +
        // this.negiY +
        // "px) scale(" +
        // (1 - this.scrollY / 6) +
        // ") rotate(" +
        // -this.scrollY * 90 +
        // "deg)"

        // without study section

        "translateY(" +
        this.negiY +
        "px) scale(" +
        (1 - this.scrollY / 4.5) +
        ") rotate(" +
        -this.scrollY * 120 +
        "deg)"
      );
    },
    negiBrightness() {
      // with study section
      //
      // let isNegiBlack = this.scrollY < 2 ? 1 : 0.1;

      // without study section

      let isNegiBlack = this.scrollY < 1.4 ? 1 : 0.5;

      return "brightness(" + 100 * isNegiBlack + "%)";
    }
  },
  methods: {
    scroll() {
      let acw = document.getElementsByClassName("about-content-wrapper")[0];
      this.scrollY = acw.scrollTop / window.innerHeight;
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
  background: radial-gradient(circle at 50% 300%, hsl(350, 53%, 88%) calc(var(--y)*20%), hsl(223, 75%, 7%) 100%)

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

  .negi-container
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    display: flex
    justify-content: center
    align-items: center

    .negi
      width: 70%
      height: auto
      z-index: 1
      user-select: none
      animation: negiPop 3s ease-out
      will-change: transform, filter

  .section
    width: 100%
    height: 100%

@keyframes negiPop
  0%
    transform: translateY(100px)
  100%
    transform: translateY(0px)
</style>
