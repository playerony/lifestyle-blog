<template>
  <div id="root" class="app">
    <Navbar />
    <main class="app__content">
      <router-view />
    </main>
    <portal-target name="modals"></portal-target>
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
