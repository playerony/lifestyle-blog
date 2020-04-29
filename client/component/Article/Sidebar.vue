<template>
  <div class="side-navbar">
    <div @click="goBack" class="side-navbar__back-button" />
    <div class="side-navbar__category-list">
      <Icon
        :key="category.categoryId"
        v-for="category in categories"
        :icon="category.name.toLowerCase()"
      />
    </div>
  </div>
</template>

<script>
import Icon from '../common/Icon'

export default {
  name: 'Sidebar',
  props: {
    categories: { type: Array, required: true }
  },
  components: {
    Icon
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
