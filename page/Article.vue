<template>
  <fragment>
    <LoadingPage v-if="$apollo.queries.articleById.loading" />
    <Article
      v-if="!$apollo.queries.articleById.loading"
      :article="articleById"
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
    isLoading() {}
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
