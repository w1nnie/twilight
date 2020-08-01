<template lang="pug">
.graphics-container
  .graphics-tags
    .graphics-tags-item(v-for="(tag, index) in tagList" @click="enableTag(index)" :class="[activeTagFlags[index] ? activeClass : '', inactiveClass]") {{tag}}
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
        "オリジナル",
        "二次創作",
        "ファンタジー",
        "星空"
      ],
      activeTagFlags: [false, false, false, false, false, false],
      activeTagIndex: -1,
      activeClass: "graphics-tags-item-active",
      inactiveClass: "graphics-tags-item",
      zoom: {
        transform: "scale(1.05,1.05)",
        boxShadow: "0 0 0.5vw rgba(0,0,0,0.3)"
      },
      neutral: {
        transform: "scale(1,1)",
        boxShadow: "0 0.5vw 0.5vw rgba(0,0,0,0.3)"
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
.graphics-container
  width: 100%
  height: 100%
  display: flex
  flex-direction: row

  .graphics-tags
    width: 10%
    height: 100%
    background-color: rgba(0,0,0,0.1)
    display: flex
    flex-direction: column
    align-items: center
    position: fixed

    .graphics-tags-item
      margin: 1rem
      width: 3rem
      height: 3rem
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
    width: 90%
    height: 87%
    position: absolute
    right: 0
    display: inline-flex
    justify-content: space-around
    flex-wrap: wrap
    overflow: scroll

    .item
      width: 32vh
      height: 32vh
      background-color: rgb(213,210,172)
      border: 5px solid rgb(74,67,63)
      border-top: 5px solid rgb(140,120,90)
      box-sizing: border-box
      box-shadow: 0 0.5vw 0.5vw rgba(0,0,0,0.3)
      margin: 1vh
      transition: all .2s
      translate-origin: left top

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
