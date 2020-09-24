<template>
  <div class="pagination">
    <p
      v-if="displayNextButton"
      class="pagination__button"
      @click="setCurrentPage(currentPage - 1)"
    >
      <LeftArrowSVG class="button__arrow" />
      NOWSZE ARTYKUŁY
    </p>
    <p
      v-if="displayBackButton"
      class="pagination__button"
      @click="setCurrentPage(currentPage + 1)"
    >
      STARSZE ARTYKUŁY
      <RightArrowSVG class="button__arrow" />
    </p>
  </div>
</template>

<script>
import LeftArrowSVG from '@asset/svg/left-arrow.svg'
import RightArrowSVG from '@asset/svg/right-arrow.svg'

export default {
  name: 'common-pagination',
  props: {
    pageSize: { type: Number, required: true },
    sortingBy: { type: String, required: true },
    allElements: { type: Number, required: true },
    currentPage: { type: Number, required: true },
    setCurrentPage: { type: Function, required: true }
  },
  components: {
    LeftArrowSVG,
    RightArrowSVG
  },
  computed: {
    displayBackButton() {
      return Math.ceil(this.allElements / this.pageSize) > this.currentPage
    },
    displayNextButton() {
      return this.currentPage > 1
    },
    nextButtonLabel() {
      switch (this.sortingBy) {
        case 'latest':
          return 'NOWSZE ARTYKUŁY'
        case 'top-rated':
          return 'WYŻEJ OCENIANE ARTYKUŁY'
        case 'most-commented':
          return 'CZĘŚCIEJ KOMENTOWANE ARTYKUŁY'
        default:
          return 'CZĘŚCIEJ CZYTANE ARTYKUŁY'
      }
    },
    backButtonLabel() {
      switch (this.sortingBy) {
        case 'latest':
          return 'STARSZE ARTYKUŁY'
        case 'top-rated':
          return 'GORZEJ OCENIANE ARTYKUŁY'
        case 'most-commented':
          return 'RZADZIEJ KOMENTOWANE ARTYKUŁY'
        default:
          return 'RZADZIEJ CZYTANE ARTYKUŁY'
      }
    }
  }
}
</script>
