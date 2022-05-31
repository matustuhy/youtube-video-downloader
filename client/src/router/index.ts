import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import DownloadView from "../views/DownloadView.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: DownloadView,
    meta: {
      title: "Suxino YT video download",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta?.title ?? "";
  next();
});

export default router;
