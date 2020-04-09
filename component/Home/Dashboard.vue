<template>
  <div class="dashboard">
    <ArticleList label="All" :articles="articles" />
    <ArticleList label="Newest" :articles="articles" />
    <ArticleList label="Most Viewed" :articles="articles" />
  </div>
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
