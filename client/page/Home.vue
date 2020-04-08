<template>
  <fragment>
    <LoadingPage v-if="$apollo.queries.articleList.loading" />
    <Home
      :articles="articleList"
      v-if="!$apollo.queries.articleList.loading"
    />
  </fragment>
</template>

<script>
import Home from '@component/Home'
import LoadingPage from './Loading'

import { ARTICLE_LIST_QUERY } from '@graphql/query/articleList'

export default {
  name: 'HomePage',
  components: {
    Home,
    LoadingPage
  },
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
