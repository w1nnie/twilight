<template lang="pug">
  .study 
    .title Study
    transition(name="fade")
      .content(v-show="isPassedStudy")
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
  props: ["scrollY"],
  computed: {
    styles() {
      return {
        "--dashArray": this.radius * 2 * Math.PI * this.pct,
        "--strokeWidth": this.size / 10
      };
    },
    radius() {
      return this.size / 2.3;
    },
    isPassedStudy() {
      return this.scrollY > 2.5;
    }
  }
};
</script>

<style scoped lang="sass">
.study
  width: 100%
  height: 100%
  color: white
  position: relative

  .title
    font-size: 40px
    margin-bottom: 20px

  .content
    position: absolute
    width: 90%
    height: 80%
    left: 5%
    background: rgba(0,0,0,0.6)
    border-radius: 10px
    box-shadow: 0px 0px 10px rgba(0,0,0,0.6)

.fade-enter-active, .fade-leave-active
  will-change: opacity, transform
  transition: all 1s ease-out

.fade-enter, .fade-leave-to
  opacity: 0
  transform: translateY(150px)
</style>
