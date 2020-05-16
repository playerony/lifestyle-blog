import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@page/Home'
import Article from '@page/Article'
import ErrorPage from '@page/Error'
import CategoryArticleList from '@page/CategoryArticleList'

import routeList from '@config/routeList'

Vue.use(VueRouter)

const verifyNumberParamBeforeEnter = key => ({
  beforeEnter(to, from, next) {
    if (isNaN(Number(to.params[key]))) {
      next('/error/404')
    } else {
      next()
    }
  }
})

const router = new VueRouter({
  mode: 'history',
  scrollBehavior() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 })
      }, 500)
    })
  },
  routes: [
    {
      component: Home,
      path: routeList.base
    },
    {
      component: Article,
      path: routeList.article,
      ...verifyNumberParamBeforeEnter('articleId')
    },
    {
      path: routeList.articles,
      component: CategoryArticleList,
      ...verifyNumberParamBeforeEnter('categoryId')
    },
    {
      component: ErrorPage,
      path: routeList.error,
      ...verifyNumberParamBeforeEnter('code')
    },
    {
      path: '*',
      redirect: '/error/404'
    }
  ]
})

export default router
