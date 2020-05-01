<template>
  <label class="menu__item" @click="handleClick">
    {{ menuOption.label }}
  </label>
</template>

<script>
export default {
  name: 'common-menu-item',
  props: {
    onClick: { type: Function, required: true },
    menuOption: { type: Object, required: true }
  },
  computed: {
    handleClick() {
      this.onClick(this.menuOption.sortingBy)
    }
  }
}
</script>
