import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import MainContent from "@/components/Pages/MainContent.vue";
import ComponentList from "@/components/Pages/ComponentList.vue";

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'MainContent',
    component: MainContent,
  },
  {
    path: '/component_list',
    name: 'componentList',
    component: ComponentList
  }

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
