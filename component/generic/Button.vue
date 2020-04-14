<template>
  <button class="button" @click="onClick" :disabled="disabled">
    <slot>button</slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    onClick: { type: Function, required: true },
    disabled: { type: Boolean, required: false }
  }
}
</script>
