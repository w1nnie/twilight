<template lang="pug">
  .about-card-container
    .selected-item-container
      .selected-item
    .card-item-container
      .card-item(v-for="(card, index) in cardList") {{card}}
    link(href="https://fonts.googleapis.com/css?family=Sawarabi+Mincho" rel="stylesheet")
</template>

<script>
import AboutText from "@/components/about/AboutText.vue";

export default {
  name: "AboutCard",
  data() {
    return {
      cardList: ["プロフィール", "スキル", "研究", "コンタクト"]
    };
  },
  components: { AboutText }
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

  .selected-item-container
    width: 100%
    height: 75%

  .card-item-container
    width: 100%
    height: 20%
    display: flex
    flex-wrap: wrap
    justify-content: center
    align-items: center
    background-color: rgba(255,255,255,0.01)

    .card-item
      width: 10%
      height: 70%
      background-color: rgba(255,255,255,0.05)
      display: flex
      justify-content: center
      align-items: center
      margin: 0 2% 0 2%
      color: #57eaff
      font-size: 1.5rem
      font-family: "Sawarabi Mincho";
      user-select: none

      &:hover
        text-shadow: 0 0 15px #18a3d6
        transition: all .3s
</style>
