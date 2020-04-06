<template>
  <div>
    <img :src="article.image.photoUrl" />
    <h1>{{ article.title }}</h1>
    <h2>{{ article.description }}</h2>
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