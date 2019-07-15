<template>
  <div @click.stop="next">
    <div v-show="isFirstScene" ref="first">
    </div>
    <div v-show="isSecondScene" ref="second">
    </div>
  </div>
</template>

<script>
import Counter from "./Counter.vue";
export default {
  data() {
    isFirstScene: true,
    isSecondScene: false,
    firstTimeline: null,
    secondTimeline: null
  },

  mounted() {
    this.showFirstScene();
  }

  methods: {
    showFirstScene() {
      this.isFirstScene = true;
      this.firstTimeline = anime.timeline();
      this.firstTimeline
       .add({})
       .add({})
       ...
    }
  }
}
</script>

<style></style>
