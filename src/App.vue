<template>
  <div id="app">
    <Loading v-show="l" />
    <Top v-show="!l" />
  </div>
</template>

<script>
import Loading from "@/components/Loading.vue";
import Top from "@/components/Top.vue";

export default {
  name: "app",
  data() {
    return {
      l: true
    };
  },
  components: {
    Top,
    Loading
  },
  mounted() {
    setTimeout(() => {
      this.l = false;
    }, 1000);
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
