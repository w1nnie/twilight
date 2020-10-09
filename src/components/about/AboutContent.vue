<template lang="pug">
  .about-content-wrapper(:style="height")
    drop.section
    profile.section
    skills.section
    study.section
    catch.section
</template>

<script>
import Drop from "@/components/about/Drop.vue";
import Profile from "@/components/about/Profile.vue";
import Skills from "@/components/about/Skills.vue";
import Study from "@/components/about/Study.vue";
import Catch from "@/components/about/Catch.vue";

export default {
  name: "AboutContent",
  computed: {
    height() {
      return {
        "--height": window.innerHeight + "px"
      };
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

  .section
    width: 100%
    heigth: 100%
</style>
