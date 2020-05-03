<template>
  <div class="pinned-articles-swiper">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide
        :key="article.articleId"
        v-for="article in getPinnedArticles()"
      >
        <ArticleCard :article="article" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

import ArticleCard from '../common/ArticleCard'

export default {
  name: 'home-pinned-articles-swiper',
  props: {
    articles: { type: Array, required: true }
  },
  data() {
    return {
      swiperOption: {
        autoHeight: false,
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchOverflow: true,
        keyboard: {
          enabled: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        breakpoints: {
          1367: {
            spaceBetween: -40,
            slidesPerView: 3,
            slidesPerGroup: 3
          },
          750: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: -30
          }
        }
      }
    }
  },
  components: {
    Swiper,
    SwiperSlide,
    ArticleCard
  },
  methods: {
    getPinnedArticles() {
      return this.articles.filter(article =>
        article.categoryList.find(category => category.categoryId === 3)
      )
    }
  }
}
</script>
