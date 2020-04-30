<template>
  <div class="article-details">
    <header class="article-details__header">
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
      <p class="header__info" v-if="article.likes">
        <HeartSVG />
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
import EyeSVG from '@asset/svg/eye.svg'
import ClockSVG from '@asset/svg/clock.svg'
import HeartSVG from '@asset/svg/heart.svg'
import ReplySVG from '@asset/svg/reply.svg'

export default {
  name: 'common-article-details',
  props: {
    article: { type: Object, required: true }
  },
  components: {
    EyeSVG,
    ClockSVG,
    HeartSVG,
    ReplySVG
  }
}
</script>
