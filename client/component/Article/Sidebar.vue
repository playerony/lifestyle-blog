<template>
  <aside>
    <div class="side-navbar" @click="goBack">
      <div class="side-navbar__back-button" />
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
    <FabButton>
      <h1>T</h1>
      <h1>E</h1>
      <h1>S</h1>
      <h1>X</h1>
    </FabButton>
  </aside>
</template>

<script>
import Tooltip from '../common/Tooltip'
import FabButton from '../generic/FabButton'
import DynamicIcon from '../common/DynamicIcon'

export default {
  name: 'Sidebar',
  props: {
    categories: { type: Array, required: true }
  },
  components: {
    Tooltip,
    FabButton,
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
