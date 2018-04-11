import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import About from '@/views/About';
import One from '@/views/PortfolioOne';
import Two from '@/views/PortfolioTwo';
import Three from '@/views/PortfolioThree';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/portfolio/one',
      name: 'one',
      component: One,
    },
    {
      path: '/portfolio/two',
      name: 'two',
      component: Two,
    },
    {
      path: '/portfolio/three',
      name: 'three',
      component: Three,
    },
  ],
});
