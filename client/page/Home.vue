<template>
  <Container>
    <Loader />
  </Container>
</template>

<script>
import Loader from '@component/common/Loader'
import Container from '@component/common/Container'

import { ARTICLE_LIST_QUERY } from '@graphql/query/articleList'

export default {
  name: 'Home',
  components: {
    Loader,
    Container
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
