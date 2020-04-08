<template>
  <div class="article-card">
    <img class="article-card__image" :src="article.image.photoUrl" />
  </div>
</template>

<script>
export default {
  name: 'ArticleCard',
  props: {
    article: { type: Object, required: true }
  }
}
</script>