<template>
  <Container>
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
  </Container>
</template>

<script>
import Input from './generic/Input'
import Button from './generic/Button'
import Checkbox from './generic/Checkbox'
import Textarea from './generic/Textarea'
import Container from './common/Container'

export default {
  name: 'HelloWorld',
  components: {
    Input,
    Button,
    Checkbox,
    Textarea,
    Container
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
