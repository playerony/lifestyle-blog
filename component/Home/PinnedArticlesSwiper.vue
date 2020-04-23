<template>
  <div class="pinned-articles-swiper">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide
        v-for="article in getPinnedArticles()"
        :key="article.articleId"
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
  name: 'PinnedArticlesSwiper',
  components: {
    Swiper,
    SwiperSlide,
    ArticleCard
  },
  props: {
    articles: { type: Array, required: true }
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
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
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 30
          },
          750: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 20
          }
        }
      }
    }
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
