<template lang="pug">
  .about-content-wrapper(:style="height")
    img.bg(:src="bg" v-prlx="{speed: 0.1}")
    drop.section
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

export default {
  name: "AboutContent",
  data() {
    return {
      bg: bg
    };
  },
  computed: {
    height() {
      return {
        "--height": window.innerHeight + "px"
      };
    }
  },
  methods: {},
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

  img
    position: absolute
    top: 0
    left: 0
    width: 100%
    z-index: -10


  .section
    width: 100%
    heigth: 100%
</style>
