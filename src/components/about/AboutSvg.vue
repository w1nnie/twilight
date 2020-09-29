<template lang="pug">
  .about-svg-container
    svg(xmlns="http://www.w3.org/2000/svg" :view-box.camel="'0 0 '+w+' '+h")
      path(:d="`M 0 0 L ${w*0.8} 0 L 0 0 L 0 ${h*0.93} z`" :fill="color")
        animate(attributeName="d"
                begin="0.5s"
                dur="0.75s"
                fill="freeze"
                calcMode="spline"
                keyTimes="0;1"
                keySplines="0.25 0.1 0.25 1.0"
                :to="`M 0 0 L ${w*0.8} 0 L ${w*0.65} ${h*0.3} L 0 ${h*0.93} z`")
      path(:d="`M ${w*0.07} ${h} L ${w} ${h} L ${w} ${h*0.37} L ${w} ${h} z`" :fill="color")
              animate(attributeName="d"
                begin="0.5s"
                dur="0.75s"
                fill="freeze"
                calcMode="spline"
                keyTimes="0;1"
                keySplines="0.25 0.1 0.25 1.0"
                :to="`M ${w*0.07} ${h} L ${w*0.72} ${h*0.37} L ${w} ${h*0.37} L ${w} ${h} z`")
      router-link(:to="'/'" tag="path" :d="`M ${w*0.89} 0 L ${w} 0 L ${w} ${h*0.27} L ${w} 0 z`" :fill="color")
              animate(attributeName="d"
                begin="0.5s"
                dur="0.75s"
                fill="freeze"
                calcMode="spline"
                keyTimes="0;1"
                keySplines="0.25 0.1 0.25 1.0"
                :to="`M ${w*0.89} 0 L ${w} 0 L ${w} ${h*0.27} L ${w*0.75} ${h*0.27} z`")
    //- .po(v-on:click="negi")
</template>

<script>
export default {
  name: "AboutSvg",
  data() {
    return {
      w: window.innerWidth,
      h: window.innerHeight,
      color: "#d3e2f8",
      collapseColor: "hsl(110,5%,20%)"
    };
  },
  components: {}
  // computed: {
  //   negi() {
  //     while (this.time < 100) {
  //       let p1 = {
  //         x: this.w * 0.65 * (this.time / 100),
  //         y: this.h * 0.3 * (this.time / 100)
  //       };
  //       // this.p2.x = this.w * 0.72;
  //       // this.p2.y = this.h * 0.37;
  //       // this.p3.x = this.w * 0.75;
  //       // this.p3.y = this.h * 0.27;
  //     }
  //     return p1;
  //   }
  // }
  // mounted() {
  //   const startTime = Date.now();
  //   const update = () => {
  //     this.time = Date.now() - startTime;
  //     requestAnimationFrame(update);
  //   };
  //   update();
  // }
};
</script>

<style scoped lang="sass">

@import "@/assets/colors.sass"

.about-svg-container
  width: 100%
  height: 100%
  transition: transform 0.2s

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
