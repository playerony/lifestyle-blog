<template>
  <div class="billboard">
    <div class="billboard__border" />
    <section class="billboard__content">
      <header class="content__header">
        <p class="header__info">
          <EyeSVG />
          {{ article.totalVisitors }}
          <span v-if="article.todayVisitors">
            (+{{ article.todayVisitors }})
          </span>
        </p>
        <p class="header__info">
          <ClockSVG />
          {{ article.readingTime }} min
        </p>
        <p class="header__info">
          <ReplySVG />
          {{ article.totalComments }}
          <span v-if="article.todayComments">
            (+{{ article.todayComments }})
          </span>
        </p>
      </header>
      <h1 class="content__title">{{ article.title }}</h1>
      <label class="content__description">{{ article.description }}</label>
      <Button className="content__button">Read now</Button>
    </section>
    <img class="billboard__image" :src="article.image.photoUrl" />
  </div>
</template>

<script>
import Button from '../generic/Button'
import EyeSVG from '@asset/svg/eye.svg'
import ClockSVG from '@asset/svg/clock.svg'
import ReplySVG from '@asset/svg/reply.svg'

export default {
  name: 'Billboard',
  props: {
    article: { type: Object, required: true }
  },
  components: {
    Button,
    EyeSVG,
    ClockSVG,
    ReplySVG
  }
}
</script>
