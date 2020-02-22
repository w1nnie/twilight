<template lang="pug">
　　.pictures(v-for="item in items")
</template>

<script>
export default {
  name: "Gallery",
  data() {
    return{
        items: [a,b,c]
    }
  }
}
</script>

<style scoped lang="sass">
.pictures
  width: 10vw
  height: 10vh
  background-color: #aaa;
</style>