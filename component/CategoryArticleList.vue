<template>
  <Container>
    <div class="category-article-list">
      <header class="category-article-list__header">
        <DynamicIcon
          class="category-article-list__icon"
          :icon="category.name.toLowerCase()"
        />
        <Title :label="category.name" />
      </header>
      <ArticleList :articles="articles" />
    </div>
  </Container>
</template>

<script>
import Title from './common/Title'
import Container from './common/Container'
import ArticleList from './common/ArticleList'
import DynamicIcon from './common/DynamicIcon'

export default {
  name: 'category-article-list',
  props: {
    articles: { type: Array, required: true },
    category: { type: Object, required: true }
  },
  components: {
    Title,
    Container,
    ArticleList,
    DynamicIcon
  }
}
</script>
