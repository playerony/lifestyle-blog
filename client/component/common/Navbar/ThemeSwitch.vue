<template>
  <div class="theme-switch">
    <SunSVG class="theme-switch__sun-icon" />
    <Checkbox v-model="darkMode" :initialValue="darkMode" />
    <MoonSVG class="theme-switch__moon-icon" />
  </div>
</template>

<script>
import Checkbox from '@component/generic/Checkbox'

import SunSVG from '@asset/svg/sun.svg'
import MoonSVG from '@asset/svg/moon.svg'

import { THEME_MODE } from '@config/constant'

export default {
  name: 'common-theme-switch',
  data() {
    return {
      darkMode: false
    }
  },
  components: {
    SunSVG,
    MoonSVG,
    Checkbox
  },
  mounted() {
    const theme = localStorage.getItem(THEME_MODE)

    this.darkMode = theme === 'dark'
    document.documentElement.setAttribute(
      'theme',
      this.darkMode ? 'dark' : 'light'
    )
  },
  watch: {
    darkMode: function() {
      localStorage.setItem(THEME_MODE, this.darkMode ? 'dark' : 'light')
      document.documentElement.setAttribute(
        'theme',
        this.darkMode ? 'dark' : 'light'
      )
    }
  }
}
</script>
