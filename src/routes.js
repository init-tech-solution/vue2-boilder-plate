import Vue from "vue";
import Router from "vue-router";

import Home from "./pages/Home.vue";
import About from "./pages/About.vue";

Vue.use(Router);

const routes = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "p-home",
      component: Home
    },
    {
      path: "/about",
      name: "p-about",
      component: About
    },
  ]
});

export default routes;
