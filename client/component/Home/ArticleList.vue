<template>
  <div class="home__article-list">
    <h2
      @click="redirectToCategoryList()"
      :class="'article-list__label ' + labelStyle"
    >
      {{ label }}
    </h2>
    <Slider :slidesToShow="4" :slidesToScroll="4" :responsive="responsive">
      <div v-for="article in articles" :key="article.articleId">
        <ArticleCard :article="article" />
      </div>
    </Slider>
  </div>
</template>

<script>
import Slider from '../common/Slider'
import ArticleCard from '../common/ArticleCard'

import calculateSliderElements from '@utility/calculateSliderElements'

export default {
  name: 'ArticleList',
  components: {
    Slider,
    ArticleCard
  },
  computed: {
    labelStyle() {
      if (this.categoryId) {
        return 'article-list__label--hover'
      }

      return ''
    }
  },
  methods: {
    redirectToCategoryList() {
      if (this.categoryId) {
        this.$router.push(`/articles/${this.categoryId}`)
      }
    }
  },
  data() {
    const smallScreenSliderElements = calculateSliderElements(this.articles, 2)
    const mediumScreenSliderElements = calculateSliderElements(this.articles, 3)

    return {
      responsive: [
        {
          breakpoint: 1919,
          settings: {
            slidesToShow: mediumScreenSliderElements,
            slidesToScroll: mediumScreenSliderElements
          }
        },
        {
          breakpoint: 1367,
          settings: {
            centerPadding: '40px',
            slidesToShow: mediumScreenSliderElements,
            slidesToScroll: mediumScreenSliderElements
          }
        },
        {
          breakpoint: 1023,
          settings: {
            centerPadding: '20px',
            slidesToShow: smallScreenSliderElements,
            slidesToScroll: smallScreenSliderElements
          }
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
            centerPadding: '0px'
          }
        }
      ]
    }
  },
  props: {
    label: { type: String, required: true },
    articles: { type: Array, required: true },
    categoryId: { type: Number, required: false, default: null }
  }
}
</script>
