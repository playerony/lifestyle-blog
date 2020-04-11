<template>
  <div v-html="content" />
</template>

<script>
import draftToHtml from 'draftjs-to-html';

export default {
  name: 'Article',
  props: {
    article: { type: Object, required: true }
  },
  data () {
    return {
      content: draftToHtml(JSON.parse(this.article.content))
    }
  },
}
</script>
