<template>
  <div class="article-list">
    <div class="article-list__content">
      <ArticleCard
        :article="article"
        :key="article.articleId"
        v-for="article in articleList"
      />
    </div>
    <Pagination
      :pageSize="pageSize"
      v-if="displayPagination"
      :currentPage="currentPage"
      :allElements="articles.length"
      :setCurrentPage="setCurrentPage"
    />
  </div>
</template>

<script>
import Pagination from './Pagination'
import ArticleCard from '../ArticleCard'

export default {
  name: 'common-article-list',
  props: {
    articles: { type: Array, required: true },
    displayPagination: { type: Boolean, required: false, default: true }
  },
  data() {
    return {
      pageSize: 6,
      currentPage: 1
    }
  },
  components: {
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
      const offset = (this.currentPage - 1) * this.pageSize

      return this.articles.slice(offset, offset + this.pageSize)
    }
  },
  methods: {
    selectedItemStyle(name) {
      if (name === this.sortingBy) {
        return 'menu__item--selected'
      }

      return ''
    },
    setCurrentPage(currentPage, disabled) {
      if (!disabled) {
        this.currentPage = currentPage
      }
    },
    onResize() {
      const windowWidth = document.body.clientWidth

      if (windowWidth < 750) {
        this.pageSize = 4
        this.currentPage = 1
      } else if (windowWidth < 1367) {
        this.pageSize = 4
        this.currentPage = 1
      } else if (windowWidth < 1919) {
        this.pageSize = 6
        this.currentPage = 1
      } else {
        this.pageSize = 6
        this.currentPage = 1
      }
    }
  }
}
</script>
