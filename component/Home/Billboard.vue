<template>
  <div class="billboard" @mousemove="handleMouseMove">
    <img
      class="billboard__image"
      id="billboard-background"
      :src="article.image.photoUrl"
    />
    <section class="billboard__content">
      <h2 class="content__header">Newest</h2>
      <h1 class="content__title">{{ article.title }}</h1>
      <h2 class="content__description">{{ article.description }}</h2>
    </section>
    <router-link class="billboard__link" :to="/article/ + article.articleId">
      READ
    </router-link>
    <h3 class="billboard__date">
      {{ getDate() }}
    </h3>
  </div>
</template>

<script>
import formatArticleDate from '@utility/formatArticleDate'

export default {
  name: 'Billboard',
  methods: {
    getDate() {
      return formatArticleDate(this.article.createdAt)
    },
    handleMouseMove(event) {
      const billboardImage = document.getElementById('billboard-background')

      if (billboardImage) {
        const billboardOriginX = billboardImage.clientWidth / 2
        const billboardOriginY = billboardImage.clientHeight / 2

        billboardImage.style.top = `${(billboardOriginY - event.screenY) *
          0.03}px`
        billboardImage.style.left = `${(billboardOriginX - event.screenX) *
          0.03}px`
      }
    }
  },
  props: {
    article: { type: Object, required: true }
  }
}
</script>
