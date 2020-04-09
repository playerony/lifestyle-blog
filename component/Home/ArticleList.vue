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
    const mediumScreenSliderElements = getSliderElements(this.articles, 3)

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
    articles: { type: Array, required: true }
  }
}
</script>