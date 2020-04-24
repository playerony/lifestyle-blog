<template>
  <div class="article-list">
    <ul class="article-list__menu">
      <label
        @click="sortingBy = 'latest'"
        :class="'menu__item ' + selectedItemStyle('latest')"
      >
        Latest
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
        v-for="article in getArticleList()"
      />
    </transition-group>
  </div>
</template>

<script>
import ArticleCard from './ArticleCard'

export default {
  name: 'ArticleList',
  props: {
    articles: { type: Array, required: true }
  },
  data() {
    return {
      sortingBy: 'latest'
    }
  },
  components: {
    ArticleCard
  },
  methods: {
    selectedItemStyle(name) {
      if (name === this.sortingBy) {
        return 'menu__item--selected'
      }

      return ''
    },
    getArticleList() {
      if (this.sortingBy === 'latest') {
        return this.articles.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )
      } else if (this.sortingBy === 'most-commented') {
        return this.articles.sort((a, b) => b.totalComments - a.totalComments)
      }

      return this.articles.sort((a, b) => b.totalVisitors - a.totalVisitors)
    }
  }
}
</script>
