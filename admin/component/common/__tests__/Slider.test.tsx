import Slick from 'react-slick'
import React, { ReactElement } from 'react'
import { mount, ReactWrapper } from 'enzyme'

import Slider from '../Slider'

import ThemeProviderMock from '@component/utility/ThemeProviderMock'

const mountComponent = (element: ReactElement): ReactWrapper =>
  mount(<ThemeProviderMock>{element}</ThemeProviderMock>)

describe('Slider Component', () => {
  it('should render', () => {
    const wrapper = mountComponent(
      <Slider>
        <SliderElementMock />
      </Slider>
    )

    expect(wrapper.exists()).toBeTruthy()
  })

  describe('Slick Component', () => {
    it('should render', () => {
      const wrapper = mountComponent(
        <Slider>
          <SliderElementMock />
        </Slider>
      )

      expect(wrapper.exists(Slick)).toBeTruthy()
    })

    it('should be wrapped with div element', () => {
      const wrapper = mountComponent(
        <Slider>
          <SliderElementMock />
        </Slider>
      )

      expect(
        wrapper
          .find(Slick)
          .parent()
          .type()
      ).toEqual('div')
    })
  })
})

const SliderElementMock = (): JSX.Element => <h1>Slider Element Mock</h1>
