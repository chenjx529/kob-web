const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/pk',
  },
  {
    path: '/pk',
    name: 'pk_index',
    component: () => import('@/views/pk/PkIndexView.vue'),
  },
  {
    path: '/record',
    name: 'record_index',
    component: () => import('@/views/record/RecordIndexView.vue')
  },
  {
    path: '/ranklist',
    name: 'ranklist_index',
    component: () => import('@/views/ranklist/RanklistIndexView.vue'),
  },
  {
    path: '/user/bot',
    name: 'user_bot_index',
    component: () => import('@/views/user/bot/UserBotIndexView.vue'),
  },
  {
    path: '/user/account/login',
    name: 'user_account_login',
    component: () => import('@/views/user/account/UserAccountLoginView.vue'),
  },
  {
    path: '/user/account/register',
    name: 'user_account_register',
    component: () => import('@/views/user/account/UserAccountRegisterView.vue'),
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("@/views/error/NotFound.vue"),
  },
];

export default routes;
