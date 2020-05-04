import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@page/Home'
import Article from '@page/Article'
import ArticleList from '@page/ArticleList'

import scrollToTop from '@utility/scrollToTop'

import routeList from '@config/routeList'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      component: Home,
      path: routeList.base
    },
    {
      component: Article,
      path: routeList.article
    },
    {
      component: ArticleList,
      path: routeList.articles
    }
  ]
})

router.beforeEach(function(to, from, next) {
  scrollToTop()

  next()
})

export default router
