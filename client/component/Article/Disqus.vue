<template>
  <div class="disqus">
    <Title label="Comments" />
    <Comment
      class="disqus__first-depth"
      v-for="comment in getCommentList()"
      :key="comment.commentId"
      :comment="comment"
      :handleReply="handleReply"
      :handleLikeComment="handleLikeComment"
      :handleDislikeComment="handleDislikeComment"
    />
    <Reply :handleReply="handleReply" :errorData="getReplyErrorData()" />
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
    replyErrorData: { type: Object, required: false },
    handleLikeComment: { type: Function, required: true },
    handleDislikeComment: { type: Function, required: true }
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
