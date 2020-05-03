<template>
  <Container>
    <header>
      <Title :label="category.name" />
    </header>
    <ArticleList :articles="articles" />
  </Container>
</template>

<script>
import Title from './common/Title'
import Container from './common/Container'
import ArticleList from './common/ArticleList'

export default {
  name: 'CategoryArticleList',
  props: {
    category: { type: Object, required: true },
    articles: { type: Array, required: true }
  },
  components: {
    Title,
    Container,
    ArticleList
  }
}
</script>
