<template>
  <div>
    <Input label="Creator" v-model="creator" placeholder="Your name..." />
    <Textarea
      label="Content"
      v-model="content"
      placeholder="Join the discussion..."
    />
  </div>
</template>

<script>
import Input from '../generic/Input'
import Textarea from '../generic/Textarea'

export default {
  name: 'Reply',
  data() {
    return {
      creator: '',
      content: ''
    }
  },
  components: {
    Input,
    Textarea
  },
  props: {
    handleReply: { type: Function, required: false }
  }
}
</script>
