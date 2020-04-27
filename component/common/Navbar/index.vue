<template>
  <nav :class="'navbar ' + getNavbarStyle">
    <div class="navbar__content">
      <LogoSVG class="logo-icon" @click="redirectToHome()" />
      <div class="content__switch">
        <SunSVG class="sun-icon" />
        <Checkbox v-model="darkMode" :initialValue="darkMode" />
        <MoonSVG class="moon-icon" />
      </div>
      <SearchButton />
    </div>
  </nav>
</template>

<script>
import SearchButton from './SearchButton'
import Checkbox from '@component/generic/Checkbox'

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
    Checkbox,
    SearchButton
  },
  data() {
    return {
      darkMode: false,
      showNavbar: true,
      lastScrollPosition: 0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)

    let theme = localStorage.getItem('theme')

    this.darkMode = theme === 'dark'
    document.documentElement.setAttribute(
      'theme',
      this.darkMode ? 'dark' : 'light'
    )
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  watch: {
    darkMode: function() {
      localStorage.setItem('theme', this.darkMode ? 'dark' : 'light')
      document.documentElement.setAttribute(
        'theme',
        this.darkMode ? 'dark' : 'light'
      )
    }
  },
  computed: {
    getNavbarStyle() {
      if (!this.showNavbar) {
        return 'navbar--hidden'
      }

      return ''
    }
  },
  methods: {
    redirectToHome() {
      if (this.$route.path !== routeList.base) {
        this.$router.push(routeList.base)
      }
    },
    onScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop

      if (currentScrollPosition < 0) {
        return
      }

      this.showNavbar =
        currentScrollPosition < this.lastScrollPosition ||
        currentScrollPosition < 200
      this.lastScrollPosition = currentScrollPosition
    }
  }
}
</script>
