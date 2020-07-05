<template lang="pug">
  .about-svg-container
    svg(xmlns="http://www.w3.org/2000/svg" :view-box.camel="'0 0 '+w+' '+h")
      path(:d="`M 0 0 L ${w*0.8} 0 L ${w*0.65} ${h*0.3} L 0 ${h*0.93} z`" fill="white")
      path(:d="`M ${w*0.07} ${h} L ${w*0.72} ${h*0.37} L ${w} ${h*0.37} L ${w} ${h} z`" fill="white")
      path(:d="`M ${w*0.9} 0 L ${w} 0 L ${w} ${h*0.27} L ${w*0.75} ${h*0.27} z`" fill="white")
</template>

<script>
export default {
  name: "AboutSvg",
  data() {
    return {
      w: window.innerWidth,
      h: window.innerHeight
    };
  },
  components: {},
  method: {
    // w() {
    //   return window.innerWidth;
    //   console.log(window.innerWidth);
    // },
    // h() {
    //   return window.innerHeight;
    // }
  }
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
