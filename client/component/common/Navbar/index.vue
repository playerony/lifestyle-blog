<template>
  <nav :class="'navbar ' + navbarStyle">
    <div class="navbar__content">
      <LogoSVG :class="'logo-icon ' + logoStyle" @click="redirectToHome" />
      <SearchButton />
      <ThemeSwitch />
    </div>
    <div
      class="navbar__progress"
      :style="{
        width: `${progress}%`,
        opacity: !isArticlePage || progress === 100 ? 0 : 1
      }"
    />
  </nav>
</template>

<script>
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'

import checkDocumentElement from '@utility/checkDocumentElement'
import getCurrentScrollPosition from '@utility/getCurrentScrollPosition'

import routeList from '@config/routeList'

import LogoSVG from '@asset/svg/logo.svg'

export default {
  name: 'common-navbar',
  data() {
    return {
      progress: 0,
      showNavbar: true,
      lastScrollPosition: 0,
      isHomePage: this.$route.matched[0]?.path === '',
      isArticlePage: this.$route.matched[0]?.path === routeList.article.path
    }
  },
  components: {
    LogoSVG,
    ThemeSwitch,
    SearchButton
  },
  mounted() {
    window.addEventListener('scroll', this.calculateProgress)

    this.recalculateProgress()
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.calculateProgress)
  },
  computed: {
    navbarStyle() {
      if (!this.showNavbar) {
        return 'navbar--hidden'
      }

      return ''
    },
    logoStyle() {
      if (this.isHomePage) {
        return 'logo-icon--in-active'
      }

      return ''
    }
  },
  methods: {
    redirectToHome() {
      if (this.$route?.path !== routeList.base) {
        this.$router.push(routeList.base)
      }
    },
    recalculateProgress() {
      checkDocumentElement('#article-content').then(() => {
        this.calculateProgress()
      })
    },
    calculateProgress() {
      const currentScrollPosition = getCurrentScrollPosition()

      if (currentScrollPosition < 0) {
        return
      }

      if (this.isArticlePage) {
        const articleContent = document.getElementById('article-content')

        if (articleContent) {
          const currentArticlePosition =
            currentScrollPosition - articleContent.offsetTop

          if (
            currentArticlePosition < 0 ||
            currentArticlePosition > articleContent.scrollHeight
          ) {
            this.progress = 0

            return
          }

          this.progress = Math.round(
            (currentArticlePosition * 100) / articleContent.scrollHeight
          )
        }
      }

      this.showNavbar =
        currentScrollPosition < this.lastScrollPosition ||
        currentScrollPosition < 200 ||
        this.isArticlePage

      this.lastScrollPosition = currentScrollPosition
    }
  },
  watch: {
    $route(to) {
      this.isHomePage = to.matched[0]?.path === ''
      this.isArticlePage = to.matched[0]?.path === routeList.article.path

      if (this.isArticlePage) {
        this.recalculateProgress()
      } else {
        this.progress = 0
      }
    }
  }
}
</script>
