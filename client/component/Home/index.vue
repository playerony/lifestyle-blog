<template>
  <fragment>
    <Billboard :article="getLastArticle()" />
    <Container>
      <Dashboard :articles="articles" />
    </Container>
  </fragment>
</template>

<script>
import Billboard from './Billboard'
import Dashboard from './Dashboard'
import Container from '../common/Container'

export default {
  name: 'Home',
  components: {
    Billboard,
    Dashboard,
    Container
  },
  methods: {
    getLastArticle() {
      console.warn(this.articles)

      return this.articles[0]
    }
  },
  props: {
    articles: { type: Array, required: true }
  }
}
</script>
