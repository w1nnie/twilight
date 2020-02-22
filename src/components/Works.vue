<template lang="pug">
  .works-container
    p sakuhindayo
    router-link.top(:to="'/'") top
</template>

<script>
export default {
  name: "Works",
  data() {
    return {};
  }
};
</script>

<style scoped lang="sass">
.works-container
  position: absolute
  width: 100vw
  height: 100vh
  background-color: #99f

.works p
  color: white
</style>
