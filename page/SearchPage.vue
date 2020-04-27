<template>
  <transition name="search-page" appear>
    <div class="search-container">
      <Container>
        <ArticleList v-if="!isLoading()" :articles="getArticleList()" />
      </Container>
    </div>
  </transition>
</template>

<script>
import Container from '@component/common/Container'
import ArticleList from '@component/common/ArticleList'

import articleListQuery from '@graphql/query/articleList'
import visitorListQuery from '@graphql/query/visitorList'
import metricCommentList from '@graphql/query/metricCommentList'

import articleListTransformator from '@transformator/articleListTransformator'

export default {
  name: 'SearchTemplate',
  components: {
    Container,
    ArticleList
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
