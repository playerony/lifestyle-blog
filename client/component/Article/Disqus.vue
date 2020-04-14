<template>
  <div>
    <Reply />
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
    comments: { type: Array, required: true }
  }
}
</script>
