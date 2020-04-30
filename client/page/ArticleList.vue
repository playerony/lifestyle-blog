<template>
  <fragment>
    <LoadingPage v-if="isLoading()" />
    <CategoryArticleList
      v-if="!isLoading()"
      :category="getCategory()"
      :articles="getArticleList()"
    />
  </fragment>
</template>

<script>
import LoadingPage from './Loading'
import CategoryArticleList from '@component/CategoryArticleList'

import articleListQuery from '@graphql/query/articleList'
import categoryListQuery from '@graphql/query/categoryList'

export default {
  name: 'ArticleListPage',
  data() {
    return {
      articleList: [],
      categoryList: [],
      categoryId: Number(this.$route.params.categoryId)
    }
  },
  components: {
    LoadingPage,
    CategoryArticleList
  },
  apollo: {
    articleList: articleListQuery,
    categoryList: categoryListQuery
  },
  methods: {
    isLoading() {
      return (
        this.$apollo.queries.articleList.loading ||
        this.$apollo.queries.categoryList.loading
      )
    },
    getCategory() {
      return this.categoryList.find(
        category => category.categoryId === this.categoryId
      )
    },
    getArticleList() {
      return this.articleList.filter(article =>
        article.categoryList.find(
          element => element.categoryId === this.categoryId
        )
      )
    }
  }
}
</script>
