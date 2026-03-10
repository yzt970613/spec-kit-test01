import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import InteractionTemplateView from '../views/InteractionTemplateView.vue';
import ListTemplateView from '../views/ListTemplateView.vue';
import SpeckitRecordView from '../views/SpeckitRecordView.vue';
import TemplateHubView from '../views/TemplateHubView.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'template-hub',
    component: TemplateHubView,
    meta: {
      title: '组件模板中心'
    }
  },
  {
    path: '/templates/list',
    name: 'template-list',
    component: ListTemplateView,
    meta: {
      title: '列表组件模板'
    }
  },
  {
    path: '/templates/interaction',
    name: 'template-interaction',
    component: InteractionTemplateView,
    meta: {
      title: '按钮与确认框模板'
    }
  },
  {
    path: '/templates/speckit-record',
    name: 'template-speckit-record',
    component: SpeckitRecordView,
    meta: {
      title: 'Speckit 生成记录'
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  }
});

router.afterEach((to) => {
  if (typeof document !== 'undefined') {
    document.title = String(to.meta.title ?? '组件模板中心');
  }
});

export default router;

