<template>
  <div id="root" class="app">
    <Navbar />
    <main class="app__content">
      <transition name="fade" mode="out-in" appear>
        <router-view :key="$route.fullPath" />
      </transition>
    </main>
    <ScrollTopButton />
    <portal-target name="modals"></portal-target>
  </div>
</template>

<script>
import Navbar from '@component/common/Navbar'
import ScrollTopButton from '@component/common/ScrollTopButton'

export default {
  name: 'service-app',
  components: {
    Navbar,
    ScrollTopButton
  }
}
</script>
