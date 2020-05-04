<template>
  <div>
    <LoadingPage v-if="isLoading()" />
    <CategoryArticleList
      v-if="!isLoading()"
      :category="getCategory()"
      :articles="getArticleList()"
    />
  </div>
</template>

<script>
import LoadingPage from './Loading'
import CategoryArticleList from '@component/CategoryArticleList'

import articleListQuery from '@graphql/query/articleList'
import visitorListQuery from '@graphql/query/visitorList'
import categoryListQuery from '@graphql/query/categoryList'

import articleListTransformator from '@transformator/articleListTransformator'

export default {
  name: 'page-article-list',
  data() {
    return {
      articleList: [],
      visitorList: [],
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
    visitorList: visitorListQuery,
    categoryList: categoryListQuery
  },
  methods: {
    isLoading() {
      return (
        this.$apollo.queries.articleList.loading ||
        this.$apollo.queries.visitorList.loading ||
        this.$apollo.queries.categoryList.loading
      )
    },
    getCategory() {
      return this.categoryList.find(
        category => category.categoryId === this.categoryId
      )
    },
    getArticleList() {
      const categoryArticles = this.articleList.filter(article =>
        article.categoryList.find(
          element => element.categoryId === this.categoryId
        )
      )

      return articleListTransformator(
        categoryArticles,
        this.visitorList,
        this.commentList
      )
    }
  }
}
</script>
