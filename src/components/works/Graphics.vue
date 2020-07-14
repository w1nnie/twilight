<template lang="pug">
.graphics-container
  .graphics-tags
    .graphics-tags-item(v-for="(tag, index) in tagList" @click="enableTag(index)" :class="[activeTagFlags[index] ? activeClass : '', inactiveClass]") {{tag}}
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
      tagList: [
        "ドット絵",
        "イラスト",
        "オリジナル",
        "二次創作",
        "ファンタジー",
        "星空"
      ],
      activeTagFlags: [false, false, false, false, false, false],
      activeTagIndex: -1,
      activeClass: "graphics-tags-item-active",
      inactiveClass: "graphics-tags-item"
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
        this.activeTagFlags.fill(false);
      } else {
        this.activeTagIndex = index;
        this.activeTagFlags.fill(false);
        this.activeTagFlags[index] = true;
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
    background-color: rgba(0,0,0,0.1)
    display: flex
    align-items: center

    .graphics-tags-item
      margin: 1rem
      width: 6rem
      height: 80%
      background-color: rgba(255,255,255,0.75)
      color: black
      display: flex
      align-items: center
      justify-content: center
      cursor: pointer

    .graphics-tags-item-active
      @extend .graphics-tags-item
      background-color: rgba(255,255,255,0.2)

  .graphics-item-container
    width: 100%
    display: inline-flex
    justify-content: space-around
    flex-wrap: wrap
    overflow: scroll

    .item
      width: 30vh
      height: 30vh
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
    transition: opacity .3s, transform 1s

  .filter-leave-active
    position: absolute

  .filter-enter, .filter-leave-to
    opacity: 0
</style>
