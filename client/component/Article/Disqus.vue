<template>
  <div class="disqus">
    <h1 class="disqus__header">Comments</h1>
    <Reply :handleReply="handleReply" :errorData="getReplyErrorData()" />
    <Comment
      class="disqus__first-depth"
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
    handleReply: { type: Function, required: true },
    replyErrorData: { type: Object, required: false }
  },
  methods: {
    getCommentList() {
      return commentListTransformator(this.comments)
    },
    getReplyErrorData() {
      return this.replyErrorData?.commentId === null ? this.replyErrorData : {}
    }
  }
}
</script>
