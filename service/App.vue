<template>
  <div id="root" class="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from '@component/common/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>
