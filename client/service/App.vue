<template>
  <div id="app">
    <HelloWorld />
    <router-view />
  </div>
</template>

<script>
import HelloWorld from '@component/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>
