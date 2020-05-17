import Vue from "vue";
import Router from "vue-router";

import Home from "./Home.vue";
import Blog from "./Blog.vue";
import About from "./About.vue";
import Mercedes from "./Mercedes.vue";

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
