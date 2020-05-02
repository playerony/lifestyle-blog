import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@page/Home'
import Article from '@page/Article'
import ArticleList from '@page/ArticleList'

import routeList from '@config/routeList'

Vue.use(VueRouter)

export default new VueRouter({
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
  ],
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})
