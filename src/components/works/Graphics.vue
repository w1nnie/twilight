<template lang="pug">
.graphics-container
  .graphics-tags
    .graphics-tags-item(v-for="(tag, index) in tagList" @click="enableTag(index)" :class="[activeTagFlags[index] ? activeClass : '', inactiveClass]") {{displayTagList[index]}}
  transition-group.graphics-item-container(name="filter")
    router-link.item(v-for="item in sortedData" 
     :to="'/works/graphics/'+item.id" 
     :key="item.id" 
     @mouseover.native="zoomIn(item.id)"
     @mouseout.native="zoomOut()"
     :style="[isEqual(focus, item.id) ? zoom : neutral]")
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
        "デザイン",
        "オリジナル",
        "二次創作",
        "星空"
      ],
      displayTagList: ["ド", "イ", "デ", "オ", "二", "星"],
      activeTagFlags: [false, false, false, false, false, false],
      activeTagIndex: -1,
      activeClass: "graphics-tags-item-active",
      inactiveClass: "graphics-tags-item",
      zoom: {
        transform: "scale(1.02,1.02)"
      },
      neutral: {
        transform: "scale(1,1)"
      },
      focus: -1
    };
  },
  computed: {
    filteredData() {
      let data = this.graphicsData.slice();
      let t = this.tagList;
      let ati = this.activeTagIndex;
      if (this.activeTagIndex == -1) {
      } else {
        data = data.filter(function(item, index) {
          let isIncludeTag = item.tags.some(a => a == t[ati]);
          return isIncludeTag;
        });
      }
      return data;
    },
    sortedData() {
      let data = this.filteredData.slice();
      data = data.sort(function(a, b) {
        return b.date - a.date;
      });
      return data;
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
    },
    zoomIn(i) {
      this.focus = i;
    },
    zoomOut() {
      this.focus = 1000;
    },
    isEqual(a, b) {
      return a == b;
    }
  }
};
</script>

<style scoped lang="sass">

@import "@/assets/colors.sass"

.morph
  background-color: $color-bg
  color: $color-text
  box-shadow: $color-shadow
  border-radius: 10px

.graphics-container
  width: 100%
  height: 100%
  display: flex
  flex-direction: row

  .graphics-tags
    @extend .morph
    width: 5%
    height: 100%
    display: flex
    flex-direction: column
    align-items: center
    position: fixed
    overflow: hidden

    .graphics-tags-item
      @extend .morph
      margin: 1rem
      width: 3rem
      height: 3rem
      color: black
      display: flex
      align-items: center
      justify-content: center
      cursor: pointer
      box-shadow: -10px -10px 20px $color-light, 10px 10px 20px $color-dark
      transition: all .1s

    .graphics-tags-item-active
      @extend .graphics-tags-item
      background-color: #b6d7cc
      box-shadow: -10px -10px 20px $color-dark, 10px 10px 20px $color-light

  .graphics-item-container
    width: 95%
    height: 81%
    position: absolute
    right: 0
    display: inline-flex
    justify-content: space-around
    flex-wrap: wrap
    overflow: scroll
    padding-top: 3vh
    padding-bottom: 3vh

    .item
      @extend .morph
      width: 33vh
      height: 33vh
      border: 5px solid $color-bg
      box-sizing: border-box
      margin: 4vh
      transition: all .2s
      translate-origin: left top
      box-shadow: 15px 15px 25px $color-dark, -15px -15px 25px $color-light

      &:hover
        box-shadow: none

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
