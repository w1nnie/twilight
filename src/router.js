import Vue from "vue";
import Router from "vue-router";

import Top from "@/components/Top.vue";
import About from "@/components/About.vue";
import Works from "@/components/Works.vue";
import GraphicsModal from "@/components/works/GraphicsModal.vue";
import Profile from "@/components/about/Profile.vue";
import Skill from "@/components/about/Skill.vue";
import Study from "@/components/about/Study.vue";
import Contact from "@/components/about/Contact.vue";

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
          path: "skill",
          component: Skill
        },
        {
          path: "study",
          component: Study
        },
        {
          path: "contact",
          component: Contact
        }
      ]
    },
    {
      path: "/",
      component: Works,
      children: [
        {
          path: ":id",
          component: GraphicsModal
        }
      ]
    }
  ]
});

export default router;
