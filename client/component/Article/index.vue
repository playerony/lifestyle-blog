<template>
  <div class="article">
    <Container>
      <div v-html="content" class="article__content" />
    </Container>
  </div>
</template>

<script>
import Container from '../common/Container'

import draftToHtml from 'draftjs-to-html'

export default {
  name: 'Article',
  props: {
    article: { type: Object, required: true }
  },
  components: {
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
