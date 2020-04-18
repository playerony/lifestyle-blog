<template>
  <div>
    <Input
      label="Creator"
      v-model="creator"
      placeholder="Your name..."
      :errorMessage="creatorFieldError"
    />
    <Textarea
      label="Content"
      v-model="content"
      :errorMessage="contentFieldError"
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

import getFieldError from '@utility/getFieldError'

export default {
  name: 'Reply',
  data() {
    return {
      creator: '',
      content: '',
      creatorFieldError: getFieldError(this.errorData, 'creator'),
      contentFieldError: getFieldError(this.errorData, 'content')
    }
  },
  methods: {
    handleClick() {
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
    errorData: { type: Object, required: false },
    handleReply: { type: Function, required: true },
    parentCommentId: { type: Number, required: false, default: null }
  }
}
</script>
