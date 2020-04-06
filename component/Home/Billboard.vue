<template>
  <div class="billboard">
    <img class="billboard__image" :src="article.image.photoUrl" />
    <section class="billboard__content">
      <h1>{{ article.title }}</h1>
      <h2>{{ article.description }}</h2>
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