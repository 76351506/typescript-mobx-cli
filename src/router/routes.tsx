import { lazy } from 'react';
const Home = lazy(() => import('@/containers/home'));
const Login = lazy(() => import('@/containers/login'));

export default [
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
];
