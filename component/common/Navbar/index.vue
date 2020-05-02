<template>
  <nav :class="'navbar ' + getNavbarStyle">
    <div class="navbar__content">
      <LogoSVG class="logo-icon" @click="redirectToHome()" />
      <ThemeSwitch />
      <SearchButton />
    </div>
    <div
      class="navbar__progress"
      :style="{ width: `${progress}%`, opacity: progress === 100 ? 0 : 1 }"
    />
  </nav>
</template>

<script>
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'

import LogoSVG from '@asset/svg/logo.svg'

import routeList from '@config/routeList'

export default {
  name: 'Navbar',
  components: {
    LogoSVG,
    ThemeSwitch,
    SearchButton
  },
  data() {
    return {
      progress: 0,
      showNavbar: true,
      lastScrollPosition: 0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
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

      const isArticlePage = this.$route.matched[0].path === routeList.article

      if (currentScrollPosition < 0) {
        return
      }

      if (isArticlePage) {
        const articleContent = document.getElementById('article-content')

        if (articleContent) {
          this.progress = Math.min(
            ((currentScrollPosition +
              window.outerHeight -
              200 -
              articleContent.offsetTop) *
              100) /
              articleContent.scrollHeight,
            100
          )
        }
      }

      this.showNavbar =
        currentScrollPosition < this.lastScrollPosition ||
        currentScrollPosition < 200 ||
        isArticlePage
      this.lastScrollPosition = currentScrollPosition
    }
  }
}
</script>
