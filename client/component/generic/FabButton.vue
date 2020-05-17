<script>
export default {
  name: 'common-fab-button',
  data() {
    return {
      isVisible: false
    }
  },
  render(createElement) {
    const list = []
    this.$slots.default.forEach((element, index) => {
      if (element.tag) {
        const isLastElement = this.$slots.default.length === index + 1

        if (!isLastElement) {
          list.push(
            createElement(
              'li',
              {
                style: `--index: ${this.$slots.default.length - index - 1}`,
                class: `fab-button__element ${
                  this.isVisible ? 'fab-button__element--visible' : ''
                }`
              },
              [element]
            )
          )
        } else {
          list.push(
            createElement(
              'li',
              {
                on: {
                  click: () => (this.isVisible = !this.isVisible)
                }
              },
              [element]
            )
          )
        }
      }
    })

    return createElement('ul', { class: 'fab-button' }, list)
  }
}
</script>
