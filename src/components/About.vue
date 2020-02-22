<template lang="pug">
  .about-container
    .modal
      .character
      .text
        p 自己紹介
    router-link.top(:to="'/'") ×
</template>

<script>
export default {
  name: "About",
  data() {
    return {};
  }
};
</script>

<style scoped lang="sass">
.about-container
  position: absolute
  width: 100vw
  height: 100vh
  background-color: rgba(0,0,0,0.6)
  display: flex
  justify-content: center
  align-items: center
  color: #fff9e8


  .modal
    position: absolute
    width: 70vw
    height: 70vh
    background-color: rgba(30,30,30,0.5)
    // border-radius: 3rem
    display: flex
    align-items: center
    justify-content: space-around
    border: 1px solid #999285

    .character
      width: 30%
      height: 85%
      background-color: #c77

    .text
      width: 50%
      height: 85%
      background-color: (0,0,0,0.1)

  .top
    position: absolute
    top: 15vh
    right: 15vw
    width: 4rem
    height: 4rem
    // border-radius: 3rem
    background-color: rgba(0,0,0,0.3)
    z-index: 1000
    font-size: 3rem
    text-align: center
    text-decoration: none
    color: #fff9e8
</style>
