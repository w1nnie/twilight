import Vue from "vue";
import Router from "vue-router";

import Top from "@/components/Top.vue";
import About from "@/components/About.vue";
//import Members from "./components/Members";

// router を使うという宣言
Vue.use(Router);

// routing の設定をする
const router = new Router({
  mode: "history",
  // どのパスの時に
  // どのコンポーネントを表示するか
  routes: [
    {
      path: "/",
      name: "Top",
      component: Top
    },
    {
      path: "/about",
      name: "About",
      component: About
    }
  ]
});

export default router;
