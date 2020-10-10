import Vue from "vue";
import App from "./App.vue";
import router from "./router.js";
import VueLazyload from "vue-lazyload";
import VuePrlx from "vue-prlx";
import VueAnalytics from "vue-analytics";

Vue.config.productionTip = false;

Vue.use(VuePrlx);

Vue.use(VueLazyload, {
  preLoad: 1.3,
  attempt: 2,
  observer: true
});

Vue.use(VueAnalytics, {
  id: "UA-171648104-1",
  router
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
