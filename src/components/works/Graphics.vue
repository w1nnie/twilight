<template lang="pug">
.graphics-container
  .graphics-tags
    .graphics-tags-item(v-for="(tag, index) in tagList" @click="enableTag(index)" :class="[activeTagFlags[index] ? activeClass : '', inactiveClass]") {{displayTagList[index]}}
  transition-group.graphics-item-container(name="filter")
    router-link.item(v-for="item in sortedData"
     :style="styles"
     :to="'/gallery/'+item.id" 
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
      tagList: ["イラスト", "ドット絵", "デザイン", "プロダクト"],
      displayTagList: ["Illust", "Pixelart", "Design", "Product"],
      activeTagFlags: [true, false, false, false],
      activeTagIndex: 0,
      oldActiveTagIndex: 0,
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
    },
    styles() {
      return {
        "--xmove":
          this.activeTagIndex == -1
            ? 0
            : this.oldActiveTagIndex - this.activeTagIndex
      };
    }
  },
  methods: {
    enableTag(index) {
      this.oldActiveTagIndex = this.activeTagIndex;
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
  flex-direction: column

  .graphics-tags
    @extend .morph
    box-shadow: none
    width: 100%
    height: 8%
    display: flex
    justify-content: center
    align-items: center
    position: fixed

    .graphics-tags-item
      @extend .morph
      background-color: $color-base
      margin: 0 1vw 0 1vw
      height: 2rem
      padding: 0 2vw 0 2vw
      display: flex
      align-items: center
      justify-content: center
      cursor: pointer
      box-shadow: -5px -5px 15px $color-light, 5px 5px 15px $color-dark
      transition: all .1s
      user-select: none

    .graphics-tags-item-active
      @extend .graphics-tags-item
      box-shadow: inset -2px -2px 2px $color-light, inset 2px 2px 2px $color-dark

  .graphics-item-container
    width: 100%
    height: 80%
    position: absolute
    left: 0
    bottom: 0
    display: inline-flex
    justify-content: space-around
    flex-wrap: wrap
    overflow: scroll
    padding-top: 1vh
    padding-bottom: 3vh

    .item
      @extend .morph
      background-color: $color-base
      border-radius: 30px
      width: 37vh
      height: 33vh
      margin: 2vh
      border: solid 10px $color-base
      box-sizing: border-box
      box-shadow: 12px 12px 15px $color-dark

      &:hover
        box-shadow: 2px 2px 2px $color-dark, -2px -2px 2px $color-light
        transition: box-shadow .25s

      .item-img
        width: 100%
        height: 100%
        object-fit: cover
        border-radius: 30px

  .filter-enter-active, .filter-move
    transition: transform 1s ease .2s, opacity .3s ease .2s

  .filter-leave-active
    position: absolute
    transition: transform 1s ease 0s, opacity .15s ease 0s

  .filter-enter
    --xmove: 0

    opacity: 0
    transform: translateX(calc(-300px * var(--xmove)))

  .filter-leave-to
    opacity: 0
    transform: translateY(50vh)
</style>
