import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../views/MainPage.vue';
import SignupPage from '../views/SignupPage.vue';

const routes = [
  {
    path: '/',
    name: 'Main',
    component: MainPage
  },
  {
    path: '/signup',
    name: 'Signup',
    component: SignupPage
  }
];

export default createRouter({
  history: createWebHistory(),
  routes
});