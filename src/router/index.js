import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "@/components/HomePage";
import SignIn from "@/views/SignIn";
import SignUp from "@/views/SignUp";
import Auth from "@/views/Auth";
import Menu from "@/views/Menu";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage
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
    path: "/SignIn",
    name: "SignIn",
    component: SignIn
  },
  {
    path: "/SignUp",
    name: "SignUp",
    component: SignUp
  },
  {
    path: "/SignIn/auth",
    name: "password",
    component: Auth
  },
  {
    path: "/menu",
    name: "menu",
    component: Menu
  }
];

const router = new VueRouter({
  routes
});

export default router;
