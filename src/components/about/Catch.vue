<template lang="pug">
  .catch
</template>

<script>
export default {
  name: "Catch",
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
.catch
  width: 100%
  height: 100%
  color: white
</style>
