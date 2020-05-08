<template>
  <div class="article-details">
    <header class="article-details__header">
      <p class="header__info" v-if="article.totalVisitors">
        <DynamicIcon icon="eye" />
        {{ article.totalVisitors }}
        <span v-if="article.todayVisitors">
          (+{{ article.todayVisitors }})
        </span>
      </p>
      <p class="header__info" v-if="article.readingTime">
        <DynamicIcon icon="clock" />
        {{ article.readingTime }} min
      </p>
      <p class="header__info" v-if="article.totalComments">
        <DynamicIcon icon="reply" />
        {{ article.totalComments }}
        <span v-if="article.todayComments">
          (+{{ article.todayComments }})
        </span>
      </p>
      <p class="header__info" v-if="article.likes && displayLikes">
        <DynamicIcon icon="heart" />
        {{ article.likes }}
      </p>
    </header>
    <h1 class="article-details__title">{{ article.title }}</h1>
    <label class="article-details__description">
      {{ article.description }}
    </label>
  </div>
</template>

<script>
import DynamicIcon from './DynamicIcon'

export default {
  name: 'common-article-details',
  props: {
    article: { type: Object, required: true },
    displayLikes: { type: Boolean, required: false, default: true }
  },
  components: {
    DynamicIcon
  }
}
</script>
