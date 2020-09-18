<template lang="pug">
  .about-card-container
    .about-card-item(v-for="(card, index) in cardList") {{card}}
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
  justify-content: space-around
  align-items: center
  align-content: center
  flex-wrap: wrap

.about-card-item
  width: 30%
  height: 30%
  background-color: #fff
  display: flex
  justify-content: center
  align-items: center
  margin: 3vh
</style>
