<template>
  <div>
    <Reply :handleReply="handleReply" />
  </div>
</template>

<script>
import Reply from './Reply'

export default {
  name: 'Disqus',
  components: {
    Reply
  },
  props: {
    comments: { type: Array, required: true },
    handleReply: { type: Function, required: true }
  }
}
</script>
