import Vue from "vue";
import App from "./App.vue";
import router from "./router.js";
import VueLazyload from "vue-lazyload";
import VueAnalytics from "vue-analytics";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

Vue.use(VueLazyload, {
  preLoad: 1.3,
  attempt: 1
});

Vue.use(VueAnalytics, {
  id: "171648104",
  router
});
