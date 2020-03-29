<template>
  <div>
    <p>
      Hello World my friend reload
    </p>
    <input type="checkbox" v-model="darkMode"/>
    <Button :onClick="consoleClick">
      <h1>Example button</h1>
    </Button>
    {{ inputValue }}
    <Input
      :label="label"
      placeholder="value"
      v-model="inputValue"
    />
  </div>
</template>

<script>
import Input from './generic/Input'
import Button from './generic/Button'

export default {
  name: 'HelloWorld',
  components: {
    Input,
    Button
  },
  methods: {
    consoleClick() {
      console.log('Button clicked')
    }
  },
  data() {
    return {
      label: 'Test',
      darkMode: false,
      errorMessage: 'Error',
      inputValue: ''
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
