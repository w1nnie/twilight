<template lang="pug">
  div
    h1 {{ message }}
    .wrap
      img.th(src="../assets/th/th_1.png")
      img.th.po(src="../assets/th/th_2.png")
      img.th.po(src="../assets/th/th_3.png")
      img.th.po(src="../assets/th/th_4.png")
      img.th.po(src="../assets/th/th_5.png")
      img.th.po(src="../assets/th/th_6.png")
      img.th.po(src="../assets/th/th_7.png")
      img.th.po.yo(src="../assets/th/th_8.png")
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
.wrap
  display: flex
  justify-content: center
  align-items: center
.th
  height: 100vh
  &.po
    position: absolute
    opacity: 0.1
    &.yo
    opacity: 1
</style>
