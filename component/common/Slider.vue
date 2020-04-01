<template>
  <div class="slider">
    <VueSlickCarousel
      :speed="500"
      :arrows="true"
      :class="center"
      :lazyLoad="ondemand"
      :swipeToSlide="true"
      :responsive="responsive"
      :slidesToShow="slidesToShow"
      :slidesToScroll="slidesToScroll"
    >
      <slot>slider</slot>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'

export default {
  name: 'Slider',
  components: { VueSlickCarousel },
  props: {
    slidesToShow: { type: Number, required: true },
    slidesToScroll: { type: Number, required: true },
    responsive: { type: Array, required: false, default: null }
  }
}
</script>
