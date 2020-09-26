<template>
  <div class="disqus">
    <Title label="Komentarze" />
    <Reply :handleReply="handleReply" :errorData="getReplyErrorData()" />
    <Comment
      :comment="comment"
      :key="comment.commentId"
      :handleReply="handleReply"
      class="disqus__first-depth"
      v-for="comment in getCommentList()"
      :handleLikeComment="handleLikeComment"
      :handleDislikeComment="handleDislikeComment"
    />
  </div>
</template>

<script>
import Reply from './Reply'
import Comment from './Comment'
import Title from '../common/Title'

import commentListTransformator from '@transformator/commentListTransformator'

export default {
  name: 'article-disqus',
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
