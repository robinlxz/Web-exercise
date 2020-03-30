import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import TodoList from "../views/TodoList.vue";
import SingCafe from "../views/SingCafe.vue";

// import Review from "../views/Review.vue";

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
    path: "/todolist",
    name: "TodoList",
    component: TodoList
  },
  {
    path: "/singcafe",
    name: "SingCafe",
    component: SingCafe
  }
  // {
  //   path: '/review',
  //   name: 'Review',
  //   component: Review
  // }
];

const router = new VueRouter({
  routes
});

export default router;
