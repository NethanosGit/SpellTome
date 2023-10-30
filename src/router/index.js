import { createRouter, createWebHistory } from "vue-router";
import SpellsPage from "../components/SpellsPage.vue";
const routes = [
  {
    path: "/",
    component: SpellsPage,
  },
  {
    path: "/SpellTome",
    redirect: "/",
    component: SpellsPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
