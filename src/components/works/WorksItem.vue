<template lang="pug">
.works-item-container
  .cambus()
    router-link.item(v-for="item in graphicsData" :to="'/works/'+item.id")
      img.item-img(:src="`/img/${item.link}`")
    router-view
</template>

<script>
import graphicsData from "@/assets/graphicsData.json";

export default {
  name: "WorksItem",
  data() {
    return {
      graphicsData
    };
  },
  methods: {}
};
</script>

<style scoped lang="sass">
.works-item-container
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
