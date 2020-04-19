<template>
  <fragment>
    <LoadingPage v-if="isLoading()" />
    <Home v-if="!isLoading()" :articles="getArticleList()" />
  </fragment>
</template>

<script>
import Home from '@component/Home'
import LoadingPage from './Loading'

import articleListQuery from '@graphql/query/articleList'
import visitorListQuery from '@graphql/query/visitorList'
import metricCommentList from '@graphql/query/metricCommentList'

import articleListTransformator from '@transformator/articleListTransformator'

export default {
  name: 'HomePage',
  components: {
    Home,
    LoadingPage
  },
  data() {
    return {
      articleList: [],
      visitorList: [],
      commentList: []
    }
  },
  apollo: {
    articleList: articleListQuery,
    visitorList: visitorListQuery,
    commentList: metricCommentList,
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
      return articleListTransformator(this.articleList, this.visitorList)
    }
  }
}
</script>
