<template>
  <router-link class="article-card" :to="/article/ + article.articleId">
    <img class="article-card__image" :src="article.image.photoUrl" />
    <p class="article-card__reading-time">
      <ClockSVG />
      {{ article.readingTime }} min
    </p>
    <section class="article-card__content">
      <h2>{{ article.title }}</h2>
      <h4>{{ article.description }}</h4>
    </section>
    <h4 class="article-card__date">
      {{ date }}
    </h4>
  </router-link>
</template>

<script>
import formatArticleDate from '@utility/formatArticleDate'

import ClockSVG from '@asset/svg/clock.svg'

export default {
  name: 'ArticleCard',
  components: {
    ClockSVG
  },
  data() {
    return {
      date: formatArticleDate(this.article.createdAt)
    }
  },
  props: {
    article: { type: Object, required: true }
  }
}
</script>
