<template>
  <component :is="dynamicIcon" />
</template>

<script>
export default {
  name: 'Icon',
  props: {
    icon: {
      type: String,
      required: true
    }
  },
  computed: {
    dynamicIcon() {
      return () =>
        import(
          /* webpackMode: "lazy-once" */
          /* webpackChunkName: "signed-in" */

          `@asset/svg/${this.icon}.svg`
        )
    }
  }
}
</script>
