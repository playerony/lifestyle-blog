<template>
  <div class="billboard">
    <div class="billboard__mask" />
    <img class="billboard__image" :src="article.image.photoUrl" />
    <section class="billboard__content">
      <h2 class="content__header">Newest</h2>
      <h1 class="content__title">{{ article.title }}</h1>
      <h2 class="content__description">{{ article.description }}</h2>
    </section>
    <section class="billboard__links">
      <router-link :to="/article/ + article.articleId">
        READ
      </router-link>
    </section>
    <section class="billboard__date">
      <h3>{{ date }}</h3>
    </section>
  </div>
</template>

<script>
import formatArticleDate from '@utility/formatArticleDate'

export default {
  name: 'Billboard',
  data () {
    return {
      date: formatArticleDate(this.article.createdAt)
    }
  },
  props: {
    article: { type: Object, required: true }
  }
}
</script>