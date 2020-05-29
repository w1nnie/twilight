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
      width: 10vw
      height: 10vh
      background-color: #aaa;
      margin: 1rem
</style>
