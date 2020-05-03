<template>
  <div class="billboard">
    <div class="billboard__border" />
    <section class="billboard__content">
      <ArticleDetails :article="article" />
      <Button :onClick="redirectToArticle" className="content__button">
        Read now
      </Button>
    </section>
    <img class="billboard__image" :src="article.image.photoUrl" />
  </div>
</template>

<script>
import Button from '../generic/Button'
import ArticleDetails from '../common/ArticleDetails'

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
      this.$router.push(`/article/${this.article.articleId}`)
    }
  }
}
</script>
