import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import CongressPage from '@/components/CongressPage'
import AchievementPage from '@/components/AchievementPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: MainPage
    },
    {
      path: '/congress',
      name: 'Congress',
      component: CongressPage
    },
    {
      path: '/achievements',
      name: 'Achievement',
      component: AchievementPage
    }
  ]
})
