<template>
  <div class="disqus">
    <Title label="Comments" />
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
import Title from '../common/Title'

import commentListTransformator from '@transformator/commentListTransformator'

export default {
  name: 'Disqus',
  components: {
    Reply,
    Title,
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
