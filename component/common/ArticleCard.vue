<template>
  <article class="article-card">
    <div class="article-card__border" />
    <ArticleDetails :article="article" class="article-card__content" />
    <div class="article-card__hover" :src="article.image.photoUrl">
      <img :src="article.image.photoUrl" />
      <Button :onClick="redirectToArticle" className="hover__button">
        Read now
      </Button>
    </div>
  </article>
</template>

<script>
import Button from '../generic/Button'
import ArticleDetails from './ArticleDetails'

export default {
  name: 'common-article-card',
  components: {
    Button,
    ArticleDetails
  },
  props: {
    article: { type: Object, required: true }
  },
  methods: {
    redirectToArticle() {
      this.$router.push(`/article/${this.article.articleId}`)
    }
  }
}
</script>
