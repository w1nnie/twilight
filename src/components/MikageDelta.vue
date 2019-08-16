<template>
  <div>
    {{ message }}
    <img class="th" src="../assets/th/th_1.png">
    <img class="th po" src="../assets/th/th_2.png">
  </div>
</template>

<script>
export default {
  name: "MikageDelta",
  data() {
  },
  props: {
    message: String
  },
  computed: {
  }
};
</script>

<style scoped lang="sass">
.th
  width: 100vw
  &.po
    position: relative
    top: -100vh
    opacity: 0.4
</style>
