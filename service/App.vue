<template>
  <div id="root" class="app">
    <Navbar />
    <main class="app__content">
      <transition name="fade" mode="out-in" appear>
        <keep-alive>
          <router-view />
        </keep-alive>
      </transition>
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
