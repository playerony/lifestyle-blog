<template>
  <article class="article-card">
    <div class="article-card__border" />
    <ArticleDetails
      :article="article"
      :displayLikes="false"
      class="article-card__content"
    />
    <div class="article-card__hover" :src="article.image.photoUrl">
      <img :src="article.image.photoUrl" />
      <Button :onClick="redirectToArticle" className="hover__button">
        Czytaj
      </Button>
    </div>
  </article>
</template>

<script>
import Button from '../generic/Button'
import ArticleDetails from './ArticleDetails'

import routeList from '@config/routeList'
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

      this.$router.push(`${routeList.article.base}/${this.article.articleId}`)
    }
  }
}
</script>
