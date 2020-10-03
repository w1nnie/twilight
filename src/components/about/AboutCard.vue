<template lang="pug">
  .about-card-container
    .item-container
      .item-box
        about-profile
    .card-item-container
      .card-item(v-for="(card, index) in cardList")
        .card-item-icon ○
        .card-item-text {{card}}
    link(href="https://fonts.googleapis.com/css?family=Sawarabi+Mincho" rel="stylesheet")
</template>

<script>
import AboutText from "@/components/about/AboutText.vue";
import AboutProfile from "@/components/about/AboutProfile.vue";

export default {
  name: "AboutCard",
  data() {
    return {
      cardList: ["Profile", "Skill", "Study", "Contact"]
    };
  },
  components: { AboutText, AboutProfile }
};
</script>

<style scoped lang="sass">

@import "@/assets/colors.sass"

.about-card-container
  position: absolute
  width: 100%
  height: 100%
  display: flex
  flex-direction: column

  .item-container
    width: 100%
    height: 75%
    display: flex
    flex-direction: normals
    justify-content: center
    align-items: flex-end

    .item-box
      height: 90%
      width: 90%
      background-color: rgba(255,255,255,0.01)

  .card-item-container
    width: 100%
    height: 20%
    display: flex
    flex-wrap: wrap
    justify-content: center
    align-items: center
    background-color: rgba(255,255,255,0.01)

    .card-item
      width: 20%
      height: 70%
      background-color: rgba(255,255,255,0.01)
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      margin: 0 2% 0 2%
      color: #57eaff
      font-size: 2.5vw
      font-family: "Sawarabi Mincho";
      user-select: none

      &:hover
        text-shadow: 0 0 15px #18a3d6
        transition: all .3s

      &:nth-child(1)
        background: linear-gradient(0deg, #57eaff ,#18a3d6 5%, rgba(24,163,214,0.01) 20%)
        mix-blend-mode: multiply
</style>
