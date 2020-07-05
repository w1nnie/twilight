<template lang="pug">
  .about-svg-container
    svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100")
      circle(cx="50" cy="50" r="50" fill="blue")
</template>

<script>
export default {
  name: "AboutSvg",
  data() {
    return {
      w: window.width,
      h: window.height
    };
  },
  components: {}
};
</script>

<style scoped lang="sass">
.about-svg-container
  width: 100%
  height: 100%

  svg
    width: 100%
    height: 100%
</style>
