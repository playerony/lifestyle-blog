<template>
  <div :class="'switch ' + swichStyle" @click="$emit('click', !isChecked)">
    <div class="switch__circle" />
  </div>
</template>

<script>
export default {
  name: 'Checkbox',
  props: {
    isChecked: { type: Boolean, required: false, default: false }
  },
  computed: {
    swichStyle() {
      if (this.isChecked) {
        return 'switch--checked'
      }

      return ''
    }
  },
  model: {
    event: 'click',
    prop: 'isChecked'
  }
}
</script>
