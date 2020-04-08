<template>
  <fragment>
    <ArticleList :articles="articles" />
    <ArticleList :articles="articles" />
    <ArticleList :articles="articles" />
  </fragment>
</template>

<script>
import ArticleList from './ArticleList'

export default {
  name: 'Dashboard',
  components: {
    ArticleList
  },
  props: {
    articles: { type: Array, required: true }
  }
}
</script>
