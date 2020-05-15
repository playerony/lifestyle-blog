<template>
  <button :class="'button ' + className" @click="onClick" :disabled="disabled">
    <slot>button</slot>
  </button>
</template>

<script>
export default {
  name: 'generic-button',
  props: {
    onClick: { type: Function, required: true },
    className: { type: String, required: false, default: '' },
    disabled: { type: Boolean, required: false, default: false }
  }
}
</script>
