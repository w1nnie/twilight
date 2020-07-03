import Vue from "vue";
import Router from "vue-router";

import Top from "@/components/Top.vue";
import About from "@/components/About.vue";
import Works from "@/components/Works.vue";
import WorksItemModal from "@/components/works/WorksItemModal.vue";
// import Games from "@/components/works/Games.vue";
// import Music from "@/components/works/Music.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
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
          path: ":id",
          component: WorksItemModal
        }
      ]
    }
  ]
});

export default router;
