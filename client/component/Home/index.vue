<template>
  <fragment>
    <Billboard :article="getLastArticle()" />
  </fragment>
</template>

<script>
import Billboard from './Billboard'

export default {
  name: 'Home',
  components: {
    Billboard
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
