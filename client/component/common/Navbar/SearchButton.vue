<template>
  <div class="search-button">
    <label class="search-button__label">Search blog</label>
    <SearchSVG class="search-button__icon" />
  </div>
</template>

<script>
import SearchSVG from '@asset/svg/search.svg'

export default {
  name: 'SearchButton',
  components: {
    SearchSVG
  }
}
</script>
