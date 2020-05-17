<template>
  <div class="side-navbar">
    <div class="side-navbar__back-button" @click="goBack" />
    <div class="side-navbar__category-list">
      <Tooltip
        :title="category.name"
        :key="category.categoryId"
        class="category-list__icon"
        v-for="category in categories"
        :onClick="() => redirectToCategory(category.categoryId)"
      >
        <DynamicIcon :icon="category.name.toLowerCase()" />
      </Tooltip>
    </div>
  </div>
</template>

<script>
import Tooltip from '../common/Tooltip'
import DynamicIcon from '../common/DynamicIcon'

export default {
  name: 'Sidebar',
  props: {
    categories: { type: Array, required: true }
  },
  components: {
    Tooltip,
    DynamicIcon
  },
  methods: {
    goBack() {
      this.$router.back()
    },
    redirectToCategory(categoryId) {
      this.$router.push(`/articles/${categoryId}`)
    }
  }
}
</script>
