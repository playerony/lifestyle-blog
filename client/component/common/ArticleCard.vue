<template>
  <div class="article-card">
    <img class="article-card__image" :src="article.image.photoUrl" />
    <label class="article-card__reading-time">
      <ClockSVG style="width: 25px; height: 25px;" />
    </label>
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