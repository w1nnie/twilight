<template>
  <div id="app">
    <loading v-show="l" />
    <transition name="fade">
      <top v-show="!l" />
    </transition>
  </div>
</template>

<script>
import Loading from "@/components/Loading.vue";
import Top from "@/components/Top.vue";
import Works from "@/components/Works.vue";

(function(d) {
  var config = {
      kitId: "wqc5xpv",
      scriptTimeout: 3000,
      async: true
    },
    h = d.documentElement,
    t = setTimeout(function() {
      h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
    }, config.scriptTimeout),
    tk = d.createElement("script"),
    f = false,
    s = d.getElementsByTagName("script")[0],
    a;
  h.className += " wf-loading";
  tk.src = "https://use.typekit.net/" + config.kitId + ".js";
  tk.async = true;
  tk.onload = tk.onreadystatechange = function() {
    a = this.readyState;
    if (f || (a && a != "complete" && a != "loaded")) return;
    f = true;
    clearTimeout(t);
    try {
      Typekit.load(config);
    } catch (e) {}
  };
  s.parentNode.insertBefore(tk, s);
})(document);

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
