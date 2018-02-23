import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'

const Projects = (resolve) => {
  require.ensure(['@/components/projects/Projects.vue'], () => {
    resolve(require('@/components/projects/Projects.vue'))
  }, 'Route-projects')
}

const Blog = (resolve) => {
  require.ensure(['@/components/blog/Blog.vue'], () => {
    resolve(require('@/components/blog/Blog.vue'))
  }, 'Route-blog')
}

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
      path: '/projects',
      name: 'RouteProjects',
      component: Projects
    },
    {
      path: '/blog',
      name: 'RouteBlog',
      component: Blog
    },
    {
      path: '/components',
      name: 'RouteComponents',
      component: Components
    }
  ],
  mode: 'history'
})
