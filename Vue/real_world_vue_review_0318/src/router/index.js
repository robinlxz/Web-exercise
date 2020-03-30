import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import TestCard from "../views/TestCard"
import TodoList from "../views/TodoList"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/testcard",
    name: "TestCard",
    component: TestCard
  },
  {
    path: "/todolist",
    name: "TodoList",
    component: TodoList
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
