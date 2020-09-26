<template>
  <div class="billboard">
    <section class="billboard__content">
      <ArticleDetails :article="article" />
      <Button :onClick="redirectToArticle" className="content__button">
        Czytaj
      </Button>
    </section>
    <img class="billboard__image" :src="article.image.photoUrl" />
  </div>
</template>

<script>
import Button from '../generic/Button'
import ArticleDetails from '../common/ArticleDetails'

import routeList from '@config/routeList'

export default {
  name: 'home-billboard',
  props: {
    article: { type: Object, required: true }
  },
  components: {
    Button,
    ArticleDetails
  },
  methods: {
    redirectToArticle() {
      this.$router.push(`${routeList.article.base}/${this.article.articleId}`)
    }
  }
}
</script>
