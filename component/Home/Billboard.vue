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
  </div>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    article: { type: Object, required: true }
  }
}
</script>