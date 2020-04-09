<template>
  <div class="home__article-list">
    <h2 class="article-list__label">
      {{ label }}
    </h2>
    <Slider
      :slidesToShow="6"
      :slidesToScroll="6"
      :responsive="responsive"
    >
      <div v-for="article in articles" :key="article.articleId">
        <ArticleCard :article="article" />
      </div>
    </Slider>
  </div>
</template>

<script>
import Slider from '../common/Slider'
import ArticleCard from '../common/ArticleCard'

import getSliderElements from '@utility/getSliderElements'

export default {
  name: 'ArticleList',
  components: {
    Slider,
    ArticleCard
  },
  data () {
    const smallScreenSliderElements = getSliderElements(this.articles, 2)
    const largeScreenSliderElements = getSliderElements(this.articles, 4)
    const mediumScreenSliderElements = getSliderElements(this.articles, 3)

    return {
      responsive: [
        {
          breakpoint: 1919,
          settings: {
            slidesToShow: largeScreenSliderElements,
            slidesToScroll: largeScreenSliderElements
          }
        },
        {
          breakpoint: 1367,
          settings: {
            slidesToShow: mediumScreenSliderElements,
            slidesToScroll: mediumScreenSliderElements
          }
        },
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: smallScreenSliderElements,
            slidesToScroll: smallScreenSliderElements
          }
        },
        {
          breakpoint: 750,
          centerPadding: '20px',
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }
  },
  props: {
    label: { type: String, required: true },
    articles: { type: Array, required: true }
  }
}
</script>