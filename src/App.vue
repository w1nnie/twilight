<template>
  <div id="app">
    <loading v-show="l" />
    <transition name="fade">
      <top v-show="!l" />
    </transition>
    <about v-show="false" />
  </div>
</template>

<script>
import Loading from "@/components/Loading.vue";
import Top from "@/components/Top.vue";
import About from "@/components/About.vue";
import Works from "@/components/Works.vue";

export default {
  name: "app",
  data() {
    return {
      l: true
    };
  },
  components: {
    Top,
    About,
    Loading
  },
  mounted() {
    setTimeout(() => {
      this.l = false;
    }, 5000);
  }
};
</script>

<style scoped lang="sass">
#app
  font-family: "Avenir", Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50

.fade-enter-active, .fade-leave-active
  transition: all 0.9s ease
  transition-delay: 0.5s

.fade-enter, .fade-leave-to
  opacity: 0
  transition-delay: 0s
</style>
