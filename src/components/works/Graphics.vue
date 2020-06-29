<template lang="pug">
.graphics-container
  .cambus()
    router-link.item(v-for="item in graphicsData" :to="'/works/graphics/'+item.id")
      img.item-img(:src="item.link")
      .light-effect
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
      background-color: #aaa
      border: 0.5vw solid #5e5753
      box-shadow: 0 1vw 2vw rgba(0,0,0,0.3)
      margin: 1rem

      .item-img
        width: 100%
        height: 100%
        object-fit: cover

    .light-effect
        position: absolute
        left: 0
        top: 0
        width: 100%
        height: inherit
        background-color: rgba(217,213,177,0.1)
        z-index: 4
</style>
