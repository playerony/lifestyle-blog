import React from 'react'
import { mount } from 'enzyme'

import Loader from '../Loader'
import ThemeProviderMock from '../../utility/ThemeProviderMock'

describe('Loader Component', () => {
  it('should render', () => {
    const wrapper = mount(
      <ThemeProviderMock>
        <Loader />
      </ThemeProviderMock>
    )

    expect(wrapper).toBeDefined()
    expect(wrapper.find('div').length).toEqual(21)
  })
})
