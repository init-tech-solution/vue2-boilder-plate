import Vue from "vue";
import Router from "vue-router";

import Home from "./pages/Home.vue";
import Blog from "./pages/Blog.vue";
import About from "./pages/About.vue";
import Mercedes from "./pages/Mercedes.vue";

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
      path: "/blog",
      name: "p-blog",
      component: Blog
    },
    {
      path: "/about",
      name: "p-about",
      component: About
    },
    {
      path: "/mercedes",
      name: "p-mercedes",
      component: Mercedes
    }
  ]
});

export default routes;
