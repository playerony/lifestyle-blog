<template>
  <div v-html="content" />
</template>

<script>
import draftToHtml from 'draftjs-to-html'

export default {
  name: 'Article',
  props: {
    article: { type: Object, required: true }
  },
  data () {
    const customEntityTransform = (entity, text) => {
      console.warn(entity)
      if (entity.type !== 'image') return;

      return `<img src="${text}" />`;
    }

    return {
      content: draftToHtml(JSON.parse(this.article.content), {}, false, customEntityTransform)
    }
  },
}
</script>
