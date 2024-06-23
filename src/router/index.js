import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";
import BlogView from "../views/Blog.vue";
import LoginView from "../views/Login.vue";
import GalleryView from "../views/Gallery.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/blog",
      name: "blog",
      component: BlogView
    },
    {
      path: "/gallery",
      name: "gallery",
      component: GalleryView
    },
    {
      path: "/login",
      name: "login",
      component: LoginView
    }
  ]
});

export default router;
