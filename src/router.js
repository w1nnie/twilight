import Vue from "vue";
import Router from "vue-router";
import Top from "@/components/Top.vue";
import About from "@/components/About.vue";
import Works from "@/components/Works.vue";

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
      path: "/gallery",
      component: Works
    }
  ]
});

export default router;
