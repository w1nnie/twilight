<template lang="pug">
.graphics-container
  .cambus()
    router-link.item(v-for="item in graphicsData" :to="'/works/graphics/'+item.id")
      img.item-img(:src="item.link")
    router-view
</template>

<script>
import graphicsData from "@/assets/graphicsData.json";

export default {
  name: "Graphics",
  data() {
    return {
      graphicsData,
      po: ["@/assets/Graphics/hina.png", "@/assets/Graphics/lize_24h@0.5x.png"]
    };
  },
  methods: {}
};
</script>

<style scoped lang="sass">
.graphics-container
  width: 100%
  height: 100%

  .cambus
    display: flex
    justify-content: start

    .item
      width: 16vw
      height: 12vw
      background-color: rgb(213,210,172)
      border: 0.5vw solid #5e5753
      box-shadow: 0 1vw 2vw rgba(0,0,0,0.3)
      margin: 1rem

      .item-img
        width: 100%
        height: 100%
        object-fit: cover
        filter: contrast(90%) opacity(95%)
</style>
