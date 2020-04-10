import { shallowMount } from '@vue/test-utils'

import doWatchMediaMock from '@utility/doWatchMediaMock'

const setUp = propsData => {
  const Slider = require('../Slider').default

  return shallowMount(Slider, { propsData })
}

describe('Slider Component', () => {
  beforeAll(() => {
    doWatchMediaMock()
  })

  it('should render', () => {
    const wrapper = setUp({ slidesToShow: 1, slidesToScroll: 1 })

    expect(wrapper.exists()).toBeTruthy()
  })

  it('is a Vue instance', () => {
    const wrapper = setUp({ slidesToShow: 1, slidesToScroll: 1 })

    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  describe('slider div wrapper', () => {
    it('should contain proper class name', () => {
      const wrapper = setUp({ slidesToShow: 1, slidesToScroll: 1 })

      expect(wrapper.find('div').attributes().class).toEqual('slider')
    })
  })

  describe('slider component', () => {
    it('should render', () => {
      const wrapper = setUp({ slidesToShow: 1, slidesToScroll: 1 })

      expect(wrapper.exists('vueslickcarousel-stub')).toBeTruthy()
    })

    it('should contain proper props', () => {
      const wrapper = setUp({ slidesToShow: 1, slidesToScroll: 1 })

      const sliderProps = wrapper.find('vueslickcarousel-stub').attributes()
      expect(sliderProps).toEqual(SLIDER_PROPS_MOCK)
    })
  })
})

const SLIDER_PROPS_MOCK = {
  accessibility: 'true',
  arrows: 'true',
  autoplayspeed: '3000',
  centermode: 'true',
  centerpadding: '60px',
  cssease: 'ease',
  dotsclass: 'slick-dots',
  draggable: 'true',
  edgefriction: '0.35',
  infinite: 'true',
  initialslide: '0',
  lazyload: 'ondemand',
  pauseonhover: 'true',
  rows: '1',
  slidesperrow: '1',
  slidestoscroll: '1',
  slidestoshow: '1',
  speed: '500',
  swipe: 'true',
  swipetoslide: 'true',
  touchmove: 'true',
  touchthreshold: '5',
  usecss: 'true',
  usetransform: 'true',
  waitforanimate: 'true'
}
