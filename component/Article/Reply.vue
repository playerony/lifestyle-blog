<template>
  <div class="reply">
    <h2 class="reply__header">
      Leave a reply
    </h2>
    <Input
      label="Creator"
      v-model="creator"
      placeholder="Your name..."
      :errorMessage="getCreatorFieldError()"
    />
    <Textarea
      label="Content"
      v-model="content"
      placeholder="Join the discussion..."
      :errorMessage="getContentFieldError()"
    />
    <Button className="reply__button" :onClick="this.handleClick">
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
  components: {
    Input,
    Button,
    Textarea
  },
  props: {
    handleReply: { type: Function, required: true },
    errorData: { type: Object, required: false, default: () => {} },
    parentCommentId: { type: Number, required: false, default: null }
  },
  data() {
    return {
      creator: '',
      content: ''
    }
  },
  methods: {
    handleClick() {
      this.handleReply({
        creator: this.creator,
        content: this.content,
        parentCommentId: this.parentCommentId
      })
    },
    getCreatorFieldError() {
      return getFieldError(this.errorData, 'creator')
    },
    getContentFieldError() {
      return getFieldError(this.errorData, 'content')
    }
  },
  watch: {
    errorData: function() {
      if (Object.keys(this.errorData).length === 0) {
        this.creator = ''
        this.content = ''
      }
    }
  }
}
</script>
