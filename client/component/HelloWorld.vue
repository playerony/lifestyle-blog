<template>
  <div class="hello">
    <p>
      Hello World my friend
    </p>
    <input type="checkbox" v-model="darkMode"/>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      darkMode: false
    }
  },
  watch: {
    darkMode: function () {
      let htmlElement = document.documentElement

      if (this.darkMode) {
        htmlElement.setAttribute('theme', 'dark')
      } else {
        htmlElement.setAttribute('theme', 'light')
      }
    }
  }
}
</script>
