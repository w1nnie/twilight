<template lang="pug">
router-link.modal-container(to="/works") {{$route.params.id}}
  .modal-content
    //- img(:src="graphicsData[$route.params.id]")
    
</template>

<script>
import graphicsData from "@/assets/graphicsData.json";

export default {
  name: "WorksItemModal",
  data() {
    return {
      graphicsData
    };
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
  cursor: initial

  .modal-content
    width: 80%
    height: 80%
    background-color: #fff
</style>
