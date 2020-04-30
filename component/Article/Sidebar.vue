<template>
  <div class="side-navbar">
    <div @click="goBack" class="side-navbar__back-button" />
    <div class="side-navbar__category-list">
      <div
        :key="category.categoryId"
        class="category-list__icon"
        v-for="category in categories"
        @click="redirectToCategory(category.categoryId)"
      >
        <DynamicIcon :icon="category.name.toLowerCase()" />
      </div>
    </div>
  </div>
</template>

<script>
import DynamicIcon from '../common/DynamicIcon'

export default {
  name: 'Sidebar',
  props: {
    categories: { type: Array, required: true }
  },
  components: {
    DynamicIcon
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    redirectToCategory(categoryId) {
      this.$router.push(`/articles/${categoryId}`)
    }
  }
}
</script>
