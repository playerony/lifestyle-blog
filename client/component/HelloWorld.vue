<template>
  <div>
    <p>
      Hello World my friend reload
    </p>
    <input type="checkbox" v-model="darkMode"/>
    <Button :onClick="consoleClick">
      <h1>Example button</h1>
    </Button>
  </div>
</template>

<script>
import Button from './generic/Button'

export default {
  name: 'HelloWorld',
  components: {
    Button
  },
  methods: {
    consoleClick() {
      console.log('Button clicked')
    }
  },
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
