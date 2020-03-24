import React, { ReactElement } from 'react'
import { mount, ReactWrapper } from 'enzyme'
import { act } from '@testing-library/react-hooks'

import Toast from '../Toast'

import ThemeProviderMock from '@component/utility/ThemeProviderMock'

import EToastType from '@type/common/EToastType'

const onClickMock = jest.fn()

const mountComponent = (element: ReactElement): ReactWrapper =>
  mount(<ThemeProviderMock>{element}</ThemeProviderMock>)

jest.useFakeTimers()

describe('Toast Component', () => {
  it('should render', () => {
    const wrapper = mountComponent(
      <Toast type={EToastType.INFO} content="content" onClick={onClickMock} />
    )

    expect(wrapper.exists()).toBeTruthy()
  })

  it('should render Toast Component as label', () => {
    const wrapper = mountComponent(
      <Toast type={EToastType.INFO} content="content" onClick={onClickMock} />
    )

    expect(wrapper.find('label').props().children).toEqual('content')
  })

  describe('should call onClick Function', () => {
    it('if user click on the notification', () => {
      const wrapper = mountComponent(
        <Toast type={EToastType.INFO} content="content" onClick={onClickMock} />
      )

      wrapper.find('label').simulate('click')

      expect(onClickMock).toHaveBeenCalled()
    })

    it('after 5000ms', () => {
      const wrapper = mountComponent(
        <Toast type={EToastType.INFO} content="content" onClick={onClickMock} />
      )

      act(() => {
        jest.advanceTimersByTime(5000)
      })
      wrapper.mount()

      expect(onClickMock).toHaveBeenCalled()
    })
  })
})
