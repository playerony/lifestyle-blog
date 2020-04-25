<template>
  <nav class="navbar">
    <div class="navbar__content">
      <LogoSVG class="logo-icon" @click="redirectToHome()" />
      <div class="content__switch">
        <SunSVG class="sun-icon" />
        <Checkbox v-model="darkMode" :initialValue="darkMode" />
        <MoonSVG class="moon-icon" />
      </div>
    </div>
  </nav>
</template>

<script>
import Checkbox from '../generic/Checkbox'

import SunSVG from '@asset/svg/sun.svg'
import LogoSVG from '@asset/svg/logo.svg'
import MoonSVG from '@asset/svg/moon.svg'

import routeList from '@config/routeList'

export default {
  name: 'Navbar',
  components: {
    SunSVG,
    LogoSVG,
    MoonSVG,
    Checkbox
  },
  data() {
    return {
      darkMode: false
    }
  },
  mounted() {
    let htmlElement = document.documentElement
    let theme = localStorage.getItem('theme')

    if (theme === 'dark') {
      htmlElement.setAttribute('theme', 'dark')
      this.darkMode = true
    } else {
      htmlElement.setAttribute('theme', 'light')
      this.darkMode = false
    }
  },
  watch: {
    darkMode: function() {
      let htmlElement = document.documentElement

      if (this.darkMode) {
        localStorage.setItem('theme', 'dark')
        htmlElement.setAttribute('theme', 'dark')
      } else {
        localStorage.setItem('theme', 'light')
        htmlElement.setAttribute('theme', 'light')
      }
    }
  },
  methods: {
    redirectToHome() {
      if (this.$route.path !== routeList.base) {
        this.$router.push(routeList.base)
      }
    }
  }
}
</script>
