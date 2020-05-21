<template>
  <div @click="handleButtonClick" :class="'scroll-top-button ' + buttonStyle">
    <DynamicIcon icon="left-arrow" class="scroll-top-button__icon" />
  </div>
</template>

<script>
import DynamicIcon from './DynamicIcon'

import scrollToTop from '@utility/scrollToTop'
import getCurrentScrollPosition from '@utility/getCurrentScrollPosition'

export default {
  name: 'common-scroll-top-button',
  data() {
    return {
      isVisible: false,
      wasClicked: false
    }
  },
  components: {
    DynamicIcon
  },
  mounted() {
    window.addEventListener('scroll', this.checkVisibility)

    this.checkVisibility()
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.checkVisibility)
  },
  computed: {
    buttonStyle() {
      if (!this.isVisible || this.wasClicked) {
        return 'scroll-top-button--hidden'
      }

      return ''
    }
  },
  methods: {
    handleButtonClick() {
      scrollToTop()

      this.wasClicked = true
    },
    checkVisibility() {
      const currentScrollPosition = getCurrentScrollPosition()

      if (this.wasClicked && currentScrollPosition === 0) {
        this.wasClicked = false
      }

      this.isVisible = currentScrollPosition > window.outerHeight
    }
  }
}
</script>
