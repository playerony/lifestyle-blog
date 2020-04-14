<template>
  <fragment>
    <LoadingPage v-if="isLoading()" />
    <Article
      v-if="!isLoading()"
      :article="articleById"
      :handleReply="handleReply"
      :comments="commentListByArticleId"
    />
  </fragment>
</template>

<script>
import LoadingPage from './Loading'
import Article from '@component/Article'

import articleQuery from '@graphql/query/article'
import commentListQuery from '@graphql/query/commentList'

export default {
  name: 'ArticlePage',
  components: {
    Article,
    LoadingPage
  },
  data() {
    return {
      articleById: {},
      commentListByArticleId: [],
      routeParams: this.$route.params
    }
  },
  methods: {
    isLoading() {
      return (
        this.$apollo.queries.articleById.loading ||
        this.$apollo.queries.commentListByArticleId.loading
      )
    },
    handleReply(reply) {
      console.warn(reply)
    }
  },
  apollo: {
    articleById: {
      ...articleQuery,
      variables() {
        return {
          articleId: Number(this.routeParams.articleId)
        }
      }
    },
    commentListByArticleId: {
      ...commentListQuery,
      variables() {
        return {
          articleId: Number(this.routeParams.articleId)
        }
      }
    }
  }
}
</script>
