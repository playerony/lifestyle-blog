<template>
  <div class="input">
    <p :class="'input__label ' + inputLabelStyle">
      {{ label }}
    </p>
    <input
      :type="type"
      :value="value"
      v-on="$listeners" 
      :placeholder="placeholder"
      @blur="isFocus = !isFocus"
      @focus="isFocus = !isFocus"
      @input="$emit('update', $event.target.value)"
      :class="'input__content ' + inputContentStyle"
    >
    <p class="input__error-label">
      {{ errorMessage }}
    </p>
  </div>
</template>

<script>
export default {
  data: () => ({
    isFocus: false
  }),
  computed: {
    inputLabelStyle() {
      if (this.errorMessage) {
        return 'input__label--error'
      }

      if (this.isFocus) {
        return 'input__label--focus'
      }

      return ''
    },
    inputContentStyle() {
      if (this.errorMessage) {
        return 'input__content--error'
      }

      return ''
    }
  },
  props: {
    label: { type: String , required: false, default: '' },
    value: { type: String , required: false, default: '' },
    type: { type: String , required: false, default: 'text' },
    placeholder: { type: String, required: false, default: '' },
    errorMessage: { type: String , required: false, default: '' }
  },
  model: {
    prop: "value",
    event: "update"
  }
}
</script>
