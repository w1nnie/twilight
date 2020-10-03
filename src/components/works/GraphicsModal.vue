<template lang="pug">
router-link.modal-container(to="/gallery/")
  .modal-content
    img.modal-content-img(:src="'/twilight/img/raw/'+idData[$route.params.id-1].filename+idData[$route.params.id-1].raw_ext")
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

  .modal-content
    width: 100%
    height: 100%
    animation: fadeIn .4s
    background-color: rgba(0,0,0,0.75)
    display: flex
    justify-content: center
    align-items: center

    .modal-content-img
      object-fit: contain
      width: 90%
      height: 90%

@keyframes fadeIn
  0% {opacity: 0}
  100% {opacity: 1}
</style>
