import React from 'react'
import Slider from 'react-slick'

import { ISliderProps } from './Slider.type'

import { StyledWrapper } from './Slider.style'

const SliderWrapper = ({ children, ...sliderProps }: ISliderProps): JSX.Element => (
  <StyledWrapper>
    <Slider {...sliderProps}>
      {children}
    </Slider>
  </StyledWrapper>
)

export default React.memo(SliderWrapper)
