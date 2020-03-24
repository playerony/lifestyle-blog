import React from 'react'
import { mount, ReactWrapper } from 'enzyme'

import LoadingPage from '../Loading'
import Loader from '@component/common/Loader'
import ThemeProviderMock from '@component/utility/ThemeProviderMock'

const setUp = (): ReactWrapper =>
  mount(
    <ThemeProviderMock>
      <LoadingPage />
    </ThemeProviderMock>
  )

describe('Loading Page', () => {
  it('should render', () => {
    const wrapper = setUp()

    expect(wrapper.exists()).toBeTruthy()
    expect(wrapper.find(Loader).length).toEqual(1)
  })

  it('should render Loader Component', () => {
    const wrapper = setUp()

    expect(wrapper.exists()).toBeTruthy()
    expect(wrapper.exists(Loader)).toBeTruthy()
  })
})
