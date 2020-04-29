<template>
  <div class="side-navbar">
    <div @click="goBack" class="side-navbar__back-button" />
  </div>
</template>

<script>
export default {
  name: 'SideNavbar',
  props: {
    categories: { type: Object, required: true }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>
