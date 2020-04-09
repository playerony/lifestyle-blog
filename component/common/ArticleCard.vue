<template>
  <div class="article-card">
    <img class="article-card__image" :src="article.image.photoUrl" />
    <p class="article-card__reading-time">
      <ClockSVG />
      {{ article.readingTime }} min
    </p>
    <div class="article-card__content">
      <h2>{{ article.title }}</h2>
      <h4>{{ article.description }}</h4>
    </div>
  </div>
</template>

<script>
import ClockSVG from '@asset/svg/clock.svg'

export default {
  name: 'ArticleCard',
  components: {
    ClockSVG
  },
  props: {
    article: { type: Object, required: true }
  }
}
</script>