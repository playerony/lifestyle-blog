<template>
  <fragment>
    <Billboard :article="getLastArticle()" />
    <Container>
      <PinnedArticlesSwiper :articles="articles" />
      <Claim />
      <ArticleList :articles="getArticleList()" />
    </Container>
  </fragment>
</template>

<script>
import Claim from './Claim'
import Billboard from './Billboard'
import Container from '../common/Container'
import ArticleList from '../common/ArticleList'
import PinnedArticlesSwiper from './PinnedArticlesSwiper'

import { PINNED_CATEGORY_ID } from '@config/constant'

export default {
  name: 'home',
  props: {
    articles: { type: Array, required: true }
  },
  components: {
    Claim,
    Billboard,
    Container,
    ArticleList,
    PinnedArticlesSwiper
  },
  methods: {
    getLastArticle() {
      return this.articles.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      )[0]
    },
    getArticleList() {
      return this.articles.filter(
        article =>
          !article.categoryList.find(
            category => category.categoryId === PINNED_CATEGORY_ID
          )
      )
    }
  }
}
</script>
