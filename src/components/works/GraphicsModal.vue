<template lang="pug">
router-link.modal-container(to="/gallery/")
  .modal-content
    img.modal-content-img(:src="'/twilight/img/raw/'+idData[$route.params.id-1].filename+idData[$route.params.id-1].raw_ext")
    .text 
      .title {{idData[$route.params.id-1].title}}
      .description {{idData[$route.params.id-1].desc}}
</template>

<script>
import graphicsData from "@/assets/graphicsData.json";

export default {
  name: "GraphicsModal",
  data() {
    return {
      graphicsData
    };
  },
  methods: {},
  computed: {
    idData() {
      let d = this.graphicsData;
      d = d.sort(function(a, b) {
        return a.id - b.id;
      });
      return d;
    }
  }
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
        font-size: 30px
        padding: 10px 20px 10px 20px

      .description
        font-size: 20px
        padding: 0 20px 0 20px

@keyframes fadeIn
  0% {opacity: 0}
  100% {opacity: 1}
</style>
