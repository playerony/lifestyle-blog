<template>
  <div class="article">
    <Container>
      <header class="article__header">
        <header class="content__header">
          <p class="header__info" v-if="details.totalVisitors">
            <EyeSVG />
            {{ details.totalVisitors }}
            <span v-if="details.todayVisitors">
              (+{{ details.todayVisitors }})
            </span>
          </p>
          <p class="header__info" v-if="article.readingTime">
            <ClockSVG />
            {{ article.readingTime }} min
          </p>
          <p class="header__info" v-if="details.totalComments">
            <ReplySVG />
            {{ details.totalComments }}
            <span v-if="article.todayComments">
              (+{{ details.todayComments }})
            </span>
          </p>
        </header>
        <h1>{{ article.title }}</h1>
        <label class="content__description">{{ article.description }}</label>
      </header>
      <div class="article__border" />
      <div id="article-content" v-html="content" class="article__content" />
      <div class="article__border" />
      <Disqus
        :comments="comments"
        :handleReply="handleReply"
        :replyErrorData="replyErrorData"
      />
      <SideNavbar />
    </Container>
  </div>
</template>

<script>
import Disqus from './Disqus'
import SideNavbar from './SideNavbar'
import EyeSVG from '@asset/svg/eye.svg'
import ClockSVG from '@asset/svg/clock.svg'
import ReplySVG from '@asset/svg/reply.svg'
import Container from '../common/Container'

import draftToHtml from 'draftjs-to-html'

export default {
  name: 'Article',
  props: {
    details: { type: Object, required: true },
    article: { type: Object, required: true },
    comments: { type: Array, required: true },
    handleReply: { type: Function, required: true },
    replyErrorData: { type: Object, required: true }
  },
  components: {
    EyeSVG,
    Disqus,
    ClockSVG,
    ReplySVG,
    Container,
    SideNavbar
  },
  data() {
    const customEntityTransform = (entity, text) => {
      if (entity.type === 'image') {
        return `<img src="${text}" />`
      } else if (entity.type === 'code-block') {
        return `<code>${text}</code>`
      } else if (entity.type === 'LINK') {
        return `<a href="${entity.data.url}" target="_blank"">${text}</a>`
      } else {
        return
      }
    }

    return {
      content: draftToHtml(
        JSON.parse(this.article.content),
        {},
        false,
        customEntityTransform
      )
    }
  }
}
</script>
