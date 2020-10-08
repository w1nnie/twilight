<template lang="pug">
  .about-card-container
    .item-container
      .item-box
        router-view
    .card-item-container
      router-link.card-item(v-for="(card, index) in cardList" :to="links[index]")
        .card-item-icon ○
        .card-item-text {{card}}
    link(href="https://fonts.googleapis.com/css?family=Sawarabi+Mincho" rel="stylesheet")
</template>

<script>
import AboutText from "@/components/about/AboutText.vue";
import Profile from "@/components/about/Profile.vue";

export default {
  name: "AboutCard",
  data() {
    return {
      cardList: ["Profile", "Skill", "Study", "Contact"],
      links: ["/about/profile", "skill", "study", "contact"]
    };
  },
  components: { AboutText, Profile }
};
</script>

<style scoped lang="sass">

@import "@/assets/colors.sass"
@import "@/assets/media.sass"


.about-card-container
  position: absolute
  width: 100%
  height: 100%
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center

  @media (min-width: $md)
    flex-direction: row-reverse


  .item-container
    width: 100%
    height: 75%
    display: flex
    flex-direction: normals
    justify-content: center
    align-items: flex-end

    @media (min-width: $md)
      width: 70%
      height: 90%
      align-items: center

    .item-box
      height: 90%
      width: 90%
      background-color: rgba(255,255,255,0.01)

  .card-item-container
    width: 100%
    height: 20%
    display: flex
    flex-wrap: wrap
    justify-content: space-around
    align-items: center
    background-color: rgba(255,255,255,0.01)

    @media (min-width: $md)
      width: 20%
      height: 90%
      flex-direction: column

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
      text-decoration: none

      @media (min-width: $md)
        width: 70%
        height: 15%

      &:hover
        text-shadow: 0 0 15px #18a3d6
        transition: all .3s

      &:nth-child(1)
        background: linear-gradient(0deg, #57eaff ,#18a3d6 5%, rgba(24,163,214,0.01) 20%)
</style>
