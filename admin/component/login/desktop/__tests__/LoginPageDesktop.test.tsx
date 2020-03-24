import React from 'react'
import { mount, ReactWrapper } from 'enzyme'
import { act } from '@testing-library/react-hooks'

import LoginPageDesktop from '..'
import LoginForm from '../LoginForm'
import LogoWrapper from '../LogoWrapper'

import ThemeProviderMock from '@component/utility/ThemeProviderMock'

import ILoginRequest from '@type/login/ILoginRequest'
import TResponseError from '@type/common/TResponseError'

jest.useFakeTimers()

const mountComponent = (element: React.ReactElement): ReactWrapper =>
  mount(<ThemeProviderMock>{element}</ThemeProviderMock>)

describe('LoginPageDesktop Component', () => {
  beforeAll(() => {
    console.error = jest.fn()
  })

  it('should render', () => {
    const wrapper = mountComponent(
      <LoginPageDesktop {...LOGIN_PAGE_PROPS_MOCK} />
    )

    expect(wrapper.exists()).toBeTruthy()
  })

  it('should render LogoWrapper', () => {
    const wrapper = mountComponent(
      <LoginPageDesktop {...LOGIN_PAGE_PROPS_MOCK} />
    )

    expect(wrapper.exists(LogoWrapper)).toBeTruthy()
  })

  it('should render LoginForm', () => {
    const wrapper = mountComponent(
      <LoginPageDesktop {...LOGIN_PAGE_PROPS_MOCK} />
    )

    act(() => {
      jest.advanceTimersByTime(3000)
    })
    wrapper.mount()

    expect(wrapper.find(LoginForm).props()).toEqual({
      onLoginDataChange: jasmine.any(Function),
      errorData: ERROR_DATA_MOCK,
      preventNextRequest: true
    })
  })
})

const ERROR_DATA_MOCK: TResponseError<ILoginRequest> = {
  password: [],
  login: ['error message']
}

const LOGIN_PAGE_PROPS_MOCK = {
  preventNextRequest: true,
  errorData: ERROR_DATA_MOCK,
  onLoginDataChange: jest.fn()
}
