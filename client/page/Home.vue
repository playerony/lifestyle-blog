<template>
  <h1>Home</h1>
</template>

<script>
import { ARTICLE_LIST_QUERY } from '@graphql/query/articleList'

export default {
    name: 'Users',
    data () {
      return {
        articleList: []
      }
    },
    apollo: {
      articleList: {
        query: ARTICLE_LIST_QUERY
      }
    }
}
</script>
