<template>
  <button
    @click="handleButtonClick"
    :class="'scroll-top-button ' + buttonStyle"
  >
    <DynamicIcon icon="left-arrow" class="scroll-top-button__icon" />
  </button>
</template>

<script>
import DynamicIcon from './DynamicIcon'

import scrollToTop from '@utility/scrollToTop'
import getCurrentScrollPosition from '@utility/getCurrentScrollPosition'

export default {
  name: 'common-scroll-top-button',
  data() {
    return {
      isVisible: false
    }
  },
  components: {
    DynamicIcon
  },
  computed: {
    buttonStyle() {
      if (!this.isVisible) {
        return 'scroll-top-button--hidden'
      }

      return ''
    }
  },
  mounted() {
    window.addEventListener('scroll', this.checkVisibility)

    this.checkVisibility()
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.checkVisibility)
  },
  methods: {
    handleButtonClick() {
      scrollToTop()
    },
    checkVisibility() {
      const currentScrollPosition = getCurrentScrollPosition()

      this.isVisible = currentScrollPosition > window.outerHeight
    }
  }
}
</script>
