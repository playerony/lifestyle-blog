<template>
  <div class="pinned-articles-swiper">
    <swiper ref="mySwiper" class="swiper" :options="swiperOption">
      <swiper-slide
        :key="article.articleId"
        v-for="article in getPinnedArticles()"
      >
        <ArticleCard :article="article" />
      </swiper-slide>
      <LeftArrowSVG
        class="swiper-button-prev"
        slot="button-prev"
      ></LeftArrowSVG>
      <RightArrowSVG
        class="swiper-button-next"
        slot="button-next"
      ></RightArrowSVG>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

import ArticleCard from '../common/ArticleCard'
import LeftArrowSVG from '@asset/svg/left-arrow.svg'
import RightArrowSVG from '@asset/svg/right-arrow.svg'

import { PINNED_CATEGORY_ID } from '@config/constant'

export default {
  name: 'home-pinned-articles-swiper',
  props: {
    articles: { type: Array, required: true }
  },
  data() {
    return {
      swiperOption: {
        speed: 500,
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
          delay: 7500,
          disableOnInteraction: false
        },
        breakpoints: {
          1367: {
            spaceBetween: -28,
            slidesPerView: 3,
            slidesPerGroup: 3
          },
          750: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: -26
          }
        }
      }
    }
  },
  components: {
    Swiper,
    SwiperSlide,
    ArticleCard,
    LeftArrowSVG,
    RightArrowSVG
  },
  mounted() {
    this.$refs.mySwiper.destroySwiper = () => {}
  },
  methods: {
    getPinnedArticles() {
      return this.articles.filter(article =>
        article.categoryList.find(
          category => category.categoryId === PINNED_CATEGORY_ID
        )
      )
    }
  }
}
</script>
