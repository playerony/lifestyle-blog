<template>
  <fragment>
    <ArticleList label="All" :articles="articles" />
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
