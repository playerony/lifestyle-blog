<template>
  <div>
    <Hero :article="getLastArticle()" />
  </div>
</template>

<script>
import Hero from './Hero'

export default {
  name: 'Home',
  components: {
    Hero
  },
  methods: {
    getLastArticle() {
      return this.articles[0]
    }
  },
  props: {
    articles: { type: Array, required: true }
  }
}
</script>