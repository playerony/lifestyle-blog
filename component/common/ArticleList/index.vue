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
    <transition-group
      tag="div"
      name="list-transition"
      class="article-list__content"
    >
      <ArticleCard
        :article="article"
        :key="article.articleId"
        v-for="article in getArticleList"
      />
    </transition-group>
    <Tooltip
      title="Show more"
      :onClick="showMoreClick"
      v-if="shouldRenderShowMoreButton"
      class="article-list__show-more-icon"
    >
      <DynamicIcon icon="left-arrow" />
    </Tooltip>
  </div>
</template>

<script>
import Tooltip from '../Tooltip'
import MenuItem from './MenuItem'
import ArticleCard from '../ArticleCard'
import DynamicIcon from '../DynamicIcon'

import sortArticleList from '@utility/sortArticleList'

import menuOptions from './menuOptions'
import { ARTICLE_LIST_PAGE_SIZE } from '@config/constant'

export default {
  name: 'common-article-list',
  props: {
    articles: { type: Array, required: true },
    displayMenu: { type: Boolean, required: false, default: true }
  },
  data() {
    return {
      menuOptions,
      sortingBy: 'latest',
      pageSize: ARTICLE_LIST_PAGE_SIZE,
      limitItems: ARTICLE_LIST_PAGE_SIZE
    }
  },
  components: {
    Tooltip,
    MenuItem,
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
    },
    showMoreClick() {
      this.limitItems = this.limitItems + this.pageSize
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
    }
  }
}
</script>
