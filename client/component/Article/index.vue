<template>
  <div class="article">
    <Container>
      <div v-html="content" class="article__content" />
      <Disqus
        :comments="comments"
        :handleReply="handleReply"
        :replyErrorData="replyErrorData"
      />
    </Container>
  </div>
</template>

<script>
import Disqus from './Disqus'
import Container from '../common/Container'

import draftToHtml from 'draftjs-to-html'

export default {
  name: 'Article',
  props: {
    article: { type: Object, required: true },
    comments: { type: Array, required: true },
    handleReply: { type: Function, required: true },
    replyErrorData: { type: Object, required: true }
  },
  components: {
    Disqus,
    Container
  },
  data() {
    const customEntityTransform = (entity, text) => {
      if (entity.type === 'image') {
        return `<img src="${text}" />`
      } else if (entity.type === 'code-block') {
        return `<code>${text}</code>`
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