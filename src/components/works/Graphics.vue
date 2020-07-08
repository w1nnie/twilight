<template lang="pug">
.graphics-container
  .graphics-tags
  .graphics-item-container
    router-link.item(v-for="item in graphicsData" :to="'/works/graphics/'+item.id")
      img.item-img(:style="{objectPosition: item.position}" :src="'/twilight/img/thumbnail/'+item.filename+'.jpg'")
    transition(name="fade")
      router-view
</template>

<script>
import graphicsData from "@/assets/graphicsData.json";

export default {
  name: "Graphics",
  data() {
    return {
      graphicsData,
      tags: ["ドット絵", "イラスト", "オリジナル", "二次創作"]
    };
  },
  methods: {}
};
</script>

<style scoped lang="sass">
.graphics-container
  width: 100%
  height: 100%

  .graphics-tags
    width: 100%
    height: 5%
    background-color: blue

  .graphics-item-container
    width: 100%
    display: flex
    justify-content: space-around
    flex-wrap: wrap
    overflow: scroll

    .item
      width: 35vh
      height: 35vh
      background-color: rgb(213,210,172)
      border: 0.35vw solid #5e5753
      box-sizing: border-box
      box-shadow: 0 1vw 1vw rgba(0,0,0,0.3)
      margin: 1rem

      .item-img
        width: 100%
        height: 100%
        object-fit: cover
        // filter: contrast(100%) opacity(100%)
</style>
