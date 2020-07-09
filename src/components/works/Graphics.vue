<template lang="pug">
.graphics-container
  .graphics-tags
    .graphics-tags-item(v-for="(tag, index) in tagList" @click="enableTag(index)") {{tag}}
  transition-group.graphics-item-container(name="filter")
    router-link.item(v-for="item in filteredData" :to="'/works/graphics/'+item.id" :key="item.id")
      img.item-img(:style="{objectPosition: item.position}" :src="'/twilight/img/thumbnail/'+item.filename+'.jpg'")
  router-view
</template>

<script>
import graphicsData from "@/assets/graphicsData.json";

export default {
  name: "Graphics",
  data() {
    return {
      graphicsData,
      tagList: ["ドット絵", "イラスト", "オリジナル", "二次創作"],
      activeTagFlags: [false, false, false, false],
      activeTagIndex: -1
    };
  },
  computed: {
    filteredData() {
      let data = graphicsData;
      let t = this.tagList;
      let ati = this.activeTagIndex;
      if (this.activeTagIndex == -1) {
      } else {
        data = graphicsData.filter(function(item, index) {
          let isIncludeTag = item.tags.some(a => a == t[ati]);
          return isIncludeTag;
        });
      }
      return data;
    },
    sortedData() {
      return null;
    }
  },
  methods: {
    enableTag(index) {
      if (this.activeTagIndex == index) {
        this.activeTagIndex = -1;
      } else {
        this.activeTagIndex = index;
      }
    }
  }
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
    display: flex
    align-items: center

    .graphics-tags-item
      margin: 2rem
      width: 5rem
      height: 80%
      background: white
      color: black
      display: flex
      align-items: center
      justify-content: center
      cursor: pointer

  .graphics-item-container
    width: 100%
    display: inline-flex
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

  .filter-enter-active, .filter-leave-active, .filter-move
    transition: opacity 2s, transform 1s

  .filter-leave-active
    position: absolute

  .filter-enter, .filter-leave-to
    opacity: 0
</style>
