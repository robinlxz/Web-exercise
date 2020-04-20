import Vue from 'vue';
import VueRouter from 'vue-router';
import EventList from '../views/EventList';
import EventShow from '../views/EventShow';
import EventCreate from '../views/EventCreate';
import User from '@/views/User.vue';
import NotFoundComponent from '@/components/NotFoundComponent.vue';
import BaseIcon from '@/components/BaseIcon.vue';
Vue.component('BaseIcon', BaseIcon);
import SlotTest from '@/components/SlotTest.vue';
Vue.component('SlotTest', SlotTest);

Vue.use(VueRouter);
const routes = [
  {
    path: '/',
    name: 'event-list',
    component: EventList
  },
  {
    path: '/event/:id',
    name: 'event-show',
    component: EventShow,
    props: true
  },
  {
    path: '/event/create',
    name: 'event-create',
    component: EventCreate
  },
  {
    path: '/user/:username',
    name: 'user',
    component: User,
    props: true
  },
  { path: '*', component: NotFoundComponent }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
