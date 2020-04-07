<template>
  <div>
    <Billboard :article="getLastArticle()" />
  </div>
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
      return this.articles[2]
    }
  },
  props: {
    articles: { type: Array, required: true }
  }
}
</script>