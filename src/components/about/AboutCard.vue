<template lang="pug">
  .about-card-container
    .about-card-item(v-for="(card, index) in cardList")
</template>

<script>
import AboutText from "@/components/about/AboutText.vue";

export default {
  name: "AboutCard",
  data() {
    return {
      cardList: ["po"]
    };
  },
  components: { AboutText }
};
</script>

<style scoped lang="sass">

@import "@/assets/colors.sass"

.about-card-container
  // width: 100%
  // height: 100%
  // display: flex
</style>
