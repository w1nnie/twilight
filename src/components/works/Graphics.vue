<template lang="pug">
.graphics-container
  .cambus
    .pictures(v-for="item in items") {{item.message}}{{item.poyo}}
</template>

<script>
export default {
  name: "Graphics",
  data() {
    return {
      items: [
        { message: "Foo", poyo: "po" },
        { message: "Bar", poyo: "yo" }
      ]
    };
  }
};
</script>

<style scoped lang="sass">
.graphics-container
  width: 100%
  height: 100%

  .cambus
    display: flex
    justify-content: start

    .pictures
      width: 16vw
      height: 12vw
      background-color: #aaa
      border: 0.5vw solid #655e53
      box-shadow: 0 1vw 3vw rgba(0,0,0,0.25)
      margin: 1rem
</style>
