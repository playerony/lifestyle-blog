<template>
  <h1 class="title">{{ label }}</h1>
</template>

<script>
export default {
  name: 'common-title',
  props: { label: { type: String, required: true } }
}
</script>
