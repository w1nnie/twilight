<template lang="pug">
//- .works-item-container
//-   router-link.item(v-for="item in graphicsData" :to="'/works/'+item.id")
//-     img.item-img(:style="{objectPosition: item.position}" :src="'/twilight/img/thumbnail/'+item.filename+'.jpg'")
//-   router-view
</template>

<script>
import graphicsData from "@/assets/graphicsData.json";

export default {
  name: "Games",
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
  display: flex
  justify-content: space-around
  flex-wrap: wrap
  overflow: scroll

  .item
    width: 17vw
    height: 17vw
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
