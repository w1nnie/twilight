<template lang="pug">
  .works-container(:style="height")
    .header Gallery
      router-link.collapse(:to="'/'") ×
    .body
      transition(name="slide-fade")
        Graphics
</template>

<script>
import Graphics from "@/components/works/Graphics.vue";

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
  name: "Works",
  components: {
    Graphics
  },
  computed: {
    height() {
      return {
        "--height": window.innerHeight + "px"
      };
    }
  }
};
</script>

<style scoped lang="sass">

@import "@/assets/colors.sass"
@import "@/assets/media.sass"

.morph
  background-color: $color-bg
  color: $color-text
  box-shadow: $color-shadow
  border-radius: 10px

.works-container
  --height: 0

  position: absolute
  width: 100vw
  height: var(--height)
  top: 0
  left: 0
  background-color: $color-bg
  color: $color-text

  .header
    @extend .morph
    width: 100%
    height: 8%
    top: 0
    display: flex
    align-items: center
    justify-content: center
    font-size: 3rem
    box-shadow: 5px 5px 10px $color-dark
    font-family: vdl-logojr, sans-serif
    font-weight: 400
    font-style: normal

    @media only screen and (max-width: $md)
      font-size: 2.3rem

  .body
    width: 100%
    height: 92%
    overflow: scroll


  .collapse
    @extend .morph
    position: absolute
    top: 0vh
    right: 0vw
    width: 8vh
    height: 8vh
    z-index: 1000
    font-size: 4vh
    text-align: center
    text-decoration: none
    color: $color-text
    overflow: hidden
    box-shadow: 5px 5px 10px $color-dark, -5px -5px 10px $color-light
    transition: all .1s

    &:active
      box-shadow: inset 1px 1px 2px $color-dark, inset -1px -1px 2px $color-light

.slide-fade-enter-active, .slide-fade-leave-active
  transition: all .4s

.slide-fade-enter, .slide-fade-leave-to
  transform: translateX(-50px)
  opacity: 0
</style>
