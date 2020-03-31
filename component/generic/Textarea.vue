<template>
  <div class="textarea">
    <p :class="'textarea__label ' + inputLabelStyle">
      {{ label }}
    </p>
    <textarea
      :value="value"
      v-on="$listeners" 
      :placeholder="placeholder"
      @blur="isFocus = !isFocus"
      @focus="isFocus = !isFocus"
      @input="$emit('update', $event.target.value)"
      :class="'textarea__content ' + inputContentStyle"
    />
    <p class="textarea__error-label">
      {{ errorMessage }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Textarea',
  data: () => ({
    isFocus: false
  }),
  computed: {
    inputLabelStyle() {
      if (this.errorMessage) {
        return 'textarea__label--error'
      }

      if (this.isFocus) {
        return 'textarea__label--focus'
      }

      return ''
    },
    inputContentStyle() {
      if (this.errorMessage) {
        return 'textarea__content--error'
      }

      return ''
    }
  },
  props: {
    label: { type: String , required: false, default: '' },
    value: { type: String , required: false, default: '' },
    placeholder: { type: String, required: false, default: '' },
    errorMessage: { type: String , required: false, default: '' }
  },
  model: {
    prop: "value",
    event: "update"
  }
}
</script>
