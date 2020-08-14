<template lang="pug">
.graphics-container
  .graphics-tags
    .graphics-tags-item(v-for="(tag, index) in tagList" @click="enableTag(index)" :class="[activeTagFlags[index] ? activeClass : '', inactiveClass]") {{displayTagList[index]}}
  transition-group.graphics-item-container(name="filter")
    router-link.item(v-for="item in sortedData" 
     :to="'/works/graphics/'+item.id" 
     :key="item.id" 
     @mouseover.native="zoomIn(item.id)"
     @mouseout.native="zoomOut()")
      img.item-img(:style="{objectPosition: item.position}" v-lazy="'/twilight/img/thumbnail/'+item.filename+item.thm_ext")
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
  flex-direction: row-reverse

  .graphics-tags
    @extend .morph
    box-shadow: none
    width: 5%
    height: 100%
    display: flex
    flex-direction: column
    align-items: center
    position: fixed

    .graphics-tags-item
      @extend .morph
      margin: 1rem
      width: 3rem
      height: 3rem
      display: flex
      align-items: center
      justify-content: center
      cursor: pointer
      box-shadow: -5px -5px 15px $color-light, 5px 5px 15px $color-dark
      transition: all .1s

    .graphics-tags-item-active
      @extend .graphics-tags-item
      box-shadow: inset -2px -2px 2px $color-light, inset 2px 2px 2px $color-dark

  .graphics-item-container
    width: 95%
    height: 81%
    position: absolute
    left: 0
    display: inline-flex
    justify-content: space-around
    flex-wrap: wrap
    overflow: scroll
    padding-top: 3vh
    padding-bottom: 3vh

    .item
      @extend .morph
      border-radius: 30px
      width: 33vh
      height: 33vh
      margin: 4vh
      // border: solid 5px $color-bg
      // box-sizing: border-box
      transition: box-shadow .1s, transform .7s, opacity .1s
      box-shadow: 12px 12px 15px $color-dark, -12px -12px 15px $color-light

      &:hover
        box-shadow: 2px 2px 2px $color-dark, -2px -2px 2px $color-light

      .item-img
        width: 100%
        height: 100%
        object-fit: cover
        border-radius: 30px

  .filter-enter-active, .filter-leave-active, .filter-move

  .filter-leave-active
    position: absolute

  .filter-enter, .filter-leave-to
    opacity: 0
</style>
