<template>
  <div>
    <LoadingPage v-if="isLoading()" />
    <Home v-if="!isLoading()" :articles="getArticleList()" />
    <VueHeadful title="The Blog of Author Paweł Wojtasiński" />
  </div>
</template>

<script>
import VueHeadful from 'vue-headful'

import Home from '@component/Home'
import LoadingPage from './Loading'

import articleListQuery from '@graphql/query/articleList'
import visitorListQuery from '@graphql/query/visitorList'
import metricCommentList from '@graphql/query/metricCommentList'

import articleListTransformator from '@transformator/articleListTransformator'

export default {
  name: 'page-home',
  data() {
    return {
      articleList: [],
      visitorList: [],
      commentList: []
    }
  },
  components: {
    Home,
    VueHeadful,
    LoadingPage
  },
  apollo: {
    articleList: articleListQuery,
    visitorList: visitorListQuery,
    commentList: metricCommentList
  },
  methods: {
    isLoading() {
      return (
        this.$apollo.queries.articleList.loading ||
        this.$apollo.queries.visitorList.loading ||
        this.$apollo.queries.commentList.loading
      )
    },
    getArticleList() {
      return articleListTransformator(
        this.articleList,
        this.visitorList,
        this.commentList
      )
    }
  }
}
</script>
