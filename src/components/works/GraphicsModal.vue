<template lang="pug">
.modal-container(@click="closeModal")
  .modal-content 
    img.modal-content-img(:src="'/twilight/img/raw/'+data[index].filename+data[index].raw_ext")
    .text 
      .title {{data[index].title}}
      .description {{data[index].desc}}
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
  width: 100vw
  height: 100vh
  position: fixed
  top: 0
  left: 0
  z-index: 10000
  cursor: initial
  background-color: rgba(0,0,0,0.75)
  text-decoration: none

  .modal-content
    width: 100%
    max-width: 1000px
    height: 100%
    animation: fadeIn .4s
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column

    .modal-content-img
      object-fit: contain
      max-width: 100%
      max-height: 600px

    .text
      width: 100%
      height: 20vh
      // background: rgba(255,255,255,0.5)
      text-align: left
      color: #ffffff

      .title
        font-size: 1.5rem
        padding: 10px 20px 10px 20px

      .description
        font-size: 1rem
        padding: 0 20px 0 20px

@keyframes fadeIn
  0% {opacity: 0}
  100% {opacity: 1}
</style>
