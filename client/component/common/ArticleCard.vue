<template>
  <article class="article-card">
    <div class="article-card__border" />
    <div class="article-card__content">
      <header class="content__header">
        <p class="header__info" v-if="article.totalVisitors">
          <EyeSVG />
          {{ article.totalVisitors }}
          <span v-if="article.todayVisitors">
            (+{{ article.todayVisitors }})
          </span>
        </p>
        <p class="header__info" v-if="article.readingTime">
          <ClockSVG />
          {{ article.readingTime }} min
        </p>
        <p class="header__info" v-if="article.totalComments">
          <ReplySVG />
          {{ article.totalComments }}
          <span v-if="article.todayComments">
            (+{{ article.todayComments }})
          </span>
        </p>
      </header>
      <h1>{{ article.title }}</h1>
      <label>{{ article.description }}</label>
    </div>
  </article>
</template>

<script>
import EyeSVG from '@asset/svg/eye.svg'
import ClockSVG from '@asset/svg/clock.svg'
import ReplySVG from '@asset/svg/reply.svg'

export default {
  name: 'ArticleCard',
  components: {
    EyeSVG,
    ClockSVG,
    ReplySVG
  },
  props: {
    article: { type: Object, required: true }
  }
}
</script>
