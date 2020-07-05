<template lang="pug">
  .about-svg-container
    svg(xmlns="http://www.w3.org/2000/svg" :view-box.camel="'0 0 '+w+' '+h")
      path(:d="`M 0 0 L ${w*0.8} 0 L ${p1.x} ${p1.y} L 0 ${h*0.93} z`" fill="white")
      path(:d="`M ${w*0.07} ${h} L ${p2.x} ${p2.y} L ${w} ${h*0.37} L ${w} ${h} z`" fill="white")
      path(:d="`M ${w*0.89} 0 L ${w} 0 L ${w} ${h*0.27} L ${p3.x} ${p3.y} z`" fill="white")
    .po(v-on:click="negi")
</template>

<script>
export default {
  name: "AboutSvg",
  data() {
    return {
      w: window.innerWidth,
      h: window.innerHeight,
      p1: {
        x: 0,
        y: 0
      },
      p2: {
        x: window.innerWidth,
        y: window.innerHeight
      },
      p3: {
        x: window.innerWidth,
        y: 0
      }
    };
  },
  components: {},
  methods: {
    negi() {
      this.p1.x = this.w * 0.65;
      this.p1.y = this.h * 0.3;
      this.p2.x = this.w * 0.72;
      this.p2.y = this.h * 0.37;
      this.p3.x = this.w * 0.75;
      this.p3.y = this.h * 0.27;
      console.log("negi");
    }
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

  .po
    position: absolute
    top: 0
    left: 0
    width: 100px
    height: 100px
    background-color: #fff
    z-index: 200
</style>
