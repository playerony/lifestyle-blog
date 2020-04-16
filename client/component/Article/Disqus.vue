<template>
  <div>
    <Reply :handleReply="handleReply" />
    <Comment
      v-for="comment in getCommentList()"
      :key="comment.commentId"
      :comment="comment"
      :handleReply="handleReply"
    />
  </div>
</template>

<script>
import Reply from './Reply'
import Comment from './Comment'

import commentListTransformator from '@transformator/commentListTransformator'

export default {
  name: 'Disqus',
  components: {
    Reply,
    Comment
  },
  props: {
    comments: { type: Array, required: true },
    handleReply: { type: Function, required: true }
  },
  methods: {
    getCommentList() {
      console.warn(commentListTransformator(this.comments))

      return commentListTransformator(this.comments)
    }
  }
}
</script>
