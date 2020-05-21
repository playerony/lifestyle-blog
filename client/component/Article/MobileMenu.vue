<template>
  <FabButton class="mobile-menu">
    <Tooltip
      :title="category.name"
      :key="category.categoryId"
      class="mobile-menu__element"
      v-for="category in categories"
      :onClick="() => redirectToCategory(category.categoryId)"
    >
      <DynamicIcon :icon="category.name.toLowerCase()" />
    </Tooltip>
    <div @click="goBack" class="mobile-menu__element">
      <div class="mobile-menu__back-button" />
    </div>
    <DynamicIcon icon="ellipsis" class="mobile-menu__element" />
  </FabButton>
</template>

<script>
import Tooltip from '../common/Tooltip'
import FabButton from '../generic/FabButton'
import DynamicIcon from '../common/DynamicIcon'

import routeList from '@config/routeList'

export default {
  name: 'article-mobile-menu',
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
      this.$router.push(`${routeList.articles.base}/${categoryId}`)
    }
  }
}
</script>
