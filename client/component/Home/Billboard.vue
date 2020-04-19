<template>
  <div class="billboard">
    <div class="billboard__border" />
    <section class="billboard__content">
      <h1 class="content__title">{{ article.title }}</h1>
      <label class="content__description">{{ article.description }}</label>
      <Button>Read now</Button>
    </section>
    <img class="billboard__image" :src="article.image.photoUrl" />
  </div>
</template>

<script>
import Button from '../generic/Button'

export default {
  name: 'Billboard',
  props: {
    article: { type: Object, required: true }
  },
  components: {
    Button
  }
}
</script>
