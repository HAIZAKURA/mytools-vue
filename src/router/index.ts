import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      title: 'HAIZAKURA Lab',
    },
  },
  {
    path: '/rate',
    name: 'Rate',
    component: () => import('../views/Rate.vue'),
    meta: {
      title: '💰 Exchange Rate Query - HAIZAKURA Lab',
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _from, next) => {
  // Set the document title
  document.title = (to.meta.title as string | undefined) ?? 'HAIZAKURA Lab';
  next();
});

export default router;
