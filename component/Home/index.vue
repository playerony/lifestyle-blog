<template>
  <fragment>
    <Billboard :article="getLastArticle()" />
    <Container>
      <PinnedArticlesSwiper :articles="articles" />
    </Container>
  </fragment>
</template>

<script>
import Billboard from './Billboard'
import Container from '../common/Container'
import PinnedArticlesSwiper from './PinnedArticlesSwiper'

export default {
  name: 'Home',
  components: {
    Billboard,
    Container,
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
