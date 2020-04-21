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
    <div class="article-card__hover" :src="article.image.photoUrl">
      <img :src="article.image.photoUrl" />
      <Button :onClick="redirectToArticle" className="hover__button">
        Read now
      </Button>
    </div>
  </article>
</template>

<script>
import Button from '../generic/Button'
import EyeSVG from '@asset/svg/eye.svg'
import ClockSVG from '@asset/svg/clock.svg'
import ReplySVG from '@asset/svg/reply.svg'

export default {
  name: 'ArticleCard',
  components: {
    Button,
    EyeSVG,
    ClockSVG,
    ReplySVG
  },
  props: {
    article: { type: Object, required: true }
  },
  methods: {
    redirectToArticle() {
      this.$router.push(`/article/${this.article.articleId}`)
    }
  }
}
</script>
