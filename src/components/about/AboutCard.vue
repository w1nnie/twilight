<template lang="pug">
  .about-card-container
    .selected-item-container
      .selected-item
    .card-item-container
      .card-item(v-for="(card, index) in cardList") {{card}}
</template>

<script>
import AboutText from "@/components/about/AboutText.vue";

export default {
  name: "AboutCard",
  data() {
    return {
      cardList: ["po", "mi", "a", "pro", "pi", "en"]
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
    background-color: rgba(255,255,255,0.1)

    .card-item
      width: 10%
      height: 40%
      background-color: #fff
      display: flex
      justify-content: center
      align-items: center
      margin: 1%
</style>
