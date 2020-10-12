<template lang="pug">
  .about-container
    about-svg.about-svg
    .shutter
    router-link.collapse(:to="'/'") ×
    about-content.content
</template>

<script>
import AboutSvg from "@/components/about/AboutSvg.vue";
import AboutContent from "@/components/about/AboutContent.vue";
import p_a from "@/assets/bg/p_n.png";

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
  name: "About",
  data() {
    return {
      charaImg: p_a
    };
  },
  components: {
    AboutSvg,
    AboutContent
  }
};
</script>

<style scoped lang="sass">

@import "@/assets/colors.sass"

.about-container
  position: absolute
  width: 100%
  height: 100%
  display: flex
  justify-content: center
  align-items: center
  color: $color-text

  .about-svg
    animation: asAnim 3s forwards
    animation-timing-function: ease-in-out

  .shutter
    position: absolute
    width: 100%
    height: 100%
    top: -100%
    background-color: rgba(0,0,0,0.8)
    animation: shutterAnim 3s forwards
    animation-timing-function: ease-in

    .bg
      position: absolute
      width: 100%
      height: 100%
      opacity: 0
      background: linear-gradient(-135deg, #a59e4c, #131348)
      background-size: 750% 750%
      animation: fadeIn 3s forwards, vibrate 5s forwards
      // inifinite??

  .content
    animation: cardAnim 2.5s forwards
    opacity: 0

  .collapse
    position: absolute
    top: 0vh
    right: 0vw
    width: 8vh
    height: 8vh
    z-index: 1000
    font-size: 6vh
    text-align: center
    text-decoration: none
    color: $color-bg
    overflow: hidden
    box-shadow: 5px 5px 10px $color-dark, -5px -5px 10px $color-light
    transition: all .1s
    animation: cardAnim 2.5s forwards
    opacity: 0

    &:active
      box-shadow: inset 1px 1px 2px $color-dark, inset -1px -1px 2px $color-light

@keyframes asAnim
  70%
    opacity: 1
  100%
    opacity: 0.75

@keyframes shutterAnim
  40%
    top: -200vh
  70%
    top: 0
    opacity: 1
    background: rgba(10,10,20,0.9)
  100%
    top: 0
    opacity: 1
    background: #131348

@keyframes cardAnim
  75%
    opacity: 0
  100%
    opacity: 1

@keyframes fadeIn
  70%
    opacity: 0
  100%
    opacity: 0.7

@keyframes vibrate
  0%
    background-position: 0% 50%
  50%
    background-position: 50% 100%
  100%
    background-position: 0% 50%
</style>
