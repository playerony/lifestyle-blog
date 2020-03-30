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
    <Textarea
      :label="label"
      placeholder="value"
      v-model="inputValue"
    />
    <Checkbox v-model="isChecked" />
  </div>
</template>

<script>
import Input from './generic/Input'
import Button from './generic/Button'
import Checkbox from './generic/Checkbox'
import Textarea from './generic/Textarea'

export default {
  name: 'HelloWorld',
  components: {
    Input,
    Button,
    Checkbox,
    Textarea
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
      inputValue: '',
      isChecked: false
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
