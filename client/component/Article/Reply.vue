<template>
  <div class="reply">
    <div class="reply__content">
      <Input
        label="Imię"
        v-model="creator"
        placeholder="Twoje imię..."
        :errorMessage="getCreatorFieldError()"
      />
      <Textarea
        label="Treść"
        v-model="content"
        placeholder="Dołącz do dyskusji..."
        :errorMessage="getContentFieldError()"
      />
      <Button className="reply__button" :onClick="this.handleButtonClick">
        Odpowiedz
      </Button>
    </div>
  </div>
</template>

<script>
import Input from '../generic/Input'
import Button from '../generic/Button'
import Textarea from '../generic/Textarea'

import getFieldError from '@utility/getFieldError'

export default {
  name: 'article-reply',
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
    handleButtonClick() {
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
