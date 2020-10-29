<template lang="pug">
.modal-container(@click.self="closeModal")
  .modal-content
    img.modal-content-img(:src="'/twilight/img/raw/'+data[index].filename+data[index].raw_ext")
    .text
      .title {{data[index].title}}
      .description {{data[index].desc}}
      a.links(v-for="(link, i) in data[index].links" :href="data[index].links[i]") {{data[index].linkText[i]}} 
        br
    .m-collapse(@click="closeModal") ×
</template>

<script>
import graphicsData from "@/assets/graphicsData.json";

export default {
  name: "GraphicsModal",
  data() {
    return {
      show: true
    };
  },
  methods: {
    closeModal() {
      this.$emit("close", (this.show = false));
    }
  },
  props: ["data", "index"]
};
</script>

<style scoped lang="sass">
.modal-container
  display: flex
  justify-content: center
  align-items: center
  width: 100%
  height: 100%
  position: fixed
  top: 0
  left: 0
  z-index: 10000
  cursor: initial
  background-color: rgba(0,0,0,0.75)
  text-decoration: none
  font-family: vdl-logojr, sans-serif
  font-weight: 400
  font-style: normal

  .modal-content
    width: 100%
    height: 100%
    overflow: scroll
    max-width: 900px
    animation: fadeIn .4s
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column
    background-color: rgba(0,0,0,0.5)
    will-change: opacity

    .modal-content-img
      object-fit: contain
      max-width: 90%
      max-height: 550px

      @media (min-width:500px)
        max-width: 80%

    .text
      width: 100%
      // background: rgba(255,255,255,0.5)
      text-align: left
      color: #ffffff
      font-family: ryo-gothic-plusn, sans-serif
      font-weight: 400
      font-style: normal

      .title
        font-size: 1.5rem
        padding: 20px 20px 10px 20px
        font-weight: bold

      .description
        font-size: 1rem
        padding: 0 20px 10px 20px

      .links
        padding: 10px 20px 10px 20px
        color: #8eb8ff

    .m-collapse
      position: fixed
      top: 10px
      right: 10px
      font-size: 35px
      color: #fff
      text-shadow: #000 0 0 10px
      cursor: pointer

      @media (min-width:800px)
        display: none


@keyframes fadeIn
  0% {opacity: 0}
  100% {opacity: 1}
</style>
