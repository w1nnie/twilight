import Vue from "vue";
import Router from "vue-router";

import Top from "@/components/Top.vue";
import About from "@/components/About.vue";
import Works from "@/components/Works.vue";
import GraphicsModal from "@/components/works/GraphicsModal.vue";
import Graphics from "@/components/works/Graphics.vue";
import Tools from "@/components/works/Tools.vue";
import Games from "@/components/works/Games.vue";

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
          path: "graphics",
          component: Graphics,
          children: [
            {
              path: ":id",
              component: GraphicsModal
            }
          ]
        },
        {
          path: "tools",
          component: Tools
        },
        {
          path: "games",
          component: Games
        }
      ]
    }
  ]
});

export default router;
