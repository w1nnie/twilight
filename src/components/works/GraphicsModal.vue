<template lang="pug">
router-link.modal-container(to="/gallery/")
  .modal-content
    img.modal-content-img(:src="'/twilight/img/raw/'+idData[$route.params.id-1].filename+idData[$route.params.id-1].raw_ext")
    .description aaaaaaaaaaaaaa
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
    background-color: blue
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column

    .modal-content-img
      object-fit: contain
      // height: 80%
      max-width: 100%
      max-height: 600px

    .description
      width: 100%
      height: 20vh
      background: white

@keyframes fadeIn
  0% {opacity: 0}
  100% {opacity: 1}
</style>
