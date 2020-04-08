<template>
  <Slider
    :slidesToShow="6"
    :slidesToScroll="6"
    :responsive="responsive"
  >
    <div v-for="article in articles" :key="article.articleId">
      <ArticleCard />
    </div>
    <div v-for="article in articles" :key="article.articleId">
      <ArticleCard />
    </div>
  </Slider>
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
    const largeScreenSliderElements = getSliderElements([...this.articles, ...this.articles], 4)
    const smallScreenSliderElements = getSliderElements(this.articles, 2)
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
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }
  },
  props: {
    articles: { type: Array, required: true }
  }
}
</script>