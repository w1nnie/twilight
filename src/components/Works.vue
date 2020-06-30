<template lang="pug">
  .works-container
    img.bg(:src='bgImg')
    .modal
      .header works
      .body
        works-item
    router-link.collapse(:to="'/'") ×
</template>

<script>
import WorksItem from "@/components/works/WorksItem.vue";
import p_g from "@/assets/bg/p_g.png";

export default {
  name: "Works",
  data() {
    return {
      bgImg: p_g
    };
  },
  components: {
    WorksItem
  }
};
</script>

<style scoped lang="sass">
$color-text: #fff9e8
$color-box: #1d1d1d
$color-border: #999285

.works-container
  position: absolute
  width: 100vw
  height: 100vh
  background-color: rgba(0,0,0,0.6)
  display: flex
  justify-content: center
  align-items: center
  color: $color-text

  .bg
    width: 100%
    height: 100%

  .modal
    position: absolute
    width: 100vw
    height: 100vh
    background-color: rgba($color-box,0.1)
    border: 1px solid #999285

    .header
      width: 100%
      height: 10%
      background-color: rgba(255,255,255,0.1)
      display: flex
      align-items: center
      justify-content: center
      font-size: 4rem

    .body
      height: 90%
      display: flex
      align-items: center
      justify-coonten: space-around

  .collapse
    position: absolute
    top: 0vh
    right: 0vw
    width: 4rem
    height: 4rem
    background-color: rgba(0,0,0,0.3)
    z-index: 1000
    font-size: 3rem
    text-align: center
    text-decoration: none
    color: $color-text
</style>
