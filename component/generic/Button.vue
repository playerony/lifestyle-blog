<template>
  <div>
    <button
      class="button"
      @click="onClick"
      :disabled="disabled" 
    >
      <slot>button</slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    onClick: {
      type: Function,
      required: true
    },
    disabled: {
      type: Boolean
    }
  }
}
</script>
