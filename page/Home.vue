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

import articleListQuery from '@graphql/query/articleList'
import visitorListQuery from '@graphql/query/visitorList'

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
    articleList: articleListQuery,
    visitorList: visitorListQuery
  }
}
</script>
