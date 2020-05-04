<template>
  <div>
    <LoadingPage v-if="isLoading()" />
    <CategoryArticleList
      v-if="!isLoading()"
      :articles="getArticleList()"
      :category="getCategoryDetails()"
    />
  </div>
</template>

<script>
import LoadingPage from './Loading'
import CategoryArticleList from '@component/CategoryArticleList'

import articleListQuery from '@graphql/query/articleList'
import categoryListQuery from '@graphql/query/categoryList'
import metricCommentList from '@graphql/query/metricCommentList'
import categoryVisitorListQuery from '@graphql/query/categoryVisitorList'

import articleListTransformator from '@transformator/articleListTransformator'

export default {
  name: 'page-article-list',
  data() {
    return {
      articleList: [],
      visitorListByCategoryId: [],
      commentList: [],
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
    categoryList: categoryListQuery,
    commentList: metricCommentList,
    visitorListByCategoryId: {
      ...categoryVisitorListQuery,
      variables() {
        return {
          categoryId: this.categoryId
        }
      }
    }
  },
  methods: {
    isLoading() {
      return (
        this.$apollo.queries.articleList.loading ||
        this.$apollo.queries.commentList.loading ||
        this.$apollo.queries.categoryList.loading ||
        this.$apollo.queries.visitorListByCategoryId.loading
      )
    },
    getCategoryDetails() {
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
        this.visitorListByCategoryId,
        this.commentList
      )
    }
  }
}
</script>
