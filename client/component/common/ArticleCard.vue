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

import { SEARCH_PAGE_VISIBILITY } from '@config/constant'

export default {
  name: 'common-article-card',
  props: {
    article: { type: Object, required: true }
  },
  components: {
    Button,
    ArticleDetails
  },
  methods: {
    redirectToArticle() {
      window.dispatchEvent(
        new StorageEvent('storage', {
          key: SEARCH_PAGE_VISIBILITY,
          newValue: false
        })
      )

      this.$router.push(`/article/${this.article.articleId}`)
      this.$router.go()
    }
  }
}
</script>
