<template>
  <transition name="search-page" :appear="true">
    <div class="search-page">
      <Container>
        <header class="search-page__header">
          <SearchSVG class="header__search-icon" />
          <input
            v-model="searchValue"
            class="header__input"
            placeholder="Start typing..."
          />
          <CloseSVG @click="onClose" class="header__close-icon" />
        </header>
        <ArticleList
          v-if="!isLoading()"
          :displayPagination="false"
          :articles="getArticleList()"
          class="search-page__article-list"
        />
      </Container>
    </div>
  </transition>
</template>

<script>
import Container from '@component/common/Container'
import ArticleList from '@component/common/ArticleList'

import articleListQuery from '@graphql/query/articleList'
import visitorListQuery from '@graphql/query/visitorList'
import metricCommentList from '@graphql/query/metricCommentList'

import articleListTransformator from '@transformator/articleListTransformator'

import includesString from '@utility/includesString'

import { SEARCH_PAGE_RESULTS } from '@config/constant'

import CloseSVG from '@asset/svg/close.svg'
import SearchSVG from '@asset/svg/search.svg'

export default {
  name: 'page-search',
  props: {
    onClose: { type: Function, required: true }
  },
  data() {
    return {
      searchValue: '',
      articleList: [],
      visitorList: [],
      commentList: [],
      articleId: null
    }
  },
  components: {
    CloseSVG,
    SearchSVG,
    Container,
    ArticleList
  },
  mounted() {
    const routeParams = this.$route.params
    document.body.classList.add('overflow')

    if (Object.keys(routeParams).length) {
      this.articleId = Number(routeParams.articleId)
    }
  },
  beforeDestroy() {
    document.body.classList.remove('overflow')
  },
  apollo: {
    articleList: articleListQuery,
    visitorList: visitorListQuery,
    commentList: metricCommentList
  },
  methods: {
    isLoading() {
      return (
        this.$apollo.queries.articleList.loading ||
        this.$apollo.queries.visitorList.loading ||
        this.$apollo.queries.commentList.loading
      )
    },
    getArticleList() {
      const transformedArticleList = articleListTransformator(
        this.articleList,
        this.visitorList,
        this.commentList
      )

      if (this.searchValue === '') {
        return []
      }

      return transformedArticleList
        .filter(
          article =>
            (includesString(article.title, this.searchValue) ||
              includesString(article.description, this.searchValue)) &&
            article.articleId !== this.articleId
        )
        .slice(0, SEARCH_PAGE_RESULTS)
    }
  }
}
</script>
