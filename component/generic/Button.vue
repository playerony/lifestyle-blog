<template>
  <button :class="'button ' + className" @click="onClick" :disabled="disabled">
    <slot>button</slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    onClick: { type: Function, required: true },
    disabled: { type: Boolean, required: false },
    className: { type: String, required: false, default: '' }
  }
}
</script>
