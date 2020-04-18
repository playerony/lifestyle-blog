<template>
  <div>
    <Reply :handleReply="handleReply" :errorData="newReplyErrorData" />
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
    handleReply: { type: Function, required: true },
    replyErrorData: { type: Object, required: false }
  },
  data() {
    return {
      newReplyErrorData: {}
    }
  },
  methods: {
    getCommentList() {
      if (this.replyErrorData?.commentId === null) {
        this.newReplyErrorData = this.replyErrorData
      } else {
        this.newReplyErrorData = {}
      }

      return commentListTransformator(this.comments, this.replyErrorData)
    }
  }
}
</script>
