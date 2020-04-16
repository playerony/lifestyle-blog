<template>
  <div :style="{ paddingLeft: '20px' }">
    <h3>{{ comment.content }}</h3>
    <Reply :handleReply="handleReply" :parentCommentId="comment.commentId" />
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

export default {
  name: 'Comment',
  props: {
    comment: { type: Object, required: true },
    handleReply: { type: Function, required: true }
  },
  components: {
    Reply,
    Comment
  }
}
</script>
