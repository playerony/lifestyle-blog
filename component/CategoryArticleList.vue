<template>
  <Container>
    <header>
      <h1>{{ category.name }}</h1>
    </header>
    <ArticleList :articles="articles" />
  </Container>
</template>

<script>
import Container from './common/Container'
import ArticleList from './common/ArticleList'

export default {
  name: 'CategoryArticleList',
  props: {
    category: { type: Object, required: true },
    articles: { type: Array, required: true }
  },
  components: {
    Container,
    ArticleList
  }
}
</script>
