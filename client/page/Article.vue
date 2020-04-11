<template>
  <fragment>
    Article
  </fragment>
</template>

<script>
import articleQuery from '@graphql/query/article'

export default {
  name: 'ArticlePage',
  data () {
    return {
      articleById: {},
      routeParams: this.$route.params
    }
  },
  apollo: {
    articleById: {
      ...articleQuery,
      variables () {
        return {
          articleId: Number(this.routeParams.articleId)
        }
      }
    }
  }
}
</script>
