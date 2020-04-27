<template>
  <div class="search-button" @click="showSearchPage = !showSearchPage">
    <label class="search-button__label">Search blog</label>
    <SearchSVG class="search-button__icon" />
    <portal to="destination">
      <SearchPage v-if="showSearchPage" />
    </portal>
  </div>
</template>

<script>
import SearchPage from '@page/SearchPage'

import SearchSVG from '@asset/svg/search.svg'

export default {
  name: 'SearchButton',
  components: {
    SearchSVG,
    SearchPage
  },
  data() {
    return {
      showSearchPage: false
    }
  }
}
</script>
