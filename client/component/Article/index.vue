<template>
  <div class="article">
    <Container>
      <div class="article__content-wrapper">
        <ArticleDetails
          class="article__header"
          :article="{ ...article, ...details }"
        />
        <div id="article-content" v-html="content" class="article__content" />
        <h3 class="article__likes">
          Czy
          <transition name="fade" mode="out-in">
            <HeartSVG
              id="heart"
              key="heart"
              v-if="!isLike"
              @click="handleLikeArticle"
            />
            <HeartRedSVG key="heard-red" v-if="isLike" />
          </transition>
          ten artykuł?
        </h3>
        <Disqus
          :comments="comments"
          :handleReply="handleReply"
          :replyErrorData="replyErrorData"
          :handleLikeComment="handleLikeComment"
          :handleDislikeComment="handleDislikeComment"
        />
      </div>
      <Sidebar :categories="article.categoryList" />
      <MobileMenu :categories="article.categoryList" />
    </Container>
    <VueHeadful :title="article.title + ' | Paweł Wojtasiński Blog'" />
  </div>
</template>

<script>
import VueHeadful from 'vue-headful'
import draftToHtml from 'draftjs-to-html'

import Disqus from './Disqus'
import Sidebar from './Sidebar'
import MobileMenu from './MobileMenu'
import Container from '../common/Container'
import ArticleDetails from '../common/ArticleDetails'

import HeartSVG from '@asset/svg/heart.svg'
import HeartRedSVG from '@asset/svg/heart-red.svg'

export default {
  name: 'article-article',
  props: {
    details: { type: Object, required: true },
    article: { type: Object, required: true },
    comments: { type: Array, required: true },
    isLike: { type: Boolean, required: true },
    handleReply: { type: Function, required: true },
    replyErrorData: { type: Object, required: true },
    handleLikeArticle: { type: Function, required: true },
    handleLikeComment: { type: Function, required: true },
    handleDislikeComment: { type: Function, required: true }
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
  },
  components: {
    Disqus,
    Sidebar,
    HeartSVG,
    Container,
    VueHeadful,
    MobileMenu,
    HeartRedSVG,
    ArticleDetails
  }
}
</script>
