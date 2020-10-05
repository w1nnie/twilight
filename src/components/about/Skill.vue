<template lang="pug">
  .ap-container
    .content
      .item(v-for="(tool, index) in tools")
        .pic
          .icon
          svg(:width="size" :height="size")
            circle(:cx="size/2" :cy="size/2" :r="radius" :style="styles(index)")
        .label {{tool}}
    .character
</template>

<script>
export default {
  name: "Skill",
  data() {
    return {
      size: window.innerWidth / 10,
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
    }
  }
};
</script>

<style scoped lang="sass">
.ap-container
  width: 100%
  height: 100%
  display: flex
  justify-content: center
  align-items: center

  .content
    width: 70%
    height: 100%
    display: flex
    justify-content: space-around
    align-items: center
    flex-wrap: wrap
    overflow: scroll


    .item
      margin: 0 1% 0 1%
      width: 150px
      height: 150px
      background-color: rgba(255,255,255,0.1)
      color: #fff
      display: flex
      flex-direction: column
      justify-content: space-around

      .pic
        position: relative

        .icon
          position: absolute
          width: 80%
          height: 80%
          top: 10%
          left: 10%
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


  .character
    width: 30%
    height: 100%
    background-color: rgba(255,255,255,0.1)

@keyframes circle
  0%
    stroke-dasharray: 0 10000
  100%
    stroke-dasharray: var(--dashArray) 10000
</style>
