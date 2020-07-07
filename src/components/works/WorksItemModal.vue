<template lang="pug">
router-link.modal-container(to="/works") {{$route.params.id}}
  .modal-content
    img.modal-content-img(:src="'/twilight/img/raw/'+graphicsData[$route.params.id-1].filename+graphicsData[$route.params.id-1].raw_ext")
    
</template>

<script>
import graphicsData from "@/assets/graphicsData.json";

export default {
  name: "WorksItemModal",
  data() {
    return {
      graphicsData
    };
  },
  methods: {}
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
  cursor: initial

  .modal-content
    width: 80%
    height: 80%
    background-color: #fff

    .modal-content-img
      object-fit: contain
      width: 100%
      height: 100%
</style>
