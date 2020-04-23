<template>
  <fragment>
    <Billboard :article="getLastArticle()" />
    <Container>
      <PinnedArticlesSwiper :articles="articles" />
      <Claim />
      <ArticleList :articles="articles" />
    </Container>
  </fragment>
</template>

<script>
import Claim from './Claim'
import Billboard from './Billboard'
import Container from '../common/Container'
import ArticleList from '../common/ArticleList'
import PinnedArticlesSwiper from './PinnedArticlesSwiper'

export default {
  name: 'Home',
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
    }
  },
  props: {
    articles: { type: Array, required: true }
  }
}
</script>
