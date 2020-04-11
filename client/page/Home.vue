<template>
  <fragment>
    <LoadingPage v-if="isLoading()" />
    <Home
      v-if="!isLoading()"
      :articles="articleList"
      :visitors="visitorList"
    />
  </fragment>
</template>

<script>
import Home from '@component/Home'
import LoadingPage from './Loading'

import { ARTICLE_LIST_QUERY } from '@graphql/query/articleList'
import { VISITOR_LIST_QUERY } from '@graphql/query/visitorList'

export default {
  name: 'HomePage',
  components: {
    Home,
    LoadingPage
  },
  methods: {
    isLoading() {
      return this.$apollo.queries.articleList.loading || this.$apollo.queries.visitorList.loading
    }
  },
  data () {
    return {
      articleList: [],
      visitorList: []
    }
  },
  apollo: {
    articleList: {
      query: ARTICLE_LIST_QUERY,
      loadingKey: 'articleListLoading'
    },
    visitorList: {
      query: VISITOR_LIST_QUERY,
      loadingKey: 'visitorListLoading'
    }
  }
}
</script>
