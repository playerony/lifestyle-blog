<template>
  <div class="comment">
    <div class="comment__content">
      <h1>{{ comment.creator }}</h1>
      <label>{{ comment.content }}</label>
      <label class="content__date">{{ getCommentDate() }}</label>
    </div>
    <Reply
      :handleReply="handleReply"
      :errorData="getErrorData()"
      :key="'reply' + comment.commentId"
      :parentCommentId="comment.commentId"
    />
    <Comment
      v-for="comment in comment.comments"
      :key="comment.commentId"
      :comment="comment"
      :handleReply="handleReply"
    />
  </div>
</template>

<script>
import Reply from './Reply'
import Comment from './Comment'

import differenceBetweenDates from '@utility/differenceBetweenDates'

export default {
  name: 'Comment',
  props: {
    comment: { type: Object, required: true },
    handleReply: { type: Function, required: true }
  },
  components: {
    Reply,
    Comment
  },
  methods: {
    getErrorData() {
      return this.comment.replyErrorData
    },
    getCommentDate() {
      return differenceBetweenDates(this.comment.createdAt)
    }
  }
}
</script>
