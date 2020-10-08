import Vue from "vue";
import Router from "vue-router";

import Top from "@/components/Top.vue";
import About from "@/components/About.vue";
import Works from "@/components/Works.vue";
import Profile from "@/components/about/Profile.vue";
import Skills from "@/components/about/Skills.vue";
import Study from "@/components/about/Study.vue";

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
      component: About,
      children: [
        {
          path: "profile",
          component: Profile
        },
        {
          path: "skills",
          component: Skills
        },
        {
          path: "study",
          component: Study
        }
      ]
    },
    {
      path: "/gallery",
      component: Works
    }
  ]
});

export default router;
