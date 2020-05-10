import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@page/Home'
import Article from '@page/Article'
import ErrorPage from '@page/Error'
import ArticleList from '@page/ArticleList'

import scrollToTop from '@utility/scrollToTop'

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
      component: ArticleList,
      path: routeList.articles,
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

router.beforeEach(function(to, from, next) {
  scrollToTop()

  setTimeout(() => {
    scrollToTop('auto')
  }, 250)

  next()
})

export default router
