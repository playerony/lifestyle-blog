<template>
  <div class="search-button" @click="toggleModal">
    <label class="search-button__label">Znajdź artykuł</label>
    <SearchSVG class="search-button__icon" />
    <portal to="modals">
      <SearchPage v-if="showSearchPage" :onClose="toggleModal" />
    </portal>
  </div>
</template>

<script>
import SearchPage from '@page/Search'

import { SEARCH_PAGE_VISIBILITY } from '@config/constant'

import SearchSVG from '@asset/svg/search.svg'

export default {
  name: 'common-search-button',
  data() {
    return {
      showSearchPage: false
    }
  },
  components: {
    SearchSVG,
    SearchPage
  },
  mounted() {
    if (localStorage.getItem(SEARCH_PAGE_VISIBILITY)) {
      this.showSearchPage =
        localStorage.getItem(SEARCH_PAGE_VISIBILITY) === 'true'
    }

    window.addEventListener('storage', this.onStorageUpdate)
  },
  beforeDestroy() {
    window.removeEventListener('storage', this.onStorageUpdate)
  },
  methods: {
    toggleModal() {
      this.showSearchPage = !this.showSearchPage
    },
    onStorageUpdate(event) {
      if (event.key === SEARCH_PAGE_VISIBILITY) {
        this.showSearchPage = event.newValue === 'true'
      }
    }
  },
  watch: {
    showSearchPage(newSearchPageState) {
      localStorage.setItem(SEARCH_PAGE_VISIBILITY, newSearchPageState)
    }
  }
}
</script>
