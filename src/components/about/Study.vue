<template lang="pug">
  .study 
    .title Study
</template>

<script>
export default {
  name: "Study",
  data() {
    return {
      size: window.innerWidth / 10,
      pct: 1.2
    };
  },
  computed: {
    styles() {
      return {
        "--dashArray": this.radius * 2 * Math.PI * this.pct,
        "--strokeWidth": this.size / 10
      };
    },
    radius() {
      return this.size / 2.3;
    }
  }
};
</script>

<style scoped lang="sass">
.study
  width: 100%
  height: 100%
  color: white

  .title
    font-size: 40px
</style>
