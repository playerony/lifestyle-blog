<template>
  <div class="search-button" @click="toggleModal">
    <label class="search-button__label">Search blog</label>
    <SearchSVG class="search-button__icon" />
    <portal to="modals">
      <SearchPage v-if="showSearchPage" :onClose="toggleModal" />
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
  },
  methods: {
    toggleModal() {
      this.showSearchPage = !this.showSearchPage

      if (this.showSearchPage) {
        document.body.classList.add('overflow')
      } else {
        document.body.classList.remove('overflow')
      }
    }
  }
}
</script>
