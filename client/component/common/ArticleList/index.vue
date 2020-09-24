<template>
  <div class="article-list">
    <ul v-if="displayMenu" class="article-list__menu">
      <MenuItem
        :onClick="setSortingBy"
        :key="menuOption.label"
        :menuOption="menuOption"
        v-for="menuOption in menuOptions"
        :class="selectedItemStyle(menuOption.sortingBy)"
      />
    </ul>
    <div class="article-list__content">
      <ArticleCard
        :article="article"
        :key="article.articleId"
        v-for="article in articleList"
      />
    </div>
    <Pagination
      :pageSize="pageSize"
      :sortingBy="sortingBy"
      :currentPage="currentPage"
      :allElements="articles.length"
      :setCurrentPage="setCurrentPage"
    />
  </div>
</template>

<script>
import MenuItem from './MenuItem'
import Pagination from './Pagination'
import ArticleCard from '../ArticleCard'

import sortArticleList from '@utility/sortArticleList'

import menuOptions from './menuOptions'

export default {
  name: 'common-article-list',
  props: {
    articles: { type: Array, required: true },
    displayMenu: { type: Boolean, required: false, default: true }
  },
  data() {
    return {
      menuOptions,
      pageSize: 1,
      currentPage: 1,
      sortingBy: 'latest'
    }
  },
  components: {
    MenuItem,
    Pagination,
    ArticleCard
  },
  mounted() {
    window.addEventListener('resize', this.onResize)

    this.onResize()
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
  computed: {
    displayBackButton() {
      return Math.ceil(this.articles.length / this.pageSize) > this.currentPage
    },
    displayNextButton() {
      return this.currentPage > 1
    },
    articleList() {
      const articles = sortArticleList(this.articles, this.sortingBy)
      const offset = (this.currentPage - 1) * this.pageSize

      return articles.slice(offset, offset + this.pageSize)
    }
  },
  methods: {
    selectedItemStyle(name) {
      if (name === this.sortingBy) {
        return 'menu__item--selected'
      }

      return ''
    },
    setCurrentPage(currentPage) {
      this.currentPage = currentPage
    },
    setSortingBy(sortingBy) {
      this.currentPage = 1
      this.sortingBy = sortingBy
    },
    onResize() {
      // const windowWidth = document.body.clientWidth
      // if (windowWidth < 750) {
      //   this.pageSize = 1
      //   this.currentPage = 1
      // } else if (windowWidth < 1367) {
      //   this.pageSize = 6
      //   this.currentPage = 1
      // } else if (windowWidth < 1919) {
      //   this.pageSize = 9
      //   this.currentPage = 1
      // } else {
      //   this.pageSize = 9
      //   this.currentPage = 1
      // }
    }
  }
}
</script>
