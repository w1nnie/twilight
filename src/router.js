import Vue from "vue";
import Router from "vue-router";

import Top from "@/components/Top.vue";
import About from "@/components/About.vue";
import Works from "@/components/Works.vue";
// import Graphics from "@/components/works/Graphics.vue";
// import Games from "@/components/works/Games.vue";
// import Music from "@/components/works/Music.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Top
    },
    {
      path: "/about",
      component: About
    },
    {
      path: "/works",
      component: Works,
      children: [
        {
          path: ":id"
        }
      ]
    }
  ]
});

export default router;
