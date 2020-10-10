<template lang="pug">
  .skills
    .content
      .item(v-for="(tool, index) in tools")
        .pic
          .icon
            img(:src="'/twilight/img/skills/'+src[index]")
          svg(:width="size" :height="size")
            circle(:cx="size/2" :cy="size/2" :r="radius" :style="styles(index)")
        .label {{tool}}
</template>

<script>
export default {
  name: "Skills",
  data() {
    return {
      width: window.innerWidth / 8.35,
      pcts: [0.95, 0.85, 0.6, 0.4, 0.15, 0.9, 0.8, 0.4, 0.5, 0.2, 0.8],
      tools: [
        "CLIP STUDIO PAINT",
        "Aseprite",
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Adobe Effects",
        "HTML5",
        "CSS3",
        "JavaScript",
        "Vue.js",
        "Unity",
        "MATLAB"
      ],
      src: [
        "",
        "aseprite.png",
        "",
        "",
        "",
        "html5.png",
        "css3.png",
        "javascript.png",
        "vuejs.png",
        "unity.png",
        "matlab.png"
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

.skills
  width: 100%
  height: 100%
  display: flex
  justify-content: center
  align-items: center

  .content
    width: 90%
    height: 80%
    display: flex
    justify-content: space-around
    align-items: center
    flex-wrap: wrap
    overflow: scroll


    .item
      margin: 1%
      width: 12vw
      height: 14vw
      background-color: rgba(0,0,0,0.6)
      color: #fff
      display: flex
      flex-direction: column
      justify-content: space-around
      box-shadow: 8px 8px 10px rgba(0,0,0,0.6), -8px -8px 10px rgba(0,0,0,0.6)
      border-round: 5px

      @media (max-width: $md)
        width: 24vw
        height: 32vw

      .pic
        position: relative
        width: 100%
        height: 87%

        .icon
          width: 100%
          height: 100%
          // background: rgba(255,255,255,0.2)
          display: flex
          justify-content: center
          align-items: center

          img
            width: 65%
            height: auto

        svg
          transform: rotate(-90deg)
          position: absolute
          top: 0
          left: 0


          circle
            --dashArray: 0
            --strokeWidth: 0

            fill: transparent
            stroke: rgba(255,255,255,0.8)
            stroke-width: var(--strokeWidth)
            stroke-linecap: round
            animation: circle 2s ease forwards

      .label
        position: relative
        display: flex
        justify-content: center
        align-items: center
        height: 2vw
        font-size: 1.2vw

        @media (max-width: $md)
          height: 6vw

@keyframes circle
  0%
    stroke-dasharray: 0 10000
  100%
    stroke-dasharray: var(--dashArray) 10000
</style>
