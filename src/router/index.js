import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView";
import LoginView from "@/views/LoginView";
import RegnView from "@/views/RegView";
import AllView from "@/views/AllView";
import UserView from "@/views/UserView";

const routes = [
  {
    name: "homeview",
    path: "/",
    component: HomeView,
  },
  {
    name: "loginview",
    path: "/login",
    component: LoginView,
  },
  {
    name: "regnview",
    path: "/regester",
    component: RegnView,
  },
  {
    name: "allview",
    path: "/users",
    component: AllView,
  },
  {
    name: "userview",
    path: "/user/:id",
    component: UserView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
