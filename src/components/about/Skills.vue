<template lang="pug">
  .skills
    .title Skills
    transition(name="fade")
      .content(v-show="isPassedSkills")
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
      width: window.innerWidth / 8.9,
      pcts: [0.95, 0.85, 0.6, 0.4, 0.9, 0.8, 0.4, 0.5, 0.2, 0.7],
      tools: [
        "CLIP STUDIO PAINT",
        "Aseprite",
        "Adobe Photoshop",
        "Adobe Illustrator",
        "HTML5",
        "CSS3",
        "JavaScript",
        "Vue.js",
        "Unity",
        "MATLAB"
      ],
      src: [
        "no_image.png",
        "aseprite.png",
        "no_image.png",
        "no_image.png",
        "html5.png",
        "css3.png",
        "javascript.png",
        "vuejs.png",
        "unity.png",
        "matlab.png"
      ]
    };
  },
  props: ["scrollY"],
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
    },
    isPassedSkills() {
      return this.scrollY > 1.5;
    }
  }
};
</script>

<style scoped lang="sass">

@import "@/assets/media.sass"

.skills
  width: 100%
  height: 100%
  color: white
  position: relative

  .title
    font-size: 40px

  .content
    position: absolute
    width: 90%
    height: 80%
    left: 5%
    display: flex
    justify-content: space-around
    align-items: center
    flex-wrap: wrap
    overflow: scroll
    will-change: transform, opacity


    .item
      margin: 1% 2% 1% 2%
      width: 11vw
      height: 15vw
      background-color: rgba(0,0,0,0.6)
      color: #fff
      display: flex
      flex-direction: column
      justify-content: space-around
      box-shadow: 0px 0px 5px rgba(0,0,0,0.6)
      border-radius: 5px

      @media only screen and (max-width: $md)
        margin: 0 0.5% 0 0.5%
        width: 22vw
        height: 30vw

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
            width: 58%
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
            will-change: stroke-dasharray

      .label
        position: relative
        display: flex
        justify-content: center
        align-items: center
        height: 4vw
        font-size: 1.2vw

        @media only screen and (max-width: $md)
          height: 10vw
          font-size: 0.6rem

  .fade-enter-active, .fade-leave-active
    will-change: opacity, transform
    transition: all 1s ease-out

  .fade-enter, .fade-leave-to
    opacity: 0
    transform: translateY(100px)

@keyframes circle
  0%
    stroke-dasharray: 0 10000
  100%
    stroke-dasharray: var(--dashArray) 10000
</style>
