<template>
  <div class="pagination" v-if="displayPagination">
    <p
      :class="'pagination__button ' + nextButtonClassName"
      @click="setCurrentPage(currentPage - 1, !displayNextButton)"
    >
      <LeftArrowSVG class="button__arrow button__arrow__newer" />
      NOWSZE ARTYKUŁY
    </p>
    <p
      :class="'pagination__button ' + backButtonClassName"
      @click="setCurrentPage(currentPage + 1, !displayBackButton)"
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
    allElements: { type: Number, required: true },
    currentPage: { type: Number, required: true },
    setCurrentPage: { type: Function, required: true }
  },
  components: {
    LeftArrowSVG,
    RightArrowSVG
  },
  computed: {
    displayPagination() {
      return this.allElements > this.pageSize
    },
    displayBackButton() {
      return Math.ceil(this.allElements / this.pageSize) > this.currentPage
    },
    displayNextButton() {
      return this.currentPage > 1
    },
    backButtonClassName() {
      if (!this.displayBackButton) {
        return 'pagination__button--disabled'
      }

      return ''
    },
    nextButtonClassName() {
      if (!this.displayNextButton) {
        return 'pagination__button--disabled'
      }

      return ''
    }
  }
}
</script>
