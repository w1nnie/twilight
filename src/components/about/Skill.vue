<template lang="pug">
  .as-container
    .content
      .item(v-for="(tool, index) in tools")
        .pic
          .icon
          svg(:width="size" :height="size")
            circle(:cx="size/2" :cy="size/2" :r="radius" :style="styles(index)")
        .label {{tool}}
</template>

<script>
export default {
  name: "Skill",
  data() {
    return {
      width: window.innerWidth / 10,
      pcts: [0.95, 0.85, 0.6, 0.4, 0.15, 0.9, 0.8, 0.4, 0.2, 0.8],
      tools: [
        "CLIP STUDIO PAINT",
        "Aseprite",
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Adobe Effects",
        "HTML5",
        "CSS3",
        "JavaScript",
        "Unity",
        "MATLAB"
      ]
    };
  },
  methods: {
    styles(index) {
      return {
        "--dashArray": this.radius * 2 * Math.PI * this.pcts[index],
        "--strokeWidth": this.size / 15
      };
    }
  },
  computed: {
    radius() {
      return this.size / 2.3;
    },
    size() {
      let size;
      if (this.width < 50) {
        size = this.width * 2;
      } else {
        size = this.width;
      }
      return size;
    }
  }
};
</script>

<style scoped lang="sass">

@import "@/assets/media.sass"

.as-container
  width: 100%
  height: 100%
  display: flex
  justify-content: center
  align-items: center

  .content
    width: 90%
    height: 100%
    display: flex
    justify-content: space-around
    align-items: center
    flex-wrap: wrap
    overflow: scroll


    .item
      margin: 1%
      width: 12vw
      height: 12vw
      background-color: rgba(255,255,255,0.1)
      color: #fff
      display: flex
      flex-direction: column
      justify-content: space-around

      @media (max-width:$md)
        width: 24vw
        height: 24vw

      .pic
        position: relative

        .icon
          position: absolute
          width: 80%
          height: 80%
          top: 50%
          left: 50%
          transform: translate(-50%, -50%)
          background: rgba(255,255,255,0.2)

        svg
          transform: rotate(-90deg)

          circle
            --dashArray: 0
            --strokeWidth: 0

            fill: transparent
            stroke: #ffffff
            stroke-width: var(--strokeWidth)
            stroke-linecap: round
            animation: circle 2s ease forwards

      .label
        position: relative
        font-size: 1vw

@keyframes circle
  0%
    stroke-dasharray: 0 10000
  100%
    stroke-dasharray: var(--dashArray) 10000
</style>
