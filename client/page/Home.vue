<template>
  <div>
    <LoadingPage v-if="$apollo.queries.articleList.loading" />
    <Home
      :articles="articleList"
      v-if="!$apollo.queries.articleList.loading"
    />
    <HelloWorld />
  </div>
</template>

<script>
import Home from '@component/Home'
import LoadingPage from './Loading'
import HelloWorld from '@component/HelloWorld'

import { ARTICLE_LIST_QUERY } from '@graphql/query/articleList'

export default {
  name: 'HomePage',
  components: {
    Home,
    HelloWorld,
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
