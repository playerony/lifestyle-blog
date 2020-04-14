<template>
  <div>
    <Input label="Creator" v-model="creator" placeholder="Your name..." />
    <Textarea
      label="Content"
      v-model="content"
      placeholder="Join the discussion..."
    />
    <Button :onClick="handleClick">
      Reply
    </Button>
  </div>
</template>

<script>
import Input from '../generic/Input'
import Button from '../generic/Button'
import Textarea from '../generic/Textarea'

export default {
  name: 'Reply',
  data() {
    return {
      creator: '',
      content: ''
    }
  },
  methods: {
    handleClick(event) {
      event.preventDefault()

      this.handleReply({
        creator: this.creator,
        content: this.content,
        parentCommentId: this.parentCommentId
      })
    }
  },
  components: {
    Input,
    Button,
    Textarea
  },
  props: {
    handleReply: { type: Function, required: true },
    parentCommentId: { type: Number, required: false, default: null }
  }
}
</script>
