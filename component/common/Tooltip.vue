<template>
  <a :title="title" @click="onClick" class="tooltip">
    <slot>tooltip</slot>
  </a>
</template>

<script>
export default {
  name: 'common-tooltip',
  props: {
    title: { type: String, required: true },
    onClick: { type: Function, required: false, default: () => {} }
  }
}
</script>
