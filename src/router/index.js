import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'

const Components = (resolve) => {
  require.ensure(['@/components/components/Components.vue'], () => {
    resolve(require('@/components/components/Components.vue'))
  }, 'Route-components')
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'RouteHome',
      component: Home
    },
    {
      path: '/components',
      name: 'RouteComponents',
      component: Components
    }
  ],
  mode: 'history'
})
