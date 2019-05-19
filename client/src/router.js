import Vue from 'vue';
import Router from 'vue-router';
import StartPage from "@/components/StartPage";
import NewsDetails from "@/components/NewsDetails";

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'start',
      component: StartPage,
    },
    {
      path: '/page/:id',
      name: 'details',
      props: true,
      component: NewsDetails
    },
  ],
});
