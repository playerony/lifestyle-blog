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
    <RecycleScroller
      :key-field="id"
      :itemSize="rowHeight"
      v-slot="{ item: row }"
      :page-mode="isPageMode"
      :items="getArticleList()"
      :key="gridRowElements * rowHeight"
    >
      <div class="article-list__content">
        <ArticleCard
          :article="article"
          :key="article.articleId"
          v-for="article in row.items"
        />
      </div>
    </RecycleScroller>
  </div>
</template>

<script>
import { RecycleScroller } from 'vue-virtual-scroller'

import MenuItem from './MenuItem'
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
      rowHeight: 300,
      gridRowElements: 3,
      sortingBy: 'latest'
    }
  },
  components: {
    MenuItem,
    ArticleCard,
    RecycleScroller
  },
  mounted() {
    window.addEventListener('resize', this.onResize)

    this.onResize()
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
  computed: {
    isPageMode() {
      return this.articles.length / this.gridRowElements > 5
    }
  },
  methods: {
    selectedItemStyle(name) {
      if (name === this.sortingBy) {
        return 'menu__item--selected'
      }

      return ''
    },
    setSortingBy(sortingBy) {
      this.sortingBy = sortingBy
    },
    onResize() {
      const windowWidth = document.body.clientWidth

      if (windowWidth < 750) {
        this.rowHeight = 270
        this.gridRowElements = 1
      } else if (windowWidth < 1367) {
        this.rowHeight = 320
        this.gridRowElements = 2
      } else if (windowWidth < 1919) {
        this.rowHeight = 340
        this.gridRowElements = 3
      } else {
        this.rowHeight = 360
        this.gridRowElements = 3
      }
    },
    getArticleList() {
      const articleList = sortArticleList(this.articles, this.sortingBy)

      let index = 0
      let result = []
      let rowItems = []
      for (index = 0; index < articleList.length; index++) {
        if (index % this.gridRowElements === 0 && index !== 0) {
          result.push({ id: `row_${index}`, items: rowItems })
          rowItems = []
        }

        rowItems.push({
          ...articleList[index],
          id: articleList[index].articleId
        })
      }

      if (rowItems.length) {
        result.push({ id: `row_${index}`, items: rowItems })
      }

      return result
    }
  }
}
</script>
