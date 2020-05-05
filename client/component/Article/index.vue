<template>
  <div class="article">
    <Container>
      <div class="article__content-wrapper">
        <ArticleDetails
          class="article__header"
          :article="{ ...article, ...details }"
        />
        <div id="article-content" v-html="content" class="article__content" />
        <div class="article__likes">
          <transition name="fade" mode="out-in">
            <HeartSVG
              id="heart"
              key="heart"
              v-if="!isLike"
              @click="handleAddLike"
            />
            <HeartRedSVG key="heard-red" v-if="isLike" />
          </transition>
          <label>{{ article.likes }}</label>
        </div>
        <Disqus
          :comments="comments"
          :handleReply="handleReply"
          :replyErrorData="replyErrorData"
          :handleAddCommentLike="handleAddCommentLike"
          :handleRemoveCommentLike="handleRemoveCommentLike"
        />
      </div>
      <Sidebar :categories="article.categoryList" />
    </Container>
  </div>
</template>

<script>
import draftToHtml from 'draftjs-to-html'

import Disqus from './Disqus'
import Sidebar from './Sidebar'
import Container from '../common/Container'
import ArticleDetails from '../common/ArticleDetails'

import HeartSVG from '@asset/svg/heart.svg'
import HeartRedSVG from '@asset/svg/heart-red.svg'

export default {
  name: 'Article',
  props: {
    details: { type: Object, required: true },
    article: { type: Object, required: true },
    comments: { type: Array, required: true },
    isLike: { type: Boolean, required: true },
    handleReply: { type: Function, required: true },
    replyErrorData: { type: Object, required: true },
    handleAddLike: { type: Function, required: true },
    handleAddCommentLike: { type: Function, required: true },
    handleRemoveCommentLike: { type: Function, required: true }
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
    HeartRedSVG,
    ArticleDetails
  }
}
</script>
