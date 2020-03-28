<template>
  <div>
    <p>
      Hello World my friend reload
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

      htmlElement.setAttribute('theme', this.darkMode ? 'dark' : 'light')
    }
  }
}
</script>
