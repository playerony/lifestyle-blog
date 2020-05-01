<template>
  <div class="article-list">
    <ul v-if="displayMenu" class="article-list__menu">
      <label
        @click="sortingBy = 'latest'"
        :class="'menu__item ' + selectedItemStyle('latest')"
      >
        Latest
      </label>
      <label
        @click="sortingBy = 'top-rated'"
        :class="'menu__item ' + selectedItemStyle('top-rated')"
      >
        Top rated
      </label>
      <label
        @click="sortingBy = 'most-viewed'"
        :class="'menu__item ' + selectedItemStyle('most-viewed')"
      >
        Most viewed
      </label>
      <label
        @click="sortingBy = 'most-commented'"
        :class="'menu__item ' + selectedItemStyle('most-commented')"
      >
        Most Commented
      </label>
    </ul>
    <transition-group tag="div" name="list" class="article-list__content">
      <ArticleCard
        :article="article"
        :key="article.articleId"
        v-for="article in getArticleList"
      />
    </transition-group>
    <div
      v-if="shouldRenderShowMoreButton"
      class="article-list__show-more-icon"
      @click="limitItems = limitItems + pageSize"
    >
      <DynamicIcon icon="left-arrow" />
    </div>
  </div>
</template>

<script>
import ArticleCard from './ArticleCard'
import DynamicIcon from './DynamicIcon'

import sortArticleList from '@utility/sortArticleList'

export default {
  name: 'ArticleList',
  props: {
    articles: { type: Array, required: true },
    displayMenu: { type: Boolean, required: false, default: true }
  },
  data() {
    return {
      pageSize: 2,
      limitItems: 2,
      sortingBy: 'latest'
    }
  },
  components: {
    ArticleCard,
    DynamicIcon
  },
  computed: {
    getArticleList() {
      return sortArticleList(this.articles, this.sortingBy).slice(
        0,
        this.limitItems
      )
    },
    shouldRenderShowMoreButton() {
      return this.articles.length - this.limitItems >= 1
    }
  },
  methods: {
    selectedItemStyle(name) {
      if (name === this.sortingBy) {
        return 'menu__item--selected'
      }

      return ''
    },
    showMoreClick() {
      this.limitItems = this.limitItems + this.pageSize
    }
  }
}
</script>
