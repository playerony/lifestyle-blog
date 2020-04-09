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
      return this.articles[1]
    }
  },
  props: {
    articles: { type: Array, required: true }
  }
}
</script>